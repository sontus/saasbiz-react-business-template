import React from 'react';
import Features from './Features';
import PromoSection from './PromoSection';
import Blog from './Blog';
import DomainSearchSection from './DomainSearchSection';
import HeroSection from './HeroSection';
import PlansandPricing from './PlansandPricing';
import PopupSearchBox from './PopupSearchBox';
import Services from './Services';

const WebHosting = () => {
    return (
        <>
            <PopupSearchBox></PopupSearchBox>
            <HeroSection></HeroSection>
            <DomainSearchSection></DomainSearchSection>
            <PromoSection></PromoSection>
            <Features></Features>
            <Services></Services>
            <PlansandPricing></PlansandPricing>
            <Blog></Blog>
        </>
    );
};

export default WebHosting;