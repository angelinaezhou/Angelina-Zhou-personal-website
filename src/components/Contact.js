import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import Link from './Link';
import contact1 from "../assets/images/contact-1.png"
import contact2 from '../assets/images/contact-2.png'
import contact3 from '../assets/images/contact-3.png'

const Contact = () => {
    return (
        <>
        <div className='contact-title'>
            <img src={contact3} className='contact3' />
            <div className='contact'>contact</div>
        </div>
        <div className='links-grid'>
            <Link icon={faLinkedin} label='linkedin' url='https://www.linkedin.com/in/angelinaezhou' type='external'/>
            <Link icon={faGithub} label='github' url='https://github.com/angelinaezhou' type='external'/>
            <Link icon={faEnvelope} label='aezhou721@gmail.com' url='aezhou721@gmail.com' type='email'/>
            <Link icon={faFile} label='my resume' url='https://docs.google.com/document/d/1ux0soJkym4UQWiwEhkw9xiutfO40nkyJBrkwLlqYAhA/edit?usp=sharing' type='external'/>
        </div>
        <img src={contact1} className='contact1' />
        <img src={contact2} className='contact2' />
        </>
    )
}

export default Contact