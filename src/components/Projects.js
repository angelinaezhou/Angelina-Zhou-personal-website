import './Projects.scss'
import project1 from '../assets/images/projects-1.png'
import project2 from '../assets/images/projects-2.png'
import project3 from '../assets/images/project-3.png';

const Projects = () => {
    return (
        <>
        <div className='projects-title'>
            <img src={project3} className='projects3'/>
            <div className='projects'>projects</div>
        </div>
        <div className='projects-grid'>
            Projects here
        </div>
        <img src={project1} className='project1' />
        <img src={project2} className='project2' />
        </>
    )
}