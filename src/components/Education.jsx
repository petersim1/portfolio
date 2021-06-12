import React from 'react'
import FadeInSection from './FadeInSection'

import '../styles/Education.css'
import {education} from '../projectData'

function Education() {

    function genEdu(item,id) {


        return (
            <FadeInSection key={id} className='flex-container'>
                <div className='card'>
                    <img src={`${process.env.PUBLIC_URL}/${item.logoPath}`} alt='logo'/>
                    <h3>{item.school}</h3>
                    <h6>{item.degree} 🎓</h6>
                    <p>Some of my favorite courses:</p>
                    <ul>
                        {item.courses.map((course,ind) => <li key={ind}>{course}</li>)}
                    </ul>
                </div>
            </FadeInSection>
        )
    }

    return (
        <section id='education'>
            <div className='section-container'>
                <h1>Education</h1>
                <div className='education-wrapper'>
                        {education.map((item,index) => (
                            genEdu(item,index))
                            )}
                </div>
            </div>
        </section>
    )
    
}

export default Education