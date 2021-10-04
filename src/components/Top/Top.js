import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Top.css'

const Top = (props) => {
    const { name, price, img, details, seats } = props.banner
    const bannerStyle = {
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div >
            <Col>
                <Card className='mx-2'>
                    <Card.Img variant="top" className='img-fluid  h-60' src={img} alt />
                    <h5 className='ms-3'> Course Price:$ {price}</h5>
                    <Card.Body>
                        <Card.Title> Course: {name}</Card.Title>
                        <p><small>{details}</small></p>
                        <p><small>Seats avaible: {seats}</small></p>
                        <Button className='btn-all'>BUY NOW</Button>
                    </Card.Body>
                </Card>
            </Col>

        </div >
    );
};

export default Top;