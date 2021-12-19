import React from 'react';

const GettingStarted = () => {
    return (
        <>
        <section className="tophic-section bg-grey bd-bottom padding">
           <div className="left-design"></div>
           <div className="right-design"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 sm-padding">
                        <div className="tophic-content">
                            <h3>Getting Started</h3>
                            <ul className="tophic-links">
                                <li><a href="#">How to creat account?</a></li>
                                <li><a href="#">Add another email to your account</a></li>
                                <li><a href="#">How do i change my password?</a></li>
                                <li><a href="#">Difference between desktop and server</a></li>
                                <li><a href="#">Can i get a refund?</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 sm-padding">
                        <div className="tophic-content">
                            <h3>Common Questions</h3>
                            <ul className="tophic-links">
                                <li><a href="#">How to creat account?</a></li>
                                <li><a href="#">Add another email to your account</a></li>
                                <li><a href="#">How do i change my password?</a></li>
                                <li><a href="#">Difference between desktop and server</a></li>
                                <li><a href="#">Can i get a refund?</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 sm-padding">
                        <div id="testimonial-carousel" className="testimonial-carousel tophic-testi owl-carousel">
                            <div className="testi-item">
                                <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!"</p>
                                <div className="testi-thumb">
                                    <img src="assets/img/testi-1.jpg" alt="img"/><h3>Kyle Frederick<span>Designer</span></h3>
                                </div>
                            </div>
                            <div className="testi-item">
                                <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!"</p>
                                <div className="testi-thumb">
                                    <img src="assets/img/testi-2.jpg" alt="img"/><h3>José Carpio <span>Developer</span></h3>
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

export default GettingStarted;