import React from 'react';

const ContentSection = () => {
    return (
        <>
        <section className="content-section content-4 bd-bottom padding pos-rel">
            <div className="anim-elements">
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
            </div>
            <div className="container">
                <div className="row content-wrap">
                    <div className="col-lg-6 sm-padding">
                        <div className="content-info wow fadeInLeft" data-wow-delay="300ms">
                            <h2>Inovative Affordable Customer <br/> Support For Your Needs!</h2>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design &amp; development, lead generation and communications requirents.</p>
                            <a href="#" className="default-btn btn-pink">Submit a Ticket</a>
                        </div>
                    </div>
                    <div className="col-lg-6 img-wrap sm-padding wow fadeInRight" data-wow-delay="300ms">
                        <img src="assets/img/support-moc.jpg" alt="content-img"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default ContentSection;