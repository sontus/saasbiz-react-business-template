import React from 'react';

const PromoSection = () => {
    return (
        <>
        <section className="promo-section bd-bottom padding">
            <div className="container">
                <div className="row promo-wrap">
                    <div className="col-lg-3 col-sm-6 sm-padding">
                        <div className="promo-item wow fadeInUp" data-wow-delay="200ms">
                            <i className="sb sb-chart"></i>
                            <i className="sb sb-chart transparent"></i>
                            <h3>Data Analytics</h3>
                            <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 sm-padding">
                        <div className="promo-item wow fadeInUp" data-wow-delay="300ms">
                                <i className="sb sb-stats"></i>
                                <i className="sb sb-stats transparent"></i>
                            <h3>Digital Marketing</h3>
                            <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 sm-padding">
                        <div className="promo-item wow fadeInUp" data-wow-delay="400ms">
                                <i className="sb sb-hours"></i>
                                <i className="sb sb-hours transparent"></i>
                            <h3>Customer Care</h3>
                            <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 sm-padding">
                        <div className="promo-item wow fadeInUp" data-wow-delay="500ms">
                            <i className="sb sb-target"></i>
                            <i className="sb sb-target transparent"></i>
                            <h3>Email Marketing</h3>
                            <p>We provide marketing service to startups businesses to looking for a partner digital media.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default PromoSection;