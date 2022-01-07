import React from 'react';

const FeaturesLayout = () => {
    return (
        <>
        <section className="content-section bd-bottom padding">
            <div className="container">
                <div className="row content-wrap">
                    <div className="col-lg-6 sm-padding wow fadeInLeft" data-wow-delay="300ms">
                        <img src="assets/img/dashbord-1.jpg" alt="content-img"/>
                    </div>
                    <div className="col-lg-6 sm-padding">
                        <div className="content-info wow fadeInRight" data-wow-delay="300ms">
                            <span>Features</span>
                            <h2>Layout Driven By The <br/>Purpose Of Modularity!</h2>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design &amp; development, lead generation and communications requirents.</p>
                            <ul className="content-list">
                                <li><i className="fas fa-check"></i>Elements from one design to another.</li>
                                <li><i className="fas fa-check"></i>Reuse the elements from one design to another.</li>
                                <li><i className="fas fa-check"></i>Following the latest design trends.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default FeaturesLayout;