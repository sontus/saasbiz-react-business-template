import React from 'react';
import ContentSection from './ContentSection';
import CtaSection from './CtaSection';
import FeatureSection from './FeatureSection';
import HeroSction from './HeroSction';
import ProjectSection from './ProjectSection';
import PromoSection from './PromoSection';
import SponsorSection from './SponsorSection';
import TestimonialSection from './TestimonialSection';
import WebSearchSection from './WebSearchSection';

const HomeOne = () => {
    return (
        <>
            <HeroSction/>
            <PromoSection/>
            <FeatureSection/>
            <ContentSection/>
            <WebSearchSection/>
            <ProjectSection/>
            <TestimonialSection/>
            <CtaSection/>
            <SponsorSection/>
        </>
    );
};

export default HomeOne;