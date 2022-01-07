import React from 'react';
import Features from './Features';
import FeaturesLayout from './FeaturesLayout';
import FunFact from './FunFact';
import Hero from './Hero';
import PriceList from './PriceList';
import SassService from './SassService';

const CloudBasedSaas = () => {
    return (
        <>
            <Hero></Hero>
            <SassService></SassService>
            <Features></Features>
            <FeaturesLayout></FeaturesLayout>
            <FunFact></FunFact>
            <PriceList></PriceList>
        </>
    );
};

export default CloudBasedSaas;