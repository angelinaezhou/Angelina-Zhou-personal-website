import './Navigate.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons'; 

const Navigate = () => {
    return (
    <div className='nav-bar'>
        <div className='nav-home'>
            <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
        </div>
        <ul>
            <li>
                <a target="blank" rel='noreferrer' href="https://www.linkedin.com/in/angelinaezhou/">
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="blank" rel='noreferrer' href="https://www.linkedin.com/in/angelinaezhou/">
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="blank" rel='noreferrer' href="https://www.linkedin.com/in/angelinaezhou/">
                    <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
    )
}

export default Navigate