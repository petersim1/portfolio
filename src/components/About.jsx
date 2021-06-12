import React,{useEffect,useRef} from 'react'
import Typed from 'typed.js';
import '../styles/About.css';

import {blurb} from '../projectData';

function Main() {

    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
            'Research',
            'Sports',
            'Machine Learning',
            'Data Science'
          ],
          typeSpeed: 50,
          backSpeed: 20,
        };

        // const typed = new Typed('#typer', options);
        typed.current = new Typed('#typer', options);
        
        return () => {
          typed.current.destroy();
        }
      }, [])

    
    return (
        <section id='about'>
            <div className='about-me'>
                <h1>Peter Simone</h1>
                <h5 onClick={() => typed.current.reset()}>Passionate about <span id='typer'></span></h5>
                <p id='about-me-text'>{blurb}</p>
            </div>
        </section>
    )
    
}

export default Main