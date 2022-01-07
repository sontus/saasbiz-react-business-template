import React from 'react';

const Hero = () => {
    return (
        <>
            <section className="hero-section hero-5 bd-bottom d-flex align-items-center pos-rel">
                <div className="anim-elements">
                    <div className="anim-element"></div>
                    <div className="anim-element"></div>
                    <div className="anim-element"></div>
                    <div className="anim-element"></div>
                    <div className="anim-element"></div>
                </div>
                <div className="container">
                    <div className="row hero-wrap d-flex align-items-center">
                        <div className="col-lg-6 sm-padding">
                            <div className="hero-content">
                                <h1>The Best & Powerful Softwere For Business!</h1>
                                <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media.</p>
                                <a href="#" className="default-btn btn-pink">Get Started</a>
                            </div>
                        </div>
                        <div className="col-lg-6 sm-padding">
                            <div className="hero-img-wrap">
                                <img src="assets/img/hero-2.png" alt="hero"/>
                                <img className="h-icon h-icon-1" src="assets/img/hero-icon-1.png" alt="hero"/>
                                <img className="h-icon h-icon-2" src="assets/img/hero-icon-2.png" alt="hero"/>
                                <img className="h-icon h-icon-3" src="assets/img/hero-icon-3.png" alt="hero"/>
                                <img className="h-icon h-icon-4" src="assets/img/hero-icon-4.png" alt="hero"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;