import './Contact.scss'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import Link from './Link';
import contact1 from "../assets/images/contact-1.png"
import contact2 from '../assets/images/contact-2.png'
import contact3 from '../assets/images/contact-3.png'
import usePageScale from '../hooks/usePageScale';
import NowPlaying from './NowPlaying';

const Contact = () => {
    // Window-size scale (see src/hooks/usePageScale.js), read by Contact.scss
    // and Link.scss so the page grows/shrinks with the screen.
    const scale = usePageScale();

    return (
        <div className='contact-page' style={{ '--page-scale': scale }}>
        <div className='contact-title'>
            <img src={contact3} className='contact3' alt='' />
            <div className='contact'>contact</div>
        </div>
        <p className='contact-subtitle'>more of me!</p>
        <div className='links-grid'>
            <Link icon={faLinkedin} label='linkedin' url='https://www.linkedin.com/in/angelinaezhou' type='external'/>
            <Link icon={faGithub} label='github' url='https://github.com/angelinaezhou' type='external'/>
            <Link icon={faEnvelope} label='aezhou721@gmail.com' url='aezhou721@gmail.com' type='email'/>
            <Link icon={faFile} label='my resume' url='https://drive.google.com/file/d/1aPJiFY-LD9k3RyJ88UGmxeAEWSdJ3Tco/view?usp=sharing' type='external'/>
        </div>
        <div className='listening'>
            <NowPlaying heading="what i'm listening to!" />
        </div>
        <img src={contact1} className='contact1' alt='' />
        <img src={contact2} className='contact2' alt='' />
        </div>
    )
}

export default Contact