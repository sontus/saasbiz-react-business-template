import React from 'react';

const Blog = () => {
    return (
        <>
        <section class="blog-section padding">
            <div class="container">
                <div class="section-heading text-center mb-40 wow fadeInUp" data-wow-delay="300ms">
                   <span>From Blog</span>
                   <h2>A Good Newspaper Is A <br/> Nation Talking To Itself</h2>
                </div>
                <div class="row blog-wrap">
                    <div class="col-lg-4 col-sm-6 sm-padding">
                        <div class="blog-item">
                            <div class="blog-thumb">
                                <img src="assets/img/hosting-post-1.jpg" alt="post"/>
                                <span class="category"><a href="#">interior</a></span>
                            </div>
                            <div class="blog-content">
                                <h3><a href="#">Minimalist trending in modern architecture 2019</a></h3>
                                <p>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                                <a href="#" class="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 sm-padding">
                        <div class="blog-item">
                            <div class="blog-thumb">
                                <img src="assets/img/hosting-post-2.jpg" alt="post"/>
                                <span class="category"><a href="#">Architecture</a></span>
                            </div>
                            <div class="blog-content">
                               <h3><a href="#">Terrace in the town yamazaki kentaro design workshop.</a></h3>
                                <p>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                                <a href="#" class="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 sm-padding">
                        <div class="blog-item">
                            <div class="blog-thumb">
                                <img src="assets/img/hosting-post-3.jpg" alt="post"/>
                                <span class="category"><a href="#">Design</a></span>
                            </div>
                            <div class="blog-content">
                                <h3><a href="#">W270 house são paulo arquitetos fabio jorge architeqture.</a></h3>
                                <p>Building first evolved out dynamics between needs means available building materials attendant skills.</p>
                                <a href="#" class="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Blog;