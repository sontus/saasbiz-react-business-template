import React from 'react';

const BlogClassic = () => {
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
		            <h2>Speciallized news</h2>
		            <p>Multipurpose Saas Startup HTML Template.</p>
		        </div>
		    </div>
		</section>
		
		<section className="blog-section padding">
		    <div className="container">
		        <div className="blog-wrap row">
		            <div className="col-lg-8 sm-padding">
		                <div className="row">
		                    <div className="col-lg-12 padding-15">
                                <div className="blog-item">
                                    <div className="blog-thumb">
                                        <img src="assets/img/post-1.jpg" alt="post"/>
                                        <span className="category"><a href="#">interior</a></span>
                                    </div>
                                    <div className="blog-content">
                                        <h3><a href="#">Minimalist trending in modern architecture 2019</a></h3>
                                        <p>Building first evolved out dynamics between needs means available building materials attendant skills.Home renovations, especially those involving plentiful of demolition can be a very dusty affair. This nasty dust can easily free flow through the air and into your house.</p>
                                        <a href="#" className="read-more">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 padding-15">
                                <div className="blog-item">
                                    <div className="blog-thumb">
                                        <img src="assets/img/post-2.jpg" alt="post"/>
                                        <span className="category"><a href="#">Architecture</a></span>
                                    </div>
                                    <div className="blog-content">
                                       <h3><a href="#">Terrace in the town yamazaki kentaro design workshop.</a></h3>
                                        <p>Building first evolved out dynamics between needs means available building materials attendant skills.Home renovations, especially those involving plentiful of demolition can be a very dusty affair. This nasty dust can easily free flow through the air and into your house.</p>
                                        <a href="#" className="read-more">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 padding-15">
                                <div className="blog-item">
                                    <div className="blog-thumb">
                                        <img src="assets/img/post-3.jpg" alt="post"/>
                                        <span className="category"><a href="#">Design</a></span>
                                    </div>
                                    <div className="blog-content">
                                        <h3><a href="#">W270 house são paulo arquitetos fabio jorge architeqture.</a></h3>
                                        <p>Building first evolved out dynamics between needs means available building materials attendant skills.Home renovations, especially those involving plentiful of demolition can be a very dusty affair. This nasty dust can easily free flow through the air and into your house.</p>
                                        <a href="#" className="read-more">Read More</a>
                                    </div>
                                </div>
                            </div>
		                </div>
		                <ul className="pagination-wrap text-left mt-30">
                            <li><a href="#"><i className="ti-arrow-left"></i></a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#" className="active">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#"><i className="ti-arrow-right"></i></a></li>
                        </ul>
		            </div>
		            <div className="col-lg-4 padding-15">
		                <div className="sidebar-wrap">
                            <div className="widget-content blog-widget">
                                <form action="#" className="search-form">
                                    <input type="text" className="form-control" placeholder="Type here"/>
                                    <button className="search-btn" type="button"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
		                    <div className="widget-content blog-widget">
                                <h4>Categories</h4>
                                <ul className="widget-links">
                                    <li><a href="#">Architecture</a></li>
                                    <li><a href="#">Interior Design</a></li>
                                    <li><a href="#">Designing</a></li>
                                    <li><a href="#">Construction</a></li>
                                    <li><a href="#">Buildings</a></li>
                                </ul>
                            </div>
                            <div className="widget-content blog-widget">
                                <h4>Recent Posts</h4>
                                <ul className="thumb-post">
                                    <li><img src="assets/img/post-1.jpg" alt="post"/><a href="#">Minimalist trending in modern architecture 2019</a></li>
                                    <li><img src="assets/img/post-2.jpg" alt="post"/><a href="#">Terrace in the town kentaro design workshop.</a></li>
                                    <li><img src="assets/img/post-3.jpg" alt="post"/><a href="#">W270 house são arquitetos fabio architeqture.</a></li>
                                </ul>
                            </div>
                            <div className="widget-content blog-widget">
                                <h4>Tag Clouds</h4>
                                <ul className="tags">
                                    <li><a href="#">Architecture</a></li>
                                    <li><a href="#">Interior Design</a></li>
                                    <li><a href="#">Designing</a></li>
                                    <li><a href="#">Construction</a></li>
                                    <li><a href="#">Buildings</a></li>
                                    <li><a href="#">Industrial</a></li>
                                    <li><a href="#">Factory</a></li>
                                    <li><a href="#">Material</a></li>
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

export default BlogClassic;