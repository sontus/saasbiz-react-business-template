import React from 'react';

const HeroSection = () => {
    return (
        <>
        <section className="hero-section hero-4 padding">
            <div className="wave-1"></div>
            <div className="container">
                <div className="hero-wrap">
                    <div className="hero-content">
                        <h1>Build the Amazing app  <br/>That Everyone will Love!</h1>
                        <p>With the saasbiz platform for customer experience, <br/>service and support.</p>
                        <div className="app-btn">
                            <a href="#"><img src="assets/img/appstore.png" alt="btn"/></a>
                            <a href="#"><img src="assets/img/playstore.png" alt="btn"/></a>
                        </div>
                    </div>
                </div>
                <div className="hero-moc d-none d-lg-block"></div>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x={'0px'} y={'0px'} viewBox={"0 0 1920 242.6"} style={{enableBackground:"new 0 0 1920 242.6"}} xml:space={'preserve'} class="hero-wave">
            
            <path style={{fill: '#FFFFFF'}}  d={'M1920,70.5v172.1H0v-27.9C171.3,122.8,367.9,89,589.6,113.4C923.1,149.9,1014.7,43,1239.7,7  c224.9-35.9,442.2,77.7,576.1,75.6C1853.2,82,1888,78,1920,70.5z'}></path>
            <rect x={'-1036'} y={'-829.4'} style={{fill: 'none'}}  width={'1920'} height={'137.6'}></rect>
            <rect x={'-1136'} y={'-829.4'} style={{fill: 'none'}} width="2446" height={'380'}></rect>
            </svg> */}
        </section>
        </>
    );
};

export default HeroSection;