import img from './images/banner.jpg'
import './Home.css'
import React, { useEffect, useState } from 'react';
import Top from '../Top/Top';
import { Row } from 'react-bootstrap';


const Home = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        fetch('./fakeData2.JSON')
            .then(res => res.json())
            .then(data => setBanners(data))
    }, [])
    return (
        <div>
            <div>
                < img className='banner-img' src={img} alt="" />
            </div>
            <div>

                <h4 className="course-demo">Demo All Course Here</h4>

                <div className='banner-container'>

                    <Row xs={1} md={4} className="g-1 mx-1 home-card">
                        {
                            banners.map(banner => <Top
                                key={banner.key}
                                banner={banner}
                            ></Top>)
                        }
                    </Row>
                </div>
            </div>
        </div>

    );
};

export default Home;

