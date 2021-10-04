import React from 'react';
import './Footer.css'
import { Button } from 'react-bootstrap';


const Footer = () => {
    return (
        <div className='footer-container'>
            <footer class="footer-area">
                <div class="footer-text-area">
                    <h2> <span class="orange-color">Education </span> Center</h2>
                    <p>Best Computer Courses to Get a Job in 2021 Ideal for High Salary Jobs ... To develop software, one must learn programming languages like Java, C++ etc.</p>
                    <input type="email" placeholder='Email' name="" id="" />
                    <Button variant="warning">SUBMIT</Button>
                    <p> © All Rights Reserved Copyrigh 2021</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;