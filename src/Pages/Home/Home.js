import React from 'react';
import UseTitle from '../../Hooks/UseTitle';
import About from './About';
import Banner from './Banner';
import Section from './Section';
import Services from './Service/Services';



const Home = () => {
    UseTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Section></Section>
        </div>
    );
};

export default Home;