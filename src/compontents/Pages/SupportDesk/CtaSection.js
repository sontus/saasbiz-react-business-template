import React from 'react';

const CtaSection = () => {
    return (
        <>
        <section className="cta-section cta-2 padding">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-8 xs-padding">
                        <div className="cta-content">
                            <h2>Can't Find What You're Looking For? <br/> We're Here To Help You!</h2>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cta-content text-right">
                            <a href="#" className="default-btn btn-pink">Contact With Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default CtaSection;