import "./About.scss";
import about1 from '../assets/images/about-1.png';
import about2 from '../assets/images/about-2.png';
import about3 from '../assets/images/leading.png'; 
import portrait from '../assets/images/me.png'
import Timeline from './Timeline';
import usePageScale from '../hooks/usePageScale';

const About = () => {
    // Window-size scale (see src/hooks/usePageScale.js), read by About.scss
    // and Timeline.scss so the whole page grows/shrinks with the screen.
    const scale = usePageScale();

    return (
        <div className="about-page" style={{ '--page-scale': scale }}>
            <div className="about-me-title">
                <img src={about3} className="about3" alt="" />
                <div className="about-me">about me</div>
            </div>
            <div className="about-me-description">
                <img src={portrait} className="portrait" alt="Portrait of me"/>
                <div className="about-me-text">
                <p>I’m a junior majoring in Computer Science + Statistics at UIUC, and I’m originally from San Diego, California!</p>
                <p>My interests in technology and mathematics are diverse, making me passionate about bringing together computation, full-stack development, product design, and more! Feel free to scroll through some of my experiences to the right.</p>
                <p>Off the clock, I stay inspired through figure skating, art, photography, and trying new foods!</p>
                </div>
            </div>
        <img src={about1} className="about1" alt=""/>
        <img src={about2} className="about2" alt=""/>
        <Timeline />
        </div>
    );
}

export default About