import React from 'react';

const ProjectSection = () => {
    return (
        <>
        <section className="project-section bd-bottom padding">
            <div className="container">
                <div className="section-heading text-center mb-40">
                    <span>Projects</span>
                    <h2>Our Case Studies</h2>
                </div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 sm-padding">
                        <div id="project-carousel" className="project-carousel owl-carousel">
                            <div className="project-item">
                                <img src="assets/img/portfolio-1.jpg" alt="img"/>
                                <div className="project-content">
                                    <span>Marketing</span>
                                    <h3><a href="#">Twice profit than before you ever got in business.</a></h3>
                                    <a href="#" className="read-more"><i className="ti-plus"></i></a>
                                </div>
                            </div>
                            <div className="project-item">
                                <img src="assets/img/portfolio-2.jpg" alt="img"/>
                                <div className="project-content">
                                    <span>Marketing</span>
                                    <h3><a href="#">Conduct more customer in a fast better way.</a></h3>
                                    <a href="#" className="read-more"><i className="ti-plus"></i></a>
                                </div>
                            </div>
                            <div className="project-item">
                                <img src="assets/img/portfolio-3.jpg" alt="img"/>
                                <div className="project-content">
                                    <span>Marketing</span>
                                    <h3><a href="#">Help customers in real-time across all your channels.</a></h3>
                                    <a href="#" className="read-more"><i className="ti-plus"></i></a>
                                </div>
                            </div>
                            <div className="project-item">
                                <img src="assets/img/portfolio-4.jpg" alt="img"/>
                                <div className="project-content">
                                    <span>Marketing</span>
                                    <h3><a href="#">Twice profit than before you ever got in business.</a></h3>
                                    <a href="#" className="read-more"><i className="ti-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default ProjectSection;