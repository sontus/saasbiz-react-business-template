import React from 'react';

const ContactUs = () => {
    return (
        <>
        <div className="header-height"></div>
        
        <div className="mapouter"><div className="gmap_canvas"><iframe width={'100%'} height={'350'} id="gmap_canvas" src="https://maps.google.com/maps?q=Dynamic%20Layers&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder={'0'} scrolling={'no'} marginHeight={'0'} marginWidth={'0'}></iframe><a href="https://www.emojilib.com/"></a></div></div>
		
		<section className="contact-section padding">
            <div className="map"></div>
		    <div className="container"> 
		        <div className="contact-wrap d-flex align-items-center row">
                    <div className="col-lg-6 sm-padding">
		                <div className="contact-info">
		                    <h2>Get in touch with us & <br/>send us message today!</h2>
		                    <p>Saasbiz is a different kind of architecture practice. Founded by LoganCee in 1991, we’re an employee-owned firm pursuing a democratic design process that values everyone’s input.</p>
		                    <h3>198 West 21th Street, Suite 721 <br/>New York, NY 10010</h3>
		                    <h4><span>Email:</span> Dynamiclayers.Net <br/> <span>Phone:</span> +88 (0) 101 0000 000 <br/> <span>Fax:</span> +88 (0) 202 0000 001</h4>
		                </div>
		            </div>
		            <div className="col-lg-6 sm-padding">
		                <div className="contact-form">
                            <form action="#" method="post" id="ajax_form" className="form-horizontal">
                                <div className="form-group colum-row row">
                                    <div className="col-sm-6">
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Name" required/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="email" id="email" name="email" className="form-control" placeholder="Email" required/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <textarea id="message" name="message" cols="30" rows="5" className="form-control message" placeholder="Message" required></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <button id="submit" className="default-btn btn-blue" type="submit">Send Message</button>
                                    </div>
                                </div>
                                <div id="form-messages" className="alert" role="alert"></div>
                            </form>
                        </div>
		            </div>
		        </div>
		    </div>
        </section>
        </>
    );
};

export default ContactUs;