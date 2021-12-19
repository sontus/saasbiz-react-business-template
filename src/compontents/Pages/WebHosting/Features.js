import React from 'react';

const Features = () => {
    return (
        <>
        <section className="content-section content-2 bg-grey bd-bottom padding pos-rel">
            <div className="anim-elements">
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
            </div>
            <div className="container">
                <div className="row content-wrap">
                    <div className="col-lg-6 sm-padding">
                        <div className="content-info wow fadeInLeft" data-wow-delay="300ms">
                            <span>Features</span>
                            <h2>Revolutionize Your Online <br/>Business Today!</h2>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design &amp; development, lead generation and communications requirents.</p>
                            <ul className="content-feature">
                                <li className="content-feature-item">
                                    <i className="ti-harddrives color-red"></i>
                                    <div className="content-details">
                                        <h3>Reseller Hosting</h3>
                                        <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                                    </div>
                                </li>
                                <li className="content-feature-item">
                                    <i className="ti-wordpress color-green"></i>
                                    <div className="content-details">
                                        <h3>WordPress Hosting</h3>
                                        <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 sm-padding wow fadeInRight" data-wow-delay="300ms">
                        <img src="assets/img/hosting-content-1.png" alt="content-img"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Features;