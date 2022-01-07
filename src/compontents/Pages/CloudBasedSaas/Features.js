import React from 'react';

const Features = () => {
    return (
        <>
            <section className="content-section bg-grey bd-bottom padding">
                <div className="container">
                    <div className="row content-wrap">
                        <div className="col-lg-6">
                            <div className="content-info wow fadeInLeft" data-wow-delay="300ms">
                                <span>Features</span>
                                <h2>Revolutionize Your Online <br/>Business Today!</h2>
                                <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design &amp; development, lead generation and communications requirents.</p>
                                <div className="play-icon-box">
                                    <a className="play-icon" href="#"><i className="fas fa-play"></i></a>
                                    <span>Watch Video</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="300ms">
                            <img src="assets/img/content-4.png" alt="content-img"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Features;