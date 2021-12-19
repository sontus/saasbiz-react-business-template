import React from 'react';

const DomainSearchSection = () => {
    return (
        <>
            <section className="domain-search-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="d-search-content">
                            <div className="map"></div>
                            <h2>Find Your Perfect Domain.</h2>
                            <div className="search-box">
                                <form className="form-inline">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Web URL"/>
                                        <select style={{display: 'none'}}>
                                            <option value="1">.com</option>
                                            <option value="2">.net</option>
                                            <option value="3">.org</option>
                                            <option value="4">.info</option>
                                        </select>
                                    </div>
                                    
                                    <button type="submit" className="default-btn btn-pink">Search Now</button>
                                </form>
                                <ul className="domain-price">
                                    <li><span>.com</span>$49</li>
                                    <li><span>.net</span>$59</li>
                                    <li><span>.org</span>$69</li>
                                    <li><span>.info</span>$79</li>
                                    <li><span>.co</span>$99</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default DomainSearchSection;