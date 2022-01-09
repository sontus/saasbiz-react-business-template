import React from 'react';

const Login = () => {
    return (
        <>
        <section className="login-section">
           <div className="map"></div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="login-box">
                            <div className="section-heading mb-30">
                                <h2>Login To Your Account</h2>
                                <p>Multipurpose Saas Startup Template.</p>
                            </div>
                            <form className="login-form">
                                <div className="form-group">
                                    <input type="email" className="form-control" id="email" aria-describedby="email" placeholder="Email address" required=""/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="password" placeholder="Password" required=""/>
                                </div>
                                <button type="submit" className="default-btn btn-blue">Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Login;