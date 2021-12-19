import React from 'react';

const CtaSection = () => {
    return (
        <>
        <section className="cta-section bg-dark padding">
           <div className="cta-shape-1"></div>
           <div className="cta-shape-2"></div>
           <div className="cta-shape-3"></div>
            <div className="container">
                <div className="row cta-wrap">
                    <div className="col-lg-8 col-md-6 sm-padding">
                        <div className="cta-content wow fadeInLeft" data-wow-delay="300ms">
                            <h2>Build your website with Saasbiz code.</h2>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 sm-padding text-right wow fadeInRight" data-wow-delay="300ms">
                        <a href="#" className="default-btn">Get Started Now</a>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default CtaSection;