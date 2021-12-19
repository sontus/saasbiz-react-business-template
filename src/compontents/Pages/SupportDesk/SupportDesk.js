import React from 'react';
import CtaSection from './CtaSection';
import ContentSection from './ContentSection';
import GettingStarted from './GettingStarted';
import HeroSection from './HeroSection';
import PromoSection from './PromoSection';
import Team from './Team';

const SupportDesk = () => {
    return (
        <>
           <HeroSection></HeroSection>
           <PromoSection></PromoSection>
           <ContentSection></ContentSection>
           <GettingStarted></GettingStarted>
           <Team></Team>
           <CtaSection></CtaSection>
        </>
    );
};

export default SupportDesk;