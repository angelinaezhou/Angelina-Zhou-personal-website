import './Home.scss';
import Sidebar from './Sidebar';
import usePageScale from '../hooks/usePageScale';

const Home = () => {
    // Window-size scale (see src/hooks/usePageScale.js).
    const scale = usePageScale();

    return (
        // --page-scale is read by both Home.scss (text) and Sidebar.scss (blobs)
        <div className="container home-page" style={{ '--page-scale': scale }}>
            <div className="text-zone">
                <h1 className='intro'>hi,<br />i'm <span className='name'>angelina zhou.</span></h1>
                <h2 className='bio'>
                Computer Science x Statistics @ the University of Illinois, Urbana-Champaign
                </h2>
            </div>
            <Sidebar />
        </div>
    )
}

export default Home
