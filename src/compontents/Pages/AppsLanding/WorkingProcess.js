import React from 'react';

const WorkingProcess = () => {
    return (
        <>
        <section className="how-it-works-section bd-bottom padding">
           <div className="anim-elements">
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
            </div>
            <div className="container">
                <div className="section-heading mb-60 text-center wow fadeInUp" data-wow-delay="300ms">
                   <span>Working Process</span>
                   <h2>Discover How Saasbiz <br/>Apps Works?</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 sm-padding wow fadeIn" data-wow-delay="300ms">
                        <div className="work-pro-item text-center">
                            <span className="number">1</span>
                            <div className="number-line"></div>
                            <h3>Planning & Research</h3>
                            <p>We are committed building a sustainable future fostering a collaborative spirit.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 sm-padding wow fadeIn" data-wow-delay="400ms">
                        <div className="work-pro-item text-center">
                            <span className="number">2</span>
                            <div className="number-line"></div>
                            <h3>Design & Ideas</h3>
                            <p>We are committed building a sustainable future fostering a collaborative spirit.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 sm-padding wow fadeIn" data-wow-delay="500ms">
                        <div className="work-pro-item text-center">
                            <span className="number">3</span>
                            <div className="number-line"></div>
                            <h3>Specialized Projects</h3>
                            <p>We are committed building a sustainable future fostering a collaborative spirit.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 sm-padding wow fadeIn" data-wow-delay="600ms">
                        <div className="work-pro-item text-center">
                            <span className="number">4</span>
                            <h3>Final Outputs</h3>
                            <p>We are committed building a sustainable future fostering a collaborative spirit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default WorkingProcess;