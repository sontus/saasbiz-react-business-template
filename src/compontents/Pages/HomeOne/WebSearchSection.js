import React from 'react';

const WebSearchSection = () => {
    return (
        <>
        <section className="web-search-section bg-dark padding">
           <div className="left-design"></div>
           <div className="right-design"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="section-heading text-center mb-40 wow fadeInUp" data-wow-delay="300ms">
                            <span>Ready To Grow</span>
                            <h2>Check Your Website’s SEO!</h2>
                            <p>We provide marketing services to startups and small businesses to looking for a partner of their digital media, design & development, lead generation and communications requirents.</p>
                        </div>
                        <div className="search-box check-domain">
                            <form className="form-inline">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Web URL"/>
                                </div>
                                <button type="submit" className="default-btn">Check Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cloud"></div>
        </section>
        </>
    );
};

export default WebSearchSection;