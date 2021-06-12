import React from 'react'
import '../styles/Footer.css'

function Footer() {

    const copyright = {
        fontSize: '.75rem',
        color: 'white'}

    const date = new Date()

    return (
        <footer id='contact'>
            <div className='div-footer'>
                <h1>Please get in touch!</h1>
                <p>
                    I'm looking for a full-time Data Science or Machine Learning opportunity. 
                    Please feel free to reach out to me. Send me an email if you'd like a copy of
                    my resume! 
                </p>
                <a href="mailto:plssimone@gmail.com"><i className="far fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/peter-simone-nyu-cds/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/petersim1" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                <p style={copyright}>&copy; {date.getFullYear()} Peter Simone. Built with <i className="fab fa-react"></i></p>
            </div>
        </footer>

    )
}

export default Footer