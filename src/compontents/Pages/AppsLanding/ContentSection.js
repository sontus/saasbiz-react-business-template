import React from 'react';

const ContentSection = () => {
    return (
        <>
        <section className="content-section content-5 bg-grey bd-bottom padding">
            <div className="container">
                <div className="content-wrap row">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="section-heading">
                            <span>Saasbiz Makes Your Life Easy!</span>
                            <h2>Super Clean User Friendly <br/>Interface For Easier Use.</h2>
                            <p className="mb-30">While designing residential property, a great emphasis is placed on landscaping design, transport accessibility, environmental friendliness and architectural solutions, that jointly form comfortable conditions.</p>
                            <a href="#" className="default-btn btn-blue">Try app Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-moc d-none d-lg-block"></div>
        </section>
        </>
    );
};

export default ContentSection;