import React from 'react';

const PromoSection = () => {
    return (
        <>
        <section className="promo-section bd-bottom padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 sm-padding">
                        <div className="promo-content wow fadeInUp" data-wow-delay="300ms">
                           <img src="assets/img/promo-1.png" alt="promo"/>
                            <h3>Shared Hosting</h3>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media.</p>
                       </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 sm-padding">
                        <div className="promo-content wow fadeInUp" data-wow-delay="400ms">
                           <img src="assets/img/promo-2.png" alt="promo"/>
                            <h3>Access Globally</h3>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media.</p>
                       </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 sm-padding">
                        <div className="promo-content wow fadeInUp" data-wow-delay="500ms">
                           <img src="assets/img/promo-3.png" alt="promo"/>
                            <h3>Easily Integrate</h3>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media.</p>
                       </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default PromoSection;