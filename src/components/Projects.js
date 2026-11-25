import './Projects.scss'
import project1 from '../assets/images/projects-1.png'
import project2 from '../assets/images/projects-2.png'
import project3 from '../assets/images/project-3.png';
import skateIQvisual from '../assets/images/skateIQvisual.png'
import melloVisual from '../assets/images/mello.jpg'
import onedegree from '../assets/images/onedegree.png'
import anda from '../assets/images/anda.png'
import kth from '../assets/images/kth.png'
import Project from './Project';
import usePageScale from '../hooks/usePageScale';
import useWheelScroll from '../hooks/useWheelScroll';

const PROJECTS = [
    {
        title: 'skateIQ',
        date: 'Summer 2025',
        image: skateIQvisual,
        tech: ['React', 'Typescript', 'Tailwind CSS', 'Flask', 'MediaPipe', 'PyTorch'],
        description: 'Figure skating jump classifier utilizing pose data, computer vision, live playback and analysis.',
        link: 'https://github.com/angelinaezhou/skateIQ',
    },
    {
        title: 'One Degree - AI Agent Dashboard',
        date: 'Fall 2025',
        image: onedegree,
        tech: ['Figma', 'React', 'TypeScript', 'Tailwind CSS', 'LangChain'],
        description: 'Designs for admin of the non-profit One Degree to organize resources for those in need.',
        link: 'https://uiuc.hack4impact.org/projects/one-degree',
    },
    {
        title: 'mello.',
        date: 'Spring 2026',
        image: melloVisual,
        tech: ['Typescript', 'React Native', 'Kotlin', 'Supermemory', 'Swift', 'Python', 'Ruby', 'Spotify OAuth + API'],
        description: 'Beli for Spotify!',
        link: 'https://github.com/angelinaezhou/MELLO',
    },
    {
        title: 'Anda - Driver Analytics Dashboard',
        date: 'Spring 2026',
        image: anda,
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PostgreSQL', 'Recharts', 'SHAP'],
        description: 'Analytics dashboard for Anda, an Angolan mobility nonprofit, that brings GPS, payment, and trip data for 1,500+ drivers into one place and flags high-risk drivers for support.',
    },
    {
        title: 'Kits to Heart - Care Kit Request Platform',
        date: 'Fall 2026',
        image: kth,
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Figma', 'Stripe', 'EasyPost'],
        description: `Custom care-kit request workflow and operations management platform for Kits to Heart, a cancer-support nonprofit shipping 3000+ kits per year to all 50 states.`,
    },
];

const Projects = () => {
    const scale = usePageScale();
    // Snaps one card at a time (see scroll-snap in Projects.scss).
    const scrollRef = useWheelScroll({ snapTo: '.item' });

    return (
        <div className="projects-page" style={{ '--page-scale': scale }}>
            <div className='projects-title'>
                <img src={project3} className='project3' alt=''/>
                <div className='projects'>projects</div>
            </div>
            <p className='projects-blurb'>
                This page is a work in progress and still being updated; check back later!
            </p>
            <div className='projects-scroll' ref={scrollRef}>
                <div className='projects-list'>
                    {PROJECTS.map((p) => (
                        <Project key={p.title} {...p} />
                    ))}
                </div>
            </div>
            <img src={project1} className='project1' alt=''/>
            <img src={project2} className='project2' alt=''/>
        </div>
    )
}

export default Projects
