import React from 'react';

const FreeTrial = () => {
    return (
        <>
        <section className="download-section padding">
           <div className="anim-elements">
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 sm-padding wow fadeInLeft" data-wow-delay="300ms">
                        <div className="section-heading">
                            <h2>Start Your 15 Days <br/> Free Trial Now!</h2>
                            <p className="mb-20">By signing up you will get 15 days free trial. You won't be charged until the trial period ends, don't let this offer pass in from of your eyes!</p>
                            <div className="app-btn">
                                <a href="#"><img src="assets/img/appstore.png" alt="btn"/></a>
                                <a href="#"><img src="assets/img/playstore.png" alt="btn"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 sm-padding wow fadeInRight" data-wow-delay="300ms">
                        <img src="assets/img/mobile-3.jpg" alt="img"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default FreeTrial;