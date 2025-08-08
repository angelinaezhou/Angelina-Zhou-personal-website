import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Link.scss'

const Link = ({icon, label, url, type}) => {
    const handleClick = () => {
        if (type === 'email') {
            window.location.href = `mailto:${url}`;
        } else if (type === 'external' || type === 'resume') {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };
    return (
        <>
            <div className="link" onClick={handleClick}>
                <FontAwesomeIcon icon={icon} className='leading-icon'/>
                <div className="link-name">{label}</div>
            </div>
        </>
    )
}

export default Link