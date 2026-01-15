import React from 'react';
import '../styles/Home.css';

/* 
   Removed the JS mouse tracking logic.
   The liquid effect is now handled entirely by CSS in the .centered-blob class (Home.css).
*/

const Home = () => {
    return (
        <div className="home-container" id="home">
            <div className="centered-blob" />

            <div className="home-content">
                <h1 className="headline">Learn, code, and collaborate
                    <span className="headline-italic">together in real time</span>
                </h1>

                <p className="sub-headline">
                    Collaborate smarter with shared files, real-time editing, group discussions, and AI-powered learning support.
                </p>

                <button className="btn-journey">
                    Start Collaborating
                </button>
            </div>
        </div>
    );
};

export default Home;
