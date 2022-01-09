import React from 'react';

const BlogDetails = () => {
    return (
        <>
        <div className="header-height"></div>
        
        <section className="page-header padding">
            <div className="anim-elements">
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
                <div className="anim-element"></div>
            </div>
		    <div className="container">
		        <div className="page-content text-center">
                    <h4>Case Studies</h4>
		            <h2>What Features You Will <br/> Get From Softwere.</h2>
		            <p>Multipurpose Saas Startup HTML Template.</p>
		        </div>
		    </div>
		</section>
     
        <section className="case-details padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 sm-padding">
                        <div className="case-details-wrap">
                            <div id="case-details-carousel" className="case-details-carousel owl-carousel">
                                <div className="case-item">
                                    <img src="assets/img/hosting-post-1.jpg" alt="img"/>
                                </div>
                                <div className="case-item">
                                    <img src="assets/img/hosting-post-1.jpg" alt="img"/>
                                </div>
                                <div className="case-item">
                                    <img src="assets/img/hosting-post-1.jpg" alt="img"/>
                                </div>
                            </div>
                            <div className="case-heading mt-40">
                                <h2>Project Description</h2>
                                <p>The new functions coming to construction for equipment mathematics promise make life easier for owners and equipment managers. Sure, they’re reducing waste and lowering costs, but the real transformation on the horizon is one where advanced streams of data combine to create entirely new ways managing machines.</p>
                                <p>There are some big shifts taking place in the field of construction equipment mathematics. with the mathematics devices in vehicles right from the manufacturers, to the standardization and integration.</p>
                            </div>
                            <div className="row case-list-wrap">
                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><i className="fas fa-thumbs-up"></i>Installation of final floor covering, such as floor tile, carpet, or wood flooring.</li>
                                        <li><i className="fas fa-thumbs-up"></i>Building inspector visits if necessary to approve utilities and framing.</li>
                                    </ul>
                                </div>
                                <div className="col-md-6 xs-padding">
                                    <ul className="case-list">
                                        <li><i className="fas fa-thumbs-up"></i>If required obtain approval from HOA (homeowners association) or ARC architectural review committee.</li>
                                        <li><i className="fas fa-thumbs-up"></i>Cover outer walls and roof in OSB or plywood and a water-restive more barrier.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 sm-padding">
                        <div className="case-sidebar-wrap">
                            <div className="case-sidebar-item mb-50">
                                <h2>Project Details</h2>
                                <ul className="case-sidebar-list">
                                    <li><span>Client Name:</span>Kyle Frederick</li>
                                    <li><span>Budget:</span>$100000</li>
                                    <li><span>Categories:</span>Saas Softwere</li>
                                    <li><span>Completed:</span>2019</li>
                                    <li><span>Area:</span>450,000 m2</li>
                                </ul>
                                <a href="#" className="default-btn btn-blue">Lunch Project</a>
                            </div>
                            <div className="case-sidebar-item brochures-btn">
                                <h2>Brochures</h2>
                                <a href="#" className="default-btn btn-blue">Download.PDF <i className="fas fa-download"></i></a>
                                <a href="#" className="default-btn btn-blue">Download.DOC <i className="fas fa-download"></i></a>
                                <a href="#" className="default-btn btn-blue">Download.PPT <i className="fas fa-download"></i></a>
                            </div>
                            <div className="case-sidebar-item brochures-btn">
                                <ul className="social-share">
                                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-youtube"></i></a></li>
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

export default BlogDetails;