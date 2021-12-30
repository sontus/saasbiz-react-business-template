import React from 'react';

const HeroSection = () => {
    return (
        <>
        <section className="hero-section hero-4 padding">
            <div className="wave-1"></div>
            <div className="container">
                <div className="hero-wrap">
                    <div className="hero-content">
                        <h1>Build the Amazing app  <br/>That Everyone will Love!</h1>
                        <p>With the saasbiz platform for customer experience, <br/>service and support.</p>
                        <div className="app-btn">
                            <a href="#"><img src="assets/img/appstore.png" alt="btn"/></a>
                            <a href="#"><img src="assets/img/playstore.png" alt="btn"/></a>
                        </div>
                    </div>
                </div>
                <div className="hero-moc d-none d-lg-block"></div>
            </div>
           
        </section>
        </>
    );
};

export default HeroSection;