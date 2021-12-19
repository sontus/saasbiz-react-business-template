import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header id="header" className="header-section">
                <div className="container">
                    <nav className="navbar">
                        <NavLink className="navbar-brand" to='/'><img src="assets/img/logo-dark.png" alt="Saasbiz"/></NavLink>
                        <div className="d-flex menu-wrap">
                        <div id="mainmenu" className="mainmenu">
                            <ul className="nav">
                                <li>
                                    <NavLink data-scroll className="nav-link active" to="/">Home<span className="sr-only">(current)</span></NavLink>
                                        <ul>

                                        <li><Link to="/">Home Design Studio</Link></li>

                                        <li><Link to="/web-hosting">Home Web hosting</Link></li>
                                        <li><Link to="/support-desk">Home Support Desk</Link></li>
                                        <li><Link to="/">Home Apps Landing</Link></li>
                                        <li><Link to="/">Home Cloud Based Saas</Link></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">About</a> 
                                        <ul>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="about-company.html">About Company</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Services</a> 
                                        <ul>
                                        <li><a href="services-1.html">Services 01</a></li>
                                        <li><a href="services-2.html">Services 02</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Case Studies</a> 
                                        <ul>
                                        <li><a href="case-studies.html">Case Studies</a></li>
                                        <li><a href="case-details.html">Case Studies Single</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Pages</a> 
                                        <ul>
                                        <li><a href="job-listing.html">Job Listing</a></li>
                                        <li><a href="job-details.html">Job Details</a></li>
                                        <li><a href="team.html">Our Team</a></li>
                                        <li><a href="pricing-plans.html">Pricing Plans</a></li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="register.html">Register</a></li>
                                        <li><a href="faq.html">FAQ's</a></li>
                                        <li><a href="404.html">404 Error</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Blog</a> 
                                        <ul>
                                        <li><a href="blog-grid.html">Blog Grid</a></li>
                                        <li><a href="blog-classic.html">Blog Classic</a></li>
                                        <li><a href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                        </div>
                        <div className="header-right">
                            <div className="cart-icon dl-search-icon"><i className="fa fa-search"></i></div>
                        </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;