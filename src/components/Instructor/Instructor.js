import React from 'react';
import './Instructor.css'
import { Row, Col, Card } from 'react-bootstrap';



const Instructor = () => {
    return (
        <div>
            <Row xs={1} md={2} className="g-4 mt-5 mx-3">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Name:Brad Hussey</Card.Title>
                            <Card.Text>
                                <p>Subjects: Web Design and Development, WordPress Theme and Plugin development, Sass, PHP Brad is a freelance Web Designer, Developer, Blogger, and Entrepreneur. Plus, he’s also a really refreshing and engaging Udemy instructor.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Name:Maximilian Schwarzmüller</Card.Title>
                            <Card.Text>
                                <p>Subjects: Web Development Frameworks     andTechnologies
                                    Specialties: React, Vue.js, Angular Max is a great instructor and self-taught professional programmer so understands the difficulties for his students and is always there to help.</p>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Name:Jonas Schmedtmann</Card.Title>
                            <Card.Text>
                                <p>Subjects: HTML, CSS, Javascript, Sass
                                    Specialties: Front-End Web Development, JavaScript, CSS and Sass.Jonas is a Web Developer, popular Udemy instructor, and a brilliant choice if you want to learn how to make beautiful </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Name:Jose Portilla</Card.Title>
                            <Card.Text>
                                <p>Subjects: Python, Scala, SQL, Big Data, Machine Learning, Deep Learning, Web Development
                                    Specialty: PythonI am just going to dive in and say that if you are interested in Python, and all the different things you can do with it, then Jose may be your guy!</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div >
    );
};

export default Instructor;