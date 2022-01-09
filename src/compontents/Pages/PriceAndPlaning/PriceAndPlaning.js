import React from 'react';

const PriceAndPlaning = () => {
    return (
        <>
        <div className="header-height"></div>
        
        <section className="page-header padding">
            <div className="anim-elements">
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
            </div>
		    <div className="container">
		        <div className="page-content text-center">
		            <h4>Explore The Plans</h4>
                    <h2>No Hidden Charges! Choose <br/> Your Pricing Plan.</h2>
		            <p>Multipurpose Saas Startup HTML Template.</p>
		        </div>
		    </div>
		</section>
        
        <section className="pricing-section padding bd-bottom">
            <div className="container">
                <div className="cd-pricing-switcher-container">
                    <div className="cd-pricing-switcher text-center">
                        <p className="fieldset">
                            <input type="radio" name="duration-1" value="monthly" id="monthly-1" checked/>
                            <label for="monthly-1">Monthly</label>
                            <input type="radio" name="duration-1" value="yearly" id="yearly-1"/>
                            <label for="yearly-1">Yearly</label>
                            <span className="cd-switch"></span>
                        </p>
                    </div>
                </div> 
                <div className="row">
                    <div className="col-lg-12 xs-padding">
                        <div className="pricing-wrap cd-pricing-container">
                            <ul className="cd-pricing-list cd-bounce-invert row">
                                <li className="cd-popular col-lg-4">
                                    <ul className="cd-pricing-wrapper">
                                        <li data-type="monthly" className="is-visible pricing-box">
                                            <div className="pricing-head">
                                                <img src="assets/img/pricing-head-1.jpg" alt="img"/>
                                                <h3>$29.00</h3>
                                                <span>Starter</span>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>1024 MB Memory</li>
                                                <li>10 Websites</li>
                                                <li>Unlimited Bandwidth</li>
                                                <li>24/7 Support</li>
                                            </ul>
                                            <div className="pricing-footer">
                                                <a href="#" className="default-btn btn-blue">Get Started</a>
                                            </div>
                                        </li>
                                        <li data-type="yearly" className="is-hidden pricing-box">
                                            <div className="pricing-head">
                                                <img src="assets/img/pricing-head-1.jpg" alt="img"/>
                                                <h3>$49.00</h3>
                                                <span>Starter</span>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>1024 MB Memory</li>
                                                <li>10 Websites</li>
                                                <li>Unlimited Bandwidth</li>
                                                <li>24/7 Support</li>
                                            </ul>
                                            <div className="pricing-footer">
                                                <a href="#" className="default-btn btn-blue">Get Started</a>
                                            </div>
                                        </li>
                                    </ul> 
                                </li>
                                <li className="col-lg-4">
                                    <ul className="cd-pricing-wrapper">
                                        <li data-type="monthly" className="is-visible pricing-box">
                                           <div className="price-tag"><span>Recommended</span></div>
                                            <div className="pricing-head">
                                                <img src="assets/img/pricing-head-2.jpg" alt="img"/>
                                                <h3>$49.00</h3>
                                                <span>Premium</span>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>1024 MB Memory</li>
                                                <li>10 Websites</li>
                                                <li>Unlimited Bandwidth</li>
                                                <li>24/7 Support</li>
                                            </ul>
                                            <div className="pricing-footer">
                                                <a href="#" className="default-btn btn-blue">Get Started</a>
                                            </div>
                                        </li>
                                        <li data-type="yearly" className="is-hidden pricing-box">
                                            <div className="pricing-head">
                                                <img src="assets/img/pricing-head-2.jpg" alt="img"/>
                                                <h3>$69.00</h3>
                                                <span>Premium</span>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>1024 MB Memory</li>
                                                <li>10 Websites</li>
                                                <li>Unlimited Bandwidth</li>
                                                <li>24/7 Support</li>
                                            </ul>
                                            <div className="pricing-footer">
                                                <a href="#" className="default-btn btn-blue">Get Started</a>
                                            </div>
                                        </li>
                                    </ul> 
                                </li>
                                <li className="col-lg-4">
                                    <ul className="cd-pricing-wrapper">
                                        <li data-type="monthly" className="is-visible pricing-box">
                                            <div className="pricing-head">
                                                <img src="assets/img/pricing-head-3.jpg" alt="img"/>
                                                <h3>$89.00</h3>
                                                <span>Business</span>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>1024 MB Memory</li>
                                                <li>10 Websites</li>
                                                <li>Unlimited Bandwidth</li>
                                                <li>24/7 Support</li>
                                            </ul>
                                            <div className="pricing-footer">
                                                <a href="#" className="default-btn btn-blue">Get Started</a>
                                            </div>
                                        </li>
                                        <li data-type="yearly" className="is-hidden pricing-box">
                                            <div className="pricing-head">
                                                <img src="assets/img/pricing-head-3.jpg" alt="img"/>
                                                <h3>$99.00</h3>
                                                <span>Business</span>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>1024 MB Memory</li>
                                                <li>10 Websites</li>
                                                <li>Unlimited Bandwidth</li>
                                                <li>24/7 Support</li>
                                            </ul>
                                            <div className="pricing-footer">
                                                <a href="#" className="default-btn btn-blue">Get Started</a>
                                            </div>
                                        </li>
                                    </ul> 
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

export default PriceAndPlaning;