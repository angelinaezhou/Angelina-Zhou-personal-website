import { useEffect, useState } from 'react';
import './NowPlaying.scss';

// Reads your current / most recent song from Last.fm (which Spotify reports
// to once you connect them). Set these in a `.env` file at the project root:
//   REACT_APP_LASTFM_USERNAME=your_lastfm_username
//   REACT_APP_LASTFM_API_KEY=your_api_key
// then restart `npm start`. The API key is read-only and safe to ship.
const USERNAME = process.env.REACT_APP_LASTFM_USERNAME;
const API_KEY = process.env.REACT_APP_LASTFM_API_KEY;
const REFRESH_MS = 30_000; // how often to check for a new song
// After a failed request, retry sooner: 5s, then 10s, then 20s, then every
// 30s while Last.fm stays down.
const RETRY_DELAYS_MS = [5_000, 10_000, 20_000];
const REQUEST_TIMEOUT_MS = 8_000; // give up on a request that hangs
// The last song that loaded is saved in the visitor's browser under this key,
// so the card can still show something while Last.fm is down.
const CACHE_KEY = 'nowPlaying:lastTrack';

// Last.fm's generic gray star image, used when a track has no album art.
const PLACEHOLDER_ART = '2a96cbd8b46e442fc41c2b86b821562f';

const timeAgo = (unixSeconds) => {
    const mins = Math.floor((Date.now() / 1000 - unixSeconds) / 60);
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
};

// ─── Saved last song ─────────────────────────────────────────────────────────
// Storage can be unavailable (private windows, blocked site data), so every
// access is wrapped and failures are simply ignored.
const saveTrack = (track) => {
    try {
        const savedAt = Math.floor(Date.now() / 1000);
        localStorage.setItem(CACHE_KEY, JSON.stringify({ ...track, savedAt }));
    } catch {
        // ignore
    }
};

// The saved song, shown as "last played" (it may well have finished since).
// A song saved while it was playing counts as played when it was saved.
const loadSavedTrack = () => {
    try {
        const saved = JSON.parse(localStorage.getItem(CACHE_KEY));
        if (!saved?.title) return undefined;
        return {
            title: saved.title,
            artist: saved.artist,
            art: saved.art,
            nowPlaying: false,
            playedAt: saved.playedAt || saved.savedAt || null,
        };
    } catch {
        return undefined;
    }
};

const parseTrack = (data) => {
    // Last.fm sometimes answers "200 OK" with an error inside.
    if (data?.error) throw new Error(`Last.fm error ${data.error}`);
    const track = data?.recenttracks?.track?.[0];
    if (!track) return null;
    const images = track.image || [];
    const art = (images[images.length - 1] || {})['#text'];
    return {
        title: track.name,
        artist: track.artist?.['#text'] || track.artist?.name,
        art: art && !art.includes(PLACEHOLDER_ART) ? art : null,
        nowPlaying: track['@attr']?.nowplaying === 'true',
        playedAt: track.date?.uts ? Number(track.date.uts) : null,
    };
};

// `heading` is shown above the card, and hidden along with it when there's
// nothing to show (Last.fm not set up yet, unreachable, or no songs yet).
const NowPlaying = ({ heading }) => {
    // undefined = still loading, null = loaded but no songs, object = a song.
    // Starts with the saved song (if any) so the card shows up right away,
    // then updates once Last.fm answers.
    const [track, setTrack] = useState(loadSavedTrack);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        if (!USERNAME || !API_KEY) return;
        let cancelled = false;
        let timer;
        let failures = 0;

        const load = async () => {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
            try {
                const url =
                    'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks' +
                    `&user=${encodeURIComponent(USERNAME)}` +
                    `&api_key=${encodeURIComponent(API_KEY)}&format=json&limit=1`;
                const res = await fetch(url, { signal: controller.signal });
                const data = await res.json().catch(() => null);
                if (!res.ok && !data?.error) throw new Error(`Last.fm ${res.status}`);
                const parsed = parseTrack(data);
                if (cancelled) return;
                setTrack(parsed);
                setFailed(false);
                if (parsed) saveTrack(parsed);
                failures = 0;
            } catch {
                if (cancelled) return;
                setFailed(true);
                // Nothing on screen yet? Fall back to the saved song.
                setTrack((current) => current ?? loadSavedTrack());
                failures += 1;
            } finally {
                clearTimeout(timeout);
            }

            if (cancelled) return;
            const delay = failures > 0
                ? RETRY_DELAYS_MS[failures - 1] ?? REFRESH_MS
                : REFRESH_MS;
            timer = setTimeout(load, delay);
        };

        load();
        return () => {
            cancelled = true;
            clearTimeout(timer);
        };
    }, []);

    // Not set up yet, no songs on the account yet, or Last.fm unreachable with
    // no saved song to fall back on: render nothing.
    if (!USERNAME || !API_KEY || track === null || (!track && failed)) return null;

    const headingEl = heading && <p className="listening-subtitle">{heading}</p>;

    // Loading: keep the card's space so the page doesn't jump.
    if (track === undefined) {
        return (
            <>
                {headingEl}
                <div className="now-playing now-playing-loading" aria-hidden="true" />
            </>
        );
    }

    // Opens the song in Spotify (search, since Last.fm doesn't know Spotify IDs).
    const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(
        `${track.title} ${track.artist}`
    )}`;

    return (
        <>
        {headingEl}
        <a
            className="now-playing"
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Open in Spotify"
        >
            {/* Turntable: the record spins and the tone arm sits on it only
                while a song is playing. */}
            <div
                className={`np-turntable${track.nowPlaying ? ' is-playing' : ''}`}
                aria-hidden="true"
            >
                <div className="np-vinyl">
                    <div className="np-label">
                        {track.art ? <img src={track.art} alt="" /> : <span>♪</span>}
                    </div>
                </div>
                {/* Light reflection — doesn't spin, so the record looks glossy */}
                <div className="np-sheen" />
                <div className="np-arm">
                    <span className="np-arm-head" />
                </div>
            </div>
            <div className="np-info">
                <div className="np-title">{track.title}</div>
                <div className="np-artist">{track.artist}</div>
                <div className="np-status">
                    {track.nowPlaying ? (
                        <>
                            <span className="np-bars" aria-hidden="true">
                                <span /><span /><span />
                            </span>
                            now playing
                        </>
                    ) : (
                        <>last played{track.playedAt ? ` · ${timeAgo(track.playedAt)}` : ''}</>
                    )}
                </div>
            </div>
        </a>
        </>
    );
};

export default NowPlaying;
