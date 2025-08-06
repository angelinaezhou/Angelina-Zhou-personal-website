import { Link } from 'react-router-dom';
import './Home.scss';
import Sidebar from './Sidebar';

const Home = () => {

    return (
        <div className="container home-page">
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