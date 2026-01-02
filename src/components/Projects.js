import './Projects.scss'
import project1 from '../assets/images/projects-1.png'
import project2 from '../assets/images/projects-2.png'
import project3 from '../assets/images/project-3.png';
import skateIQvisual from '../assets/images/skateIQvisual.png'
import codengelina from '../assets/images/codengelina.png'
import illinoiskating from '../assets/images/illinoiskating.png'
import onedegree from '../assets/images/Login - V1.jpg'
import forestfriend from '../assets/images/forestfriend.png'
import pathforms from '../assets/images/pathforms.png'
import Project from './Project';

const Projects = () => {
    return (
        <>
        <div className='projects-title'>
            <img src={project3} className='project3'/>
            <div className='projects'>projects</div>
        </div>
        <div className='projects-grid'>
            <Project image={skateIQvisual} title='skateIQ - Full Stack ML Web App' description='Figure skating jump classifier utilizing pose data, computer vision, live playback and analysis.' link="https://skateiq.vercel.app" />
            <Project image={onedegree} title='One Degree - Agentic AI Dashboard' description='Designs for admin of the non-profit One Degree to organize resources for those in need.' link={"https://www.figma.com/design/YjCBQ80RCeIEw0i9paFmKy/One-Degree--Final-Designs--Copy-?node-id=1-4&p=f&t=u8TVIOqdsGUBuk1d-0"}/>
            <Project image={codengelina} title='CODENGELINA - React Firebase App' description='Real-time multiplayer word guessing game with responsive design and live state synchronization.' link="https://codengelina.netlify.app" />
            <Project image={forestfriend} title='Forest Friend - Mobile IOS App' description='Designs for a CO₂ data app to help users better understand and reduce their environmental impact.' link={"https://www.figma.com/design/LYQn0H2s1Ye7qLrTNmiumy/Angelina-Zhou---Forest-Friend?node-id=0-1&t=cRJxP21XKWgvhMGa-1"}/>
            <Project image={pathforms} title='Pathforms - React Web App' description='Educational algorithm-visualization game for Nielsen’s algorithm and free group operations.' link={"https://play.math.illinois.edu/PathForms/"}/>
            <Project image={illinoiskating} title='IllinoiSkating - Website Design Team' description='Official site of all things Illinois figure skating.' link="https://www.illinoiskating.com"/>
        </div>
        <img src={project1} className='project1' />
        <img src={project2} className='project2' />
        </>
    )
}

export default Projects