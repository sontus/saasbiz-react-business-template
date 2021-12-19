import React from 'react';

const TestimonialSection = () => {
    return (
        <>
        <section className="testimonial-section bg-grey bd-bottom padding">
           <div className="left-design"></div>
           <div className="right-design"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 xs-padding d-none d-lg-block">
                        <div className="clients-thumb">
                            <div className="ct-thumb thumb-1"></div>
                            <div className="ct-thumb thumb-2"></div>
                            <div className="ct-thumb thumb-3"></div>
                            <div className="ct-thumb thumb-4"></div>
                            <div className="ct-thumb thumb-5"></div>
                        </div>
                    </div>
                    <div className="col-lg-6 xs-padding">
                       <div className="section-heading">
                          <span>Testimonial</span>
                           <h2>What Our Customer <br/> Says About Us!</h2>
                       </div>
                        <div id="testimonial-carousel" className="testimonial-carousel owl-carousel">
                            <div className="testi-item">
                                <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!"</p>
                                <div className="testi-thumb">
                                    <img src="assets/img/testi-1.jpg" alt="img"/><h3>Kyle Frederick<span>Designer</span></h3>
                                </div>
                            </div>
                            <div className="testi-item">
                                <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!"</p>
                                <div className="testi-thumb">
                                    <img src="assets/img/testi-2.jpg" alt="img" /><h3>José Carpio <span>Developer</span></h3>
                                </div>
                            </div>
                            <div className="testi-item">
                                <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!"</p>
                                <div className="testi-thumb">
                                    <img src="assets/img/testi-3.jpg" alt="img" /><h3>Melania Rose <span>Marketer</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default TestimonialSection;