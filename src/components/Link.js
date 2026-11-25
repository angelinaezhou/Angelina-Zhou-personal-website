import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Link.scss'

// type: 'email' → opens the visitor's email app; anything else opens `url`
// in a new tab.
const Link = ({icon, label, url, type}) => {
    const isEmail = type === 'email';
    return (
        <a
            className="link"
            href={isEmail ? `mailto:${url}` : url}
            target={isEmail ? undefined : '_blank'}
            rel={isEmail ? undefined : 'noopener noreferrer'}
        >
            <FontAwesomeIcon icon={icon} className='leading-icon'/>
            <span className="link-name">{label}</span>
        </a>
    )
}

export default Link
