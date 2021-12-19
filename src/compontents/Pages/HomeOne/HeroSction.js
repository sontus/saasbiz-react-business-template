import React from 'react';
const HeroSction = () => {
    return (
        <>
        <section className="hero-section bg-grey d-flex align-items-center bd-bottom">
            <div className="hero-bg-shape"></div>
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
                            <h1>Drive More Customers <br/>Through Digital.</h1>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents.</p>
                            <div className="btn-group">
                                <a href="#" className="default-btn">Get Started</a>
                                <a href="#" className="play-btn"><i className="fas fa-play"></i>How It Works</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 sm-padding">
                        <img src="assets/img/hero-1.png" alt="hero"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default HeroSction;