import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Top = (props) => {
    const { name, price, img, details } = props.banner
    const bannerStyle = {
        border: '3px solid  goldenrod',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div >
            <Col>
                <Card className='mx-4'>
                    <Card.Img variant="top" className='img-fluid' src={img} alt />
                    <h5 className='ms-3'> Course Price:$ {price}</h5>
                    <Card.Body>
                        <Card.Title> Course: {name}</Card.Title>
                        <p><small>{details}</small></p>
                        <Button variant="warning">Details</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div >
    );
};

export default Top;