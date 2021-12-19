import React from 'react';

const HeroSection = () => {
    return (
        <>
         <div className="header-height"></div>
        <section className="hero-section hero-3 padding">
            <div className="support-hero"></div>
            <div className="container">
                <div className="hero-wrap">
                    <div className="hero-content text-center">
                        <h1>Get Help With The <br/> Advanced Support!</h1>
                        <p>We provide marketing services to startups and small businesses to looking for a partner of their <br/> digital media, design & development and communications requirents.</p>
                    </div>
                    <div className="search-box support-search text-center">
                        <form className="form-inline">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search Knowledge Base"/>
                                {/* <select className="">
                                    <option value="1">All</option>
                                    <option value="2">Services</option>
                                    <option value="3">Portfolios</option>
                                    <option value="4">Contact</option>
                                </select> */}
                            </div>
                            <button type="submit" className="default-btn btn-pink">Search Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default HeroSection;