import './Navigate.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons'; 

const Navigate = () => {
    return (
    <div className='sidebar'>
        <div className='nav-home'>
            <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">
            <FontAwesomeIcon icon={faHome} className='faHome'/>
            </NavLink>
        </div>
        <ul>
            <li>
                <a target="blank" rel='noreferrer' href="https://www.linkedin.com/in/angelinaezhou/">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </li>
            <li>
                <a target="blank" rel='noreferrer' href="https://github.com/angelinaezhou">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </li>
            <li>
                <a target="blank" rel='noreferrer' href="https://www.instagram.com/angelinaezhou/">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Navigate