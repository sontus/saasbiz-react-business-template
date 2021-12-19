import React from 'react';

const ContentSection = () => {
    return (
        <>
        <section className="content-section bd-bottom padding pos-rel">
            <div className="anim-elements">
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
            </div>
            <div className="container">
                <div className="row content-wrap">
                   <div className="col-lg-6 sm-padding wow fadeInLeft" data-wow-delay="300ms">
                        <img src="assets/img/content-2.png" alt="content-img"/>
                    </div>
                    <div className="col-lg-6 sm-padding">
                        <div className="content-info wow fadeInRight" data-wow-delay="300ms">
                            <span>Features</span>
                            <h2>Track Productivity &amp; Keep Your Projects On The Budget!</h2>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design &amp; development, lead generation and communications requirents.</p>
                            <ul className="content-feature">
                                <li className="content-feature-item">
                                    <i className="sb sb-network color-yellow"></i>
                                    <div className="content-details">
                                        <h3>Reporting & Analysis</h3>
                                        <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                                    </div>
                                </li>
                                <li className="content-feature-item">
                                    <i className="sb sb-target color-blue"></i>
                                    <div className="content-details">
                                        <h3>Technical SEO Audit</h3>
                                        <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default ContentSection;