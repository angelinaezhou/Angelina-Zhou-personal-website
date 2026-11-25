import useWheelScroll from '../hooks/useWheelScroll';
import './Timeline.scss';
import datadogLogo from '../assets/images/ddog.svg';
import awsLogo from '../assets/images/aws.webp';
import h4iLogo from '../assets/images/h4i.svg';
import uiucLogo from '../assets/images/uiuc.png';

// ─── Your experiences ────────────────────────────────────────────────────────
// Listed top-to-bottom in the order they appear on the timeline. Entries
// alternate sides automatically (first on the right, then left, ...).
//   company      – shown at all times
//   role, dates  – shown at all times
//   description  – only shown while hovering (or tapping) the entry; optional
//   logo         – optional; import an image at the top and put it here,
//                  e.g. `import awsLogo from '../assets/images/aws.png'`
const EXPERIENCES = [
    {
        company: 'University of Illinois Urbana-Champaign',
        role: 'B.S. Computer Science + Statistics',
        dates: 'August 2024 - May 2028',
        description: (
            <>
                Computer Science Student Ambassador and Researcher (
                <a
                    href="https://siebelschool.illinois.edu/broadening-participation-computing/programs/csambassadors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CS STARS
                </a>
                ), Dean's List
            </>
        ),
        logo: uiucLogo,
    },
    {
        company: 'Hack4Impact UIUC',
        role: 'Product Designer - One Degree',
        dates: 'August 2025 – December 2025',
        description: (
            <>
                Designed an AI agent for{' '}
                <a href="https://www.1degree.org/" target="_blank" rel="noopener noreferrer">
                    One Degree (YC W14)
                </a>{' '}
                to help them keep 30,000+ community resource listings up to date, heavily
                reducing manual review work from their team.
            </>
        ),
        logo: h4iLogo,
    },
    {
        company: 'Hack4Impact UIUC',
        role: 'Software Developer - Anda',
        dates: 'January 2026 – May 2026',
        description: (
            <>
                Built a dashboard for{' '}
                <a href="https://andaafrica.com/" target="_blank" rel="noopener noreferrer">
                    Anda
                </a>
                , a mobility nonprofit in Angola, that brings together data on its 1,500+ drivers
                and flags who might need extra support, saving managers days of manual work.
            </>
        ),
        logo: h4iLogo,
    },
    {
        company: 'Amazon',
        role: 'Software Development Engineering Intern',
        dates: 'May 2026 – August 2026',
        description: `Built a daily security analytics pipeline to detect IAM role access violations across 100K+ production AWS accounts and trigger automated remediation workflows.`,
        logo: awsLogo,
    },
    {
        company: 'Hack4Impact UIUC',
        role: 'Technical Product Manager - Kits to Heart',
        dates: 'August 2026 – December 2026',
        description: (
            <>
                Led a team of 8 product designers and software developers to build a care-kit
                request and fulfillment platform for{' '}
                <a href="https://kitstoheart.org" target="_blank" rel="noopener noreferrer">
                    Kits to Heart
                </a>
                , a cancer-support nonprofit shipping 3000+ kits per year to all 50 states.
            </>
        ),
        logo: h4iLogo,
    },
    {
        company: 'Datadog',
        role: 'Software Engineering Intern',
        dates: 'January 2027 – April 2027',
        description: 'to be decided... :o',
        logo: datadogLogo,
    },
];

const Timeline = () => {
    // Scroll the timeline with the mouse wheel / trackpad from anywhere on the
    // page, not just when the pointer is over it.
    const scrollRef = useWheelScroll();

    return (
        <div className="timeline-scroll" ref={scrollRef}>
            <ol className="timeline">
                {EXPERIENCES.map((exp, i) => (
                    <li
                        key={`${exp.company}-${exp.role}`}
                        className={`tl-item ${i % 2 === 0 ? 'tl-right' : 'tl-left'}`}
                        // Focusable so the description also opens on tap / keyboard.
                        tabIndex={exp.description ? 0 : undefined}
                    >
                        <span className="tl-bead" aria-hidden="true" />
                        <div className="tl-card">
                            <div className="tl-head">
                                {exp.logo && <img className="tl-logo" src={exp.logo} alt="" />}
                                <h3 className="tl-company">{exp.company}</h3>
                            </div>
                            <p className="tl-role">{exp.role}</p>
                            <p className="tl-dates">{exp.dates}</p>
                            {exp.description && (
                                <div className="tl-desc">
                                    <div className="tl-desc-clip">
                                        <div className="tl-desc-card">
                                            <p>{exp.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Timeline;
