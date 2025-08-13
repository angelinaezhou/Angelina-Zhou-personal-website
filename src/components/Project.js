import "./Project.scss"

const Project = ({image, title, description, link}) => {
    const handleClick = () => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };
    return (
        <div className="item" onClick={handleClick}>
            <div className="visual" src={image} alt={title}/>
            <div className='visual-description'>
                <div className="visual-description-text">
                    <div className="description-title">{title}</div>
                    <div className="description-description">{description}</div>
                </div>
            </div>
        </div>
    )
}

export default Project