import './Sidebar.scss'
import { NavLink } from 'react-router-dom'
import blob from '../assets/images/blob.png'; 
import blobglow from '../assets/images/blob1glow.png'
import blob2 from '../assets/images/blob2.png'; 
import blob2glow from '../assets/images/blob2glow.png'; 
import blob3 from '../assets/images/blob3.png';
import blob3glow from '../assets/images/blob3glow.png';

const Sidebar = () => (
    <div className='nav-bar'>

        <nav className="main-nav">
            
            <div className='nav-about'><NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <div className='about-icon'>
                    <img className='about' src={blob} alt="about" />
                    <img className='about-glow' src={blobglow} alt='about-glow' />
                    <span>ABOUT ME</span>
                </div>
            </NavLink>
            </div>

            <div className='nav-projects'>
                <NavLink exact='true' activeclassname='active' className='projects-link' to='/projects'>
                <div className='projects-icon'>
                    <img className='projects' src={blob2} alt='projects' />
                    <img className='projects-glow' src={blob2glow} alt='projects-glow' />
                    <span>PROJECTS</span>
                </div>
                </NavLink>
            </div>

            <div className='nav-contact'>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <div className='contact-icon'>
                    <img className='contact' src={blob3} alt='contact' />
                    <img className='contact-glow' src={blob3glow} alt='contact-glow' />
                    <span>CONTACT</span>
                </div>
            </NavLink>
            </div>

            <div className='top-right'>
                <img className='top' src={blob2} alt='top' />
                <img className='top-glow' src={blob2glow} alt='top-glow' />
            </div>

            <div className='bottom-right'>
                <img className='bottom' src={blob} alt='bottom' />
                <img className='bottom-glow' src={blobglow} alt='bottom-glow' />
            </div>
        </nav>
    </div>
)

export default Sidebar