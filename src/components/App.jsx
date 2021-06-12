import React from 'react';

import Header from './Header';
import About from './About';
import Footer from './Footer';
import Education from './Education';
import Project from './Project'
import Skill from './Skill'



function App() {

    return (
        <div className='main-div'>
            <Header />
            <About />
            <Education />
            <Skill />
            <Project />
            <Footer />
        </div>
    )
}

export default App