
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './service.css'
import { Button } from 'react-bootstrap';

const Service = (props) => {
    const { name, price, img, seats, details } = props.service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" className='img-fluid' src={img} alt />
                    <h4>Course Price:{price}</h4>
                    <Card.Body>
                        <Card.Title> Course: {name}</Card.Title>
                        <p>
                            {details}
                        </p>
                        <p><small>Seats:{seats}</small>
                        </p>
                        <Button variant="warning">Details</Button>

                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default Service;
