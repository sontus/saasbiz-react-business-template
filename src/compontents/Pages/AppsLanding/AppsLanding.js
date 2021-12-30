import React from 'react';
import ContentSection from './ContentSection';
import ExplorTheFeature from './ExplorTheFeature';
import ExplorThePlan from './ExplorThePlan';
import FeatureSection from './FeatureSection';
import FreeTrial from './FreeTrial';
import HeroSection from './HeroSection';
import TryApp from './TryApp';
import WorkingProcess from './WorkingProcess';

const AppsLanding = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <FeatureSection></FeatureSection>
            <ContentSection></ContentSection>
            <WorkingProcess></WorkingProcess>
            <TryApp></TryApp>
            <ExplorThePlan></ExplorThePlan>
            <ExplorTheFeature></ExplorTheFeature>
            <FreeTrial></FreeTrial>
        </>
    );
};

export default AppsLanding;