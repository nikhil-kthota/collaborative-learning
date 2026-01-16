import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Footer from '../components/Footer';

const LandingPage = ({ isDark, toggleTheme }) => {
    return (
        <div className="landing-wrapper">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
            <Home />
            <HowItWorks />
            <Features />
            <Footer />
        </div>
    );
};

export default LandingPage;
