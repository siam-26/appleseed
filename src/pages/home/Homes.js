import React from 'react';
import Hero from './Hero';
import Portfolio from './Portfolio';
import About from './About';
import Latest from './Latest';
import Offer from './Offer';

const Homes = () => {
    return (
        <div className="bg-white rounded-2xl py-5">
            <Hero/>
            <Portfolio/>
            <About/>
            <Latest/>
            <Offer/>
        </div>
    );
};

export default Homes;