import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <>
        <div className="header-height"></div>
        
        <section className="error-section bd-top">
		    <div className="container">
		        <div className="error-content text-center">
		            <img src="assets/img/404.png" alt="img"/>
		            <div className="error-info">
		                <h2>404</h2>
		                <p>Aha! You see! You can be wrong! <br/>...either way, you should probably <br/> <NavLink to='/'>Go Back To Homapage</NavLink> </p>
		            </div>
		        </div>
		    </div>
		</section>
		
        <section className="widget-section bg-dark padding">
           <div className="left-design"></div>
           <div className="right-design"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 sm-padding">
                        <div className="widget-content">
                            <a href="#"><img src="assets/img/logo-light.png" alt="brand"/></a>
                            <p>Building your own home is about desire, fantasy. But it’s achievable anyone can do it.</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 sm-padding">
                        <div className="widget-content">
                            <h4>Company</h4>
                            <ul className="widget-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Clients Reviews</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 sm-padding">
                        <div className="widget-content">
                            <h4>Headquaters</h4>
                            <p>962 Fifth Avenue, 3rd Floor New York, NY10022</p>
                            <span>Hello@dynamiclayers.net</span>
                            <span>(+123) 456 789 101</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 sm-padding">
                        <div className="widget-content">
                            <h4>Newslatter Subscription</h4>
                            <p>Subscribe and get 10% off from our <br/>architecture company.</p>
                            <div className="subscribe-box clearfix">
                                <div className="subscribe-form-wrap">
                                    <form action="#" className="subscribe-form">
                                        <input type="email" name="email" id="subs-email" className="form-input" placeholder="Enter Your Email Address..."/>
                                        <button type="submit" className="submit-btn">Subscribe</button>
                                        <div id="subscribe-result">
                                            <p className="subscription-success"></p>
                                            <p className="subscription-error"></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default PageNotFound;