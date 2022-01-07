import React from 'react';

const PriceList = () => {
    return (
        <>
        <section class="pricing-section padding bd-bottom">
            <div class="container">
                <div class="section-heading mb-40 text-center wow fadeInUp" data-wow-delay="300ms">
                   <span>Explore The Plans</span>
                   <h2>No Hidden Charges! Choose <br/> Your Pricing Plan.</h2>
                </div>
                <div class="cd-pricing-switcher-container">
                    <div class="cd-pricing-switcher text-center">
                        <p class="fieldset">
                            <input type="radio" name="duration-1" value="monthly" id="monthly-1" checked/>
                            <label for="monthly-1">Monthly</label>
                            <input type="radio" name="duration-1" value="yearly" id="yearly-1"/>
                            <label for="yearly-1">Yearly</label>
                            <span class="cd-switch"></span>
                        </p>
                    </div>
                </div> 
                <div class="row">
                    <div class="col-lg-12 xs-padding">
                        <div class="pricing-wrap cd-pricing-container">
                            <ul class="cd-pricing-list cd-bounce-invert row">
                                <li class="cd-popular col-lg-4">
                                    <ul class="cd-pricing-wrapper">
                                        <li data-type="monthly" class="is-visible pricing-box">
                                            <div class="pricing-head">
                                                <img src="assets/img/pricing-head-1.jpg" alt="img"/>
                                                <h3>$29.00</h3>
                                                <span>Starter</span>
                                            </div>
                                            <ul class="pricing-list">
                                                <li>1024 MB Memory</li>
                                                <li>10 Websites</li>
                                                <li>Unlimited Bandwidth</li>
                                                <li>24/7 Support</li>
                                            </ul>
                                            <div class="pricing-footer">
                                                <a href="#" class="default-btn btn-blue">Get Started</a>
                                            </div>
                                        </li>
                                        <li data-type="yearly" class="is-hidden pricing-box">
                                            <div class="pricing-head">
                                                <img src="assets/img/pricing-head-1.jpg" alt="img"/>
                                                <h3>$49.00</h3>
                                                <span>Starter</span>
                                            </div>
                                            <ul class="pricing-list">
                                                <li>1024 MB Memory</li>
                                                <li>10 Websites</li>
                                                <li>Unlimited Bandwidth</li>
                                                <li>24/7 Support</li>
                                            </ul>
                                            <div class="pricing-footer">
                                                <a href="#" class="default-btn btn-blue">Get Started</a>
                                            </div>
                                        </li>
                                    </ul> 
                                </li>
                                <li class="col-lg-4">
                                    <ul class="cd-pricing-wrapper">
                                        <li data-type="monthly" class="is-visible pricing-box">
                                           <div class="price-tag"><span>Recommended</span></div>
                                            <div class="pricing-head">
                                                <img src="assets/img/pricing-head-2.jpg" alt="img"/>
                                                <h3>$49.00</h3>
                                                <span>Premium</span>
                                            </div>
                                            <ul class="pricing-list">
                                                <li>1024 MB Memory</li>
                                                <li>10 Websites</li>
                                                <li>Unlimited Bandwidth</li>
                                                <li>24/7 Support</li>
                                            </ul>
                                            <div class="pricing-footer">
                                                <a href="#" class="default-btn btn-blue">Get Started</a>
                                            </div>
                                        </li>
                                        <li data-type="yearly" class="is-hidden pricing-box">
                                            <div class="pricing-head">
                                                <img src="assets/img/pricing-head-2.jpg" alt="img"/>
                                                <h3>$69.00</h3>
                                                <span>Premium</span>
                                            </div>
                                            <ul class="pricing-list">
                                                <li>1024 MB Memory</li>
                                                <li>10 Websites</li>
                                                <li>Unlimited Bandwidth</li>
                                                <li>24/7 Support</li>
                                            </ul>
                                            <div class="pricing-footer">
                                                <a href="#" class="default-btn btn-blue">Get Started</a>
                                            </div>
                                        </li>
                                    </ul> 
                                </li>
                                <li class="col-lg-4">
                                    <ul class="cd-pricing-wrapper">
                                        <li data-type="monthly" class="is-visible pricing-box">
                                            <div class="pricing-head">
                                                <img src="assets/img/pricing-head-3.jpg" alt="img"/>
                                                <h3>$89.00</h3>
                                                <span>Business</span>
                                            </div>
                                            <ul class="pricing-list">
                                                <li>1024 MB Memory</li>
                                                <li>10 Websites</li>
                                                <li>Unlimited Bandwidth</li>
                                                <li>24/7 Support</li>
                                            </ul>
                                            <div class="pricing-footer">
                                                <a href="#" class="default-btn btn-blue">Get Started</a>
                                            </div>
                                        </li>
                                        <li data-type="yearly" class="is-hidden pricing-box">
                                            <div class="pricing-head">
                                                <img src="assets/img/pricing-head-3.jpg" alt="img"/>
                                                <h3>$99.00</h3>
                                                <span>Business</span>
                                            </div>
                                            <ul class="pricing-list">
                                                <li>1024 MB Memory</li>
                                                <li>10 Websites</li>
                                                <li>Unlimited Bandwidth</li>
                                                <li>24/7 Support</li>
                                            </ul>
                                            <div class="pricing-footer">
                                                <a href="#" class="default-btn btn-blue">Get Started</a>
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

export default PriceList;