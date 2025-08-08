import './Projects.scss'
import project1 from '../assets/images/projects-1.png'
import project2 from '../assets/images/projects-2.png'
import project3 from '../assets/images/project-3.png';
import skateIQvisual from '../assets/images/skateIQvisual.png'
import Project from './Project';

const Projects = () => {
    return (
        <>
        <div className='projects-title'>
            <img src={project3} className='project3'/>
            <div className='projects'>projects</div>
        </div>
        <div className='projects-grid'>
            <Project image={skateIQvisual} title='skateIQ - Full Stack ML Web App' description='Figure skating jump classifier utilizing pose data, computer vision, live playback and analysis.' />
            <Project image={skateIQvisual} title='title' description='description' />
            <Project image={skateIQvisual} title='title' description='description' />
        </div>
        <img src={project1} className='project1' />
        <img src={project2} className='project2' />
        </>
    )
}

export default Projects