import React from 'react';

const ExplorTheFeature = () => {
    return (
        <>
        <section className="testimonial-section bd-bottom padding">
           <div className="map-pattern"></div>
            <div className="container">
               <div className="section-heading mb-40 text-center wow fadeInUp" data-wow-delay="300ms">
                   <span>Explore The Features</span>
                   <h2>Thousands Of People <br/>Using Our SaasBiz Apps.</h2>
               </div>
                <div className="row testi-wrap">
                    <div id="testimonial-carousel-2" className="testimonial-carosel-2 owl-carousel">
                        <div className="testi-item">
                            <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our landing needs."</p>
                            <div className="testi-item-inner">
                                <div className="testi-thumb">
                                    <img src="assets/img/testi-1.jpg" alt="testimonial"/>
                                </div>
                                <div className="testi-info">
                                    <h3>José Carpio<span>Developer</span></h3>
                                </div>
                                <div className="quote-icon"><i className="fas fa-quote-right"></i></div>
                            </div>
                        </div>
                        <div className="testi-item">
                            <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our landing needs."</p>
                            <div className="testi-item-inner">
                                <div className="testi-thumb">
                                    <img src="assets/img/testi-2.jpg" alt="testimonial"/>
                                </div>
                                <div className="testi-info">
                                    <h3>Kyle Frederick<span>Designer</span></h3>
                                </div>
                                <div className="quote-icon"><i className="fas fa-quote-right"></i></div>
                            </div>
                        </div>
                        <div className="testi-item">
                            <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our landing needs."</p>
                            <div className="testi-item-inner">
                                <div className="testi-thumb">
                                    <img src="assets/img/testi-3.jpg" alt="testimonial"/>
                                </div>
                                <div className="testi-info">
                                    <h3>Melania Rose<span>Marketer</span></h3>
                                </div>
                                <div className="quote-icon"><i className="fas fa-quote-right"></i></div>
                            </div>
                        </div>
                        <div className="testi-item">
                            <p>"Thank you for guiding us through the construction process, understanding, and always ready to accommodate our landing needs."</p>
                            <div className="testi-item-inner">
                                <div className="testi-thumb">
                                    <img src="assets/img/testi-4.jpg" alt="testimonial"/>
                                </div>
                                <div className="testi-info">
                                    <h3>Michel Brown<span>Designer</span></h3>
                                </div>
                                <div className="quote-icon"><i className="fas fa-quote-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default ExplorTheFeature;