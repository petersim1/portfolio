import React from 'react'
import FadeInSection from './FadeInSection'

import {skills} from '../projectData'

function CodingText() {


    function genSkill(item,id) {

        return (
            <FadeInSection key={id}>
                <div className='skills-text'>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                </div>
            </FadeInSection>
        )
    }

    return (
        <div>
            {skills['text'].map((skill,index) => (
                genSkill(skill,index)
                ))}
        </div>
    )
    
}

export default CodingText