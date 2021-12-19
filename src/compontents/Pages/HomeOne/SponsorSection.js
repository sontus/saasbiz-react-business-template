import React from 'react';

const SponsorSection = () => {
    return (
        <>
        <div class="sponsor-section padding">
           <div class="section-heading mb-40 text-center wow fadeInUp" data-wow-delay="100ms">
               <span>Sponsors</span>
               <h2>Trusted by over 30,000 world’s <br/>leading companies!</h2>
           </div>
            <div class="container">
                <div id="sponsor-carousel" class="sponsor-carousel owl-carousel">
                    <div class="sponsor-item">
                        <img src="assets/img/sponsor-1.png" alt="sponsor"/>
                    </div>
                    <div class="sponsor-item">
                        <img src="assets/img/sponsor-2.png" alt="sponsor"/>
                    </div>
                    <div class="sponsor-item">
                        <img src="assets/img/sponsor-3.png" alt="sponsor"/>
                    </div>
                    <div class="sponsor-item">
                        <img src="assets/img/sponsor-4.png" alt="sponsor"/>
                    </div>
                    <div class="sponsor-item">
                        <img src="assets/img/sponsor-5.png" alt="sponsor"/>
                    </div>
                    <div class="sponsor-item">
                        <img src="assets/img/sponsor-6.png" alt="sponsor"/>
                    </div>
                    <div class="sponsor-item">
                        <img src="assets/img/sponsor-3.png" alt="sponsor"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SponsorSection;