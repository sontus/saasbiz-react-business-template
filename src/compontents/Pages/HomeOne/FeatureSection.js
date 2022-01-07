import React from 'react';

const FeatureSection = () => {
    return (
        <>
        <section className="content-section bg-grey bd-bottom padding">
            <div className="container">
                <div className="row content-wrap">
                    <div className="col-lg-6 sm-padding">
                        <div className="content-info wow fadeInLeft" data-wow-delay="300ms">
                            <span>Features</span>
                            <h2>Revolutionize Your Online <br/>Business Today!</h2>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design &amp; development, lead generation and communications requirents.</p>
                            <ul className="content-feature">
                                <li className="content-feature-item">
                                    <i className="sb sb-stats color-red"></i>
                                    <div className="content-details">
                                        <h3>Digital Data Analysis</h3>
                                        <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                                    </div>
                                </li>
                                <li className="content-feature-item">
                                    <i className="sb sb-chart color-green"></i>
                                    <div className="content-details">
                                        <h3>Marketing Automation</h3>
                                        <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 sm-padding wow fadeInRight" data-wow-delay="300ms">
                        <img src="assets/img/content-1.png" alt="content-img"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default FeatureSection;