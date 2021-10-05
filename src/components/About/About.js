import React from 'react';
import './About.css'
import img from './images/banner.jpg'

const About = () => {
    return (
        <div>
            <div className='about-header'>
                <h1 >About Us</h1>
                <p className='description'>We started with one mission: Make Learning fun
                    Our global community and our course catalog get bigger every day. Check out our latest numbers as of June 2021..</p>
            </div>
            <div className="row container-fluid mt-5">
                <div className="col-md-6">
                    <div className="row">
                        <h1>About this Specialization</h1>
                        <p>This Specialization covers how to write syntactically correct HTML5 and CSS3, and how to create interactive web experiences with JavaScript. Mastering this range of technologies will allow you to develop high quality web sites that, work seamlessly on mobile, tablet, and large screen browsers accessible. During the capstone you will develop a professional-quality web portfolio demonstrating your growth as a web developer and your knowledge of accessible web design. This will include your ability to design and implement a responsive site that utilizes tools to create a site that is accessible to a wide audience, including those with visual, audial, physical, and cognitive impairments.
                            A Coursera Specialization is a series of courses that helps you master a skill. To begin, enroll in the Specialization directly, or review its courses and choose the one you'd like to start with. When you subscribe to a course that is part of a Specialization, you’re automatically subscribed to the full Specialization.
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    < img className='banner-img about-img' src={img} />
                </div>
            </div >
            <div className='row about-down'>
                <div className="col-md-4">
                    <h4>Members to</h4>
                    <p>Get inspired.
                        Learn new skills.
                        Make discoveries.</p>
                </div>
                <div className='col-md-4'>
                    <h4>Teachers to</h4>
                    <p>Share expertise.
                        Earn money.
                        Give back.</p>
                </div>
                <div className='col-md-4'>
                    <h4>Employees to</h4>
                    <p>Be curious.
                        Make an impact.
                        Live a full life.</p>
                </div>
            </div>

        </div>
    );
};

export default About;