import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <h1>i have total course :{services.length}</h1>
            <div className='service-conatiner '>
                <Row xs={1} md={3} className="g-4 mx-2">
                    {
                        services.map(service => <Service
                            key={service.key}
                            service={service}
                        ></Service>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;

