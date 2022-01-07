import React from 'react';

const ProjectSection = () => {
    return (
        <>
        <section class="project-section bd-bottom padding">
            <div class="container">
                <div class="section-heading text-center mb-40">
                    <span>Projects</span>
                    <h2>Our Case Studies</h2>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1 sm-padding">
                        <div id="project-carousel" class="project-carousel owl-carousel">
                            <div class="project-item">
                                <img src="img/portfolio-1.jpg" alt="img"/>
                                <div class="project-content">
                                    <span>Marketing</span>
                                    <h3><a href="#">Twice profit than before you ever got in business.</a></h3>
                                    <a href="#" class="read-more"><i class="ti-plus"></i></a>
                                </div>
                            </div>
                            <div class="project-item">
                                <img src="img/portfolio-2.jpg" alt="img"/>
                                <div class="project-content">
                                    <span>Marketing</span>
                                    <h3><a href="#">Conduct more customer in a fast better way.</a></h3>
                                    <a href="#" class="read-more"><i class="ti-plus"></i></a>
                                </div>
                            </div>
                            <div class="project-item">
                                <img src="img/portfolio-3.jpg" alt="img"/>
                                <div class="project-content">
                                    <span>Marketing</span>
                                    <h3><a href="#">Help customers in real-time across all your channels.</a></h3>
                                    <a href="#" class="read-more"><i class="ti-plus"></i></a>
                                </div>
                            </div>
                            <div class="project-item">
                                <img src="img/portfolio-4.jpg" alt="img"/>
                                <div class="project-content">
                                    <span>Marketing</span>
                                    <h3><a href="#">Twice profit than before you ever got in business.</a></h3>
                                    <a href="#" class="read-more"><i class="ti-plus"></i></a>
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