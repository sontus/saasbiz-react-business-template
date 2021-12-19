import React from 'react';

const PromoSection = () => {
    return (
        <>
        <section className="promo-section promo-3 bd-bottom padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 sm-padding">
                        <div className="promo-content bg-red wow fadeInUp" data-wow-delay="300ms">
                            <i className="ti-files color-red"></i>
                            <h3>Help and Documentation</h3>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media.</p>
                            <a href="#" className="read-more color-red">Read More</a>
                       </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 sm-padding">
                        <div className="promo-content bg-blue wow fadeInUp" data-wow-delay="400ms">
                            <i className="ti-comments color-blue"></i>
                            <h3>Community and Support</h3>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media.</p>
                            <a href="#" className="read-more color-blue">Read More</a>
                       </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 sm-padding">
                        <div className="promo-content bg-yellow wow fadeInUp" data-wow-delay="500ms">
                            <i className="ti-layers color-yellow"></i>
                            <h3>Developer and Resources</h3>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media.</p>
                            <a href="#" className="read-more color-yellow">Read More</a>
                       </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default PromoSection;