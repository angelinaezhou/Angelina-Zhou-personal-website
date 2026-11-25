import "./Project.scss"

// Props:
//   image, title, description – as before
//   link – optional; if given, clicking the card opens it in a new tab.
//          Without one, the card is display-only (no pointer, no hover lift).
//   date – optional, shown under the title (e.g. "Spring 2025")
//   tech – optional list of tools, shown as pills (e.g. ['React', 'Python'])
const Project = ({image, title, date, description, tech = [], link}) => {
    const handleClick = () => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };
    return (
        <div
            className={link ? "item" : "item item-static"}
            onClick={link ? handleClick : undefined}
        >
            <img className="visual" src={image} alt={title}/>
            <div className='visual-description'>
                <div className="visual-description-text">
                    <div className="description-title">{title}</div>
                    {date && <div className="description-date">{date}</div>}
                    <div className="description-description">{description}</div>
                    {tech.length > 0 && (
                        <ul className="tech-pills">
                            {tech.map((t) => (
                                <li key={t} className="tech-pill">{t}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Project
