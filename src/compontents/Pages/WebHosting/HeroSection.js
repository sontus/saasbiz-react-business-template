import React from 'react';

const HeroSection = () => {
    return (
        <>
        <div className="header-height"></div>
        
        <section className="hero-section hero-2 d-flex align-items-center">
            <div className="container">
                <div className="row hero-wrap d-flex align-items-center">
                    <div className="col-lg-6 sm-padding">
                        <div className="hero-content">
                            <h1>Best Web Hosting <br/>For Your Website.</h1>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents.</p>
                            <a href="#" className="default-btn btn-pink">Get Started</a>
                        </div>
                    </div>
                    <div className="col-lg-6 sm-padding">
                        <img src="assets/img/hosting-hero-banner.gif" alt="hero"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default HeroSection;