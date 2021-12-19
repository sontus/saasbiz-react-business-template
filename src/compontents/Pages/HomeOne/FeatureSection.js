import React from 'react';

const FeatureSection = () => {
    return (
        <>
        <section class="content-section bg-grey bd-bottom padding">
            <div class="container">
                <div class="row content-wrap">
                    <div class="col-lg-6 sm-padding">
                        <div class="content-info wow fadeInLeft" data-wow-delay="300ms">
                            <span>Features</span>
                            <h2>Revolutionize Your Online <br/>Business Today!</h2>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design &amp; development, lead generation and communications requirents.</p>
                            <ul class="content-feature">
                                <li class="content-feature-item">
                                    <i class="sb sb-stats color-red"></i>
                                    <div class="content-details">
                                        <h3>Digital Data Analysis</h3>
                                        <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                                    </div>
                                </li>
                                <li class="content-feature-item">
                                    <i class="sb sb-chart color-green"></i>
                                    <div class="content-details">
                                        <h3>Marketing Automation</h3>
                                        <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6 sm-padding wow fadeInRight" data-wow-delay="300ms">
                        <img src="assets/img/content-1.png" alt="content-img"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default FeatureSection;