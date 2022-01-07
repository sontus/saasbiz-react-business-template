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
                                        <li><Link to="/apps-landing">Home Apps Landing</Link></li>
                                        <li><Link to="/cloud-base-saas">Home Cloud Based Saas</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/about-us">About</Link>
                                        <ul>
                                        <li><Link to="/about-us">About Us</Link></li>
                                        <li><Link to="/about-company">About Company</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/service-one">Services</Link>
                                        <ul>
                                        <li><Link to="/service-one">Services 01</Link></li>
                                        <li><Link to="/service-two">Services 02</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/about-us">Case Studies</Link>
                                        <ul>
                                        <li><Link to="/web-hosting">Case Studies</Link></li>
                                        <li><Link to="/web-hosting">Case Studies Single</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/web-hosting">Pages</Link> 
                                        <ul>
                                        <li><Link to="/web-hosting">Job Listing</Link></li>
                                        <li><Link to="/web-hosting">Job Details</Link></li>
                                        <li><Link to="/web-hosting">Our Team</Link></li>
                                        <li><Link to="/web-hosting">Pricing Plans</Link></li>
                                        <li><Link to="/web-hosting">Login</Link></li>
                                        <li><Link to="/web-hosting">Register</Link></li>
                                        <li><Link to="/web-hosting">FAQ's</Link></li>
                                        <li><Link to="/web-hosting">404 Error</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/web-hosting">Blog</Link> 
                                        <ul>
                                        <li><Link to="/web-hosting">Blog Grid</Link></li>
                                        <li><Link to="/web-hosting">Blog Classic</Link></li>
                                        <li><Link to="/web-hosting">Blog Single</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/contact">Contact</Link></li>
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