import "./About.scss";
import about1 from '../assets/images/about-1.png';
import about2 from '../assets/images/about-2.png';
import about3 from '../assets/images/leading.png'; 
import portrait from '../assets/images/about_me.jpg'

const About = () => {
    return (
        <>
        <div className="text">
            <div className="about-me-title">
                <img src={about3} className="about3" />
                <div className="about-me">about me</div>
            </div>
            <div className="about-me-description">
            <p>I am a sophomore majoring in Computer Science + Statistics, minoring in Data Science, and I'm originally from San Diego, California.</p>
            <p>My interests in technology and mathematics are diverse, making me passionate about bringing together computation, analytics, and product design.</p>
            <p>Off the clock, I stay inspired through figure skating, art, photography, and trying new foods!</p>
            </div>
        </div>
        <img src={portrait} className="portrait"/>
        <img src={about1} className="about1"/>
        <img src={about2} className="about2"/>
        </>
    );
}

export default About