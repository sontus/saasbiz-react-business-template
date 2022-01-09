import React from 'react';

const JobListing = () => {
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
		            <h2>666,321 New Jobs <br/>Available In The Last 7 Days</h2>
		            <p>Multipurpose Saas Startup HTML Template.</p>
		        </div>
		    </div>
		</section>
       
        <section className="job-list-section bd-bottom padding">
           <div className="container">
               <div className="row">
                    <div className="col-md-12 padding-15">
                        <div className="job-item row">
                            <div className="col-md-2">
                               <div className="compamy-logo">
                                   <img src="assets/img/job-brand-1.jpg" alt="img"/>
                               </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="job-details">
                                    <h3><a href="#">Digital Marketer - Web & Content Specialist</a></h3>
                                    <ul className="job-list">
                                        <li>Full Time</li>
                                        <li>New York, NY10022</li>
                                        <li>Published 2 Months Ago</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="job-details-btn">
                                    <a href="#" className="default-btn btn-blue">Apply Job</a>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="col-md-12 padding-15">
                        <div className="job-item row">
                            <div className="col-md-2">
                               <div className="compamy-logo">
                                   <img src="assets/img/job-brand-2.jpg" alt="img"/>
                               </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="job-details">
                                    <h3><a href="#">WordPress Developer, Digital & Creative Department</a></h3>
                                    <ul className="job-list">
                                        <li>Full Time</li>
                                        <li>New York, NY10022</li>
                                        <li>Published 2 Months Ago</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="job-details-btn">
                                    <a href="#" className="default-btn btn-blue">Apply Job</a>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="col-md-12 padding-15">
                        <div className="job-item row">
                            <div className="col-md-2">
                               <div className="compamy-logo">
                                   <img src="assets/img/job-brand-3.jpg" alt="img"/>
                               </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="job-details">
                                    <h3><a href="#">Asst. Area Sales Manager/ Area Sales Manager</a></h3>
                                    <ul className="job-list">
                                        <li>Full Time</li>
                                        <li>New York, NY10022</li>
                                        <li>Published 2 Months Ago</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="job-details-btn">
                                    <a href="#" className="default-btn btn-blue">Apply Job</a>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="col-md-12 padding-15">
                        <div className="job-item row">
                            <div className="col-md-2">
                               <div className="compamy-logo">
                                   <img src="assets/img/job-brand-4.jpg" alt="img"/>
                               </div>
                            </div>
                            <div className="col-lg-7 col-md-6">
                                <div className="job-details">
                                    <h3><a href="#">Software Quality Assurance Programing Engineer</a></h3>
                                    <ul className="job-list">
                                        <li>Full Time</li>
                                        <li>New York, NY10022</li>
                                        <li>Published 2 Months Ago</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4">
                                <div className="job-details-btn">
                                    <a href="#" className="default-btn btn-blue">Apply Job</a>
                                </div>
                            </div>
                       </div>
                    </div>
                    <ul className="pagination-wrap text-center mt-30">
                        <li><a href="#"><i className="ti-arrow-left"></i></a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#" className="active">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#"><i className="ti-arrow-right"></i></a></li>
                    </ul>
               </div>
           </div>
        </section>
        </>
    );
};

export default JobListing;