import React from 'react';

const PlansandPricing = () => {
    return (
        <>
        <section className="host-price-section bg-grey bd-bottom padding">
            <div className="container">
                <div className="section-heading text-center mb-40 wow fadeInUp" data-wow-delay="300ms">
                   <span>Plans &amp; Pricing</span>
                   <h2>Check Out Hosting Plans <br/>&amp; Order Your Plan Now!</h2>
                </div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="host-pricing-wrap row">
                          <div className="col-lg-3">
                                <div className="nav flex-column nav-pills tab-nav" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                  <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Standard Plan</a>
                                  <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">CPU Optimized</a>
                                  <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">General Purpose</a>
                                </div>
                          </div>
                          <div className="col-lg-9">
                              <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <table className="table host-table">
                                        <thead>
                                            <tr>
                                              <th scope="col">Memory</th>
                                              <th scope="col">VCPUS</th>
                                              <th scope="col">Ssd Disk</th>
                                              <th scope="col">Transfer</th>
                                              <th scope="col">Price</th>
                                              <th scope="col">Get Plan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                              <td>1GB</td>
                                              <td>1VCPU</td>
                                              <td>50GB</td>
                                              <td>1TB</td>
                                              <td>$49/Mo</td>
                                              <td><a href="#" className="default-btn">Get It Now</a></td>
                                            </tr>
                                            <tr>
                                              <td>2GB</td>
                                              <td>2VCPU</td>
                                              <td>80GB</td>
                                              <td>2TB</td>
                                              <td>$69/Mo</td>
                                              <td><a href="#" className="default-btn">Get It Now</a></td>
                                            </tr>
                                            <tr>
                                              <td>3GB</td>
                                              <td>3VCPU</td>
                                              <td>120GB</td>
                                              <td>3TB</td>
                                              <td>$99/Mo</td>
                                              <td><a href="#" className="default-btn">Get It Now</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <table className="table host-table">
                                        <thead>
                                            <tr>
                                              <th scope="col">Memory</th>
                                              <th scope="col">VCPUS</th>
                                              <th scope="col">Ssd Disk</th>
                                              <th scope="col">Transfer</th>
                                              <th scope="col">Price</th>
                                              <th scope="col">Get Plan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                              <td>1GB</td>
                                              <td>1VCPU</td>
                                              <td>50GB</td>
                                              <td>1TB</td>
                                              <td>$49/Mo</td>
                                              <td><a href="#" className="default-btn">Get It Now</a></td>
                                            </tr>
                                            <tr>
                                              <td>2GB</td>
                                              <td>2VCPU</td>
                                              <td>80GB</td>
                                              <td>2TB</td>
                                              <td>$69/Mo</td>
                                              <td><a href="#" className="default-btn">Get It Now</a></td>
                                            </tr>
                                            <tr>
                                              <td>3GB</td>
                                              <td>3VCPU</td>
                                              <td>120GB</td>
                                              <td>3TB</td>
                                              <td>$99/Mo</td>
                                              <td><a href="#" className="default-btn">Get It Now</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <table className="table host-table">
                                        <thead>
                                            <tr>
                                              <th scope="col">Memory</th>
                                              <th scope="col">VCPUS</th>
                                              <th scope="col">Ssd Disk</th>
                                              <th scope="col">Transfer</th>
                                              <th scope="col">Price</th>
                                              <th scope="col">Get Plan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                              <td>1GB</td>
                                              <td>1VCPU</td>
                                              <td>50GB</td>
                                              <td>1TB</td>
                                              <td>$49/Mo</td>
                                              <td><a href="#" className="default-btn">Get It Now</a></td>
                                            </tr>
                                            <tr>
                                              <td>2GB</td>
                                              <td>2VCPU</td>
                                              <td>80GB</td>
                                              <td>2TB</td>
                                              <td>$69/Mo</td>
                                              <td><a href="#" className="default-btn">Get It Now</a></td>
                                            </tr>
                                            <tr>
                                              <td>3GB</td>
                                              <td>3VCPU</td>
                                              <td>120GB</td>
                                              <td>3TB</td>
                                              <td>$99/Mo</td>
                                              <td><a href="#" className="default-btn">Get It Now</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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

export default PlansandPricing;