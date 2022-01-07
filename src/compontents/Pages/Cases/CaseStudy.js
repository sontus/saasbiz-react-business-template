import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudy = () => {
    return (
        <>
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
		            <h2>Doing The Right Things.</h2>
		            <p>Multipurpose Saas Startup HTML Template.</p>
		        </div>
		    </div>
		</section>
      
        <section className="case-studies-section bd-bottom padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 padding-15">
                        <div className="project-item pb-30">
                            <img src="assets/img/portfolio-1.jpg" alt="img"/>
                            <div className="project-content">
                                <span>Marketing</span>
                                <h3> <Link to="/case-study-details">Twice profit than before you ever got in business.</Link></h3>
                                <Link to="/case-study-details"  className="read-more"><i className="ti-plus"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 padding-15">
                        <div className="project-item pb-30">
                            <img src="assets/img/portfolio-2.jpg" alt="img"/>
                            <div className="project-content">
                                <span>Marketing</span>
                                <h3> <Link to="/case-study-details">Conduct more customer in a fast better way.</Link></h3>
                               <Link to="/case-study-details"  className="read-more"><i className="ti-plus"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 padding-15">
                        <div className="project-item pb-30">
                            <img src="assets/img/portfolio-3.jpg" alt="img"/>
                            <div className="project-content">
                                <span>Marketing</span>
                                <h3> <Link to="/case-study-details">Help customers in real-time across all your channels.</Link></h3>
                               <Link to="/case-study-details"  className="read-more"><i className="ti-plus"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 padding-15">
                        <div className="project-item">
                            <img src="assets/img/portfolio-4.jpg" alt="img"/>
                            <div className="project-content">
                                <span>Marketing</span>
                                <h3> <Link to="/case-study-details">Abundantly grass a there form them upon rule won't god.</Link></h3>
                               <Link to="/case-study-details"  className="read-more"><i className="ti-plus"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 padding-15">
                        <div className="project-item">
                            <img src="assets/img/portfolio-5.jpg" alt="img"/>
                            <div className="project-content">
                                <span>Marketing</span>
                                <h3> <Link to="/case-study-details">Land from day very fill that midst stars one dominion.</Link></h3>
                               <Link to="/case-study-details"  className="read-more"><i className="ti-plus"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 padding-15">
                        <div className="project-item">
                            <img src="assets/img/portfolio-6.jpg" alt="img"/>
                            <div className="project-content">
                                <span>Marketing</span>
                                <h3> <Link to="/case-study-details">Business saas mechanisms to accelerate more changes.</Link></h3>
                               <Link to="/case-study-details"  className="read-more"><i className="ti-plus"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <div className="sponsor-section bg-grey padding-60">
            <div className="container">
                <div id="sponsor-carousel" className="sponsor-carousel owl-carousel">
                    <div className="sponsor-item">
                        <img src="assets/img/sponsor-1.png" alt="sponsor"/>
                    </div>
                    <div className="sponsor-item">
                        <img src="assets/img/sponsor-2.png" alt="sponsor"/>
                    </div>
                    <div className="sponsor-item">
                        <img src="assets/img/sponsor-3.png" alt="sponsor"/>
                    </div>
                    <div className="sponsor-item">
                        <img src="assets/img/sponsor-4.png" alt="sponsor"/>
                    </div>
                    <div className="sponsor-item">
                        <img src="assets/img/sponsor-5.png" alt="sponsor"/>
                    </div>
                    <div className="sponsor-item">
                        <img src="assets/img/sponsor-6.png" alt="sponsor"/>
                    </div>
                    <div className="sponsor-item">
                        <img src="assets/img/sponsor-3.png" alt="sponsor"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CaseStudy;