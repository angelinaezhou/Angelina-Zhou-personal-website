import { useEffect, useState } from 'react';

// The window size the pages were designed on. At exactly this size, pages look
// the way their .scss files describe; other windows scale everything up or
// down to match. To match your screen, run `window.innerWidth` and
// `window.innerHeight` in the browser console.
export const DESIGN_WIDTH = 1512;
export const DESIGN_HEIGHT = 860;

// Use whichever ratio is smaller so everything fits both the width and height.
const getScale = () =>
    Math.min(window.innerWidth / DESIGN_WIDTH, window.innerHeight / DESIGN_HEIGHT);

// Returns the current scale (1 = design size) and keeps it updated on resize.
// Put it on a page's wrapper as the `--page-scale` CSS variable:
//   <div style={{ '--page-scale': scale }}>
const usePageScale = () => {
    const [scale, setScale] = useState(getScale);

    useEffect(() => {
        const onResize = () => setScale(getScale());
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return scale;
};

export default usePageScale;
