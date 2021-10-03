
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './service.css'

const Service = (props) => {
    const { name, price, img, seats, details } = props.service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" className='img-fluid' src={img} />
                    <h4>Course Price:{price}</h4>
                    <Card.Body>
                        <Card.Title> Course: {name}</Card.Title>
                        <p>
                            {details}
                        </p>
                        <p><small>Seats:{seats}</small>
                        </p>
                        <button>BuY</button>

                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default Service;
