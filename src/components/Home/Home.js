import img from './images/banner.jpg'
import './Home.css'


const Home = () => {

    return (
        <div>
            <div>
                < img className='banner-img' src={img} />
            </div>
            <div>

                <h4 className="course-demo">Demo Course Here</h4>
            </div>
        </div>

    );
};

export default Home;

