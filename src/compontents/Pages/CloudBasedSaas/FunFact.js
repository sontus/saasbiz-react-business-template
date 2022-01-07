import React from 'react';

const FunFact = () => {
    return (
        <>
        <section className="counter-section bd-bottom padding">
           <div className="path"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 sm-padding">
                        <div className="counter-item wow fadeInUp" data-wow-delay="200ms">
                            <i className="icon-download color-red"></i>
                            <h3><span className="odometer" data-count="2589">2589</span></h3>
                            <h4>Total Downloaded</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 sm-padding">
                        <div className="counter-item wow fadeInUp" data-wow-delay="300ms">
                            <i className="icon-bargraph color-blue"></i>
                            <h3><span className="odometer" data-count="1964">1964</span></h3>
                            <h4>Grow On Year</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 sm-padding">
                        <div className="counter-item wow fadeInUp" data-wow-delay="400ms">
                            <i className="icon-tools color-yellow"></i>
                            <h3><span className="odometer" data-count="7921">7921</span></h3>
                            <h4>Clients Reviews</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 sm-padding">
                        <div className="counter-item wow fadeInUp" data-wow-delay="500ms">
                            <i className="icon-ribbon color-green"></i>
                            <h3><span className="odometer" data-count="5385">5385</span></h3>
                            <h4>People Subscribed</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default FunFact;