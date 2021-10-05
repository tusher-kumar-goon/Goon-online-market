import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p class="text-justify">Our Course WANTS TO BE SIMPLE is an initiative  to help the upcoming programmers with the code.Goon Course focuses on providing the most efficient code or snippets as the code wants to be simple.We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul class="footer-links">
                                <li><a href="#/">C</a></li>
                                <li><a href="#/">UI Design</a></li>
                                <li><a href="#/">PHP</a></li>
                                <li><a href="#/">Java</a></li>
                                <li><a href="#/">Android</a></li>
                                <li><a href="#/">Templates</a></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <li><a href="#/">About Us</a></li>
                                <li><a href="#/">Contact Us</a></li>
                                <li><a href="#/">Contribute</a></li>
                                <li><a href="#/">Privacy Policy</a></li>
                                <li><a href="#/">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                                Tusher Goon online Course
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><i class="fab fa-facebook"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    );
};

export default Footer;