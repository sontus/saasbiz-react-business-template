import React from 'react';

const Register = () => {
    return (
        <>
        <section className="login-section">
           <div className="map"></div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="login-box">
                            <div className="section-heading mb-30">
                                <h2>Register New Account</h2>
                                <p>Multipurpose Saas Startup Template.</p>
                            </div>
                            <form className="login-form">
                                <div className="form-group">
                                    <input type="name" className="form-control" id="name" aria-describedby="name" placeholder="Your Name" required=""/>
                                </div><div className="form-group">
                                    <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Email address" required=""/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="password" placeholder="Password" required=""/>
                                </div>
                                <button type="submit" className="default-btn btn-blue">Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Register;