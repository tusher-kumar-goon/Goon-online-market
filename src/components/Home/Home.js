import React from 'react';
import img from './images/banner.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                < img className='banner-img' src={img} />
            </div>
            <div>
                <h1 >Our Feature Course</h1>
            </div>
        </div>

    );
};

export default Home;