import { useEffect, useRef } from 'react';

// Lets the mouse wheel / trackpad scroll one element from anywhere on the
// page, not just while the pointer is over it.
//
// Usage:
//   const ref = useWheelScroll();                  // smooth, free scrolling
//   const ref = useWheelScroll({ snapTo: '.item' }); // one item per scroll
//   <div ref={ref}> ... </div>
//
// With `snapTo` (for elements using CSS scroll-snap), each scroll gesture
// outside the element moves exactly one matching item into the center —
// small free-scroll steps would otherwise just snap back to the same item.
const STEP_THRESHOLD = 30; // how much wheel movement counts as one "scroll"
const STEP_LOCK_MS = 650;  // ignore further wheel input while a step animates

const useWheelScroll = ({ snapTo } = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        let pending = 0;
        let lockedUntil = 0;

        // Scroll position that puts an item's center in the element's center.
        const centerOf = (item) =>
            item.offsetTop + item.offsetHeight / 2 - el.clientHeight / 2;

        const stepBy = (direction) => {
            const items = Array.from(el.querySelectorAll(snapTo));
            if (!items.length) return;
            // The item currently closest to the center.
            const current = items.reduce((best, item, i) =>
                Math.abs(centerOf(item) - el.scrollTop) <
                Math.abs(centerOf(items[best]) - el.scrollTop) ? i : best, 0);
            const next = Math.min(items.length - 1, Math.max(0, current + direction));
            el.scrollTo({ top: centerOf(items[next]), behavior: 'smooth' });
        };

        const onWheel = (e) => {
            // Over the element itself the browser already scrolls it natively.
            if (el.contains(e.target)) return;
            const lineHeight = 16;
            const delta = e.deltaMode === 1 ? e.deltaY * lineHeight : e.deltaY;

            if (!snapTo) {
                el.scrollTop += delta;
                return;
            }

            const now = Date.now();
            if (now < lockedUntil) return; // let trackpad momentum die out
            pending += delta;
            if (Math.abs(pending) >= STEP_THRESHOLD) {
                stepBy(Math.sign(pending));
                pending = 0;
                lockedUntil = now + STEP_LOCK_MS;
            }
        };

        window.addEventListener('wheel', onWheel, { passive: true });
        return () => window.removeEventListener('wheel', onWheel);
    }, [snapTo]);

    return ref;
};

export default useWheelScroll;
