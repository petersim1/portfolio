import React from 'react'
import FadeInSection from './FadeInSection'

import {skills} from '../projectData'

function CodingSkills() {


    function genSkill(item,id) {

        return (
            <FadeInSection key={id}>
                <div className='language-logo' dangerouslySetInnerHTML={{__html: item.logo}}></div>
                <h6>{item.language}</h6>
                <p>{item.blurb}</p>
            </FadeInSection>
        )
    }

    return (
        <div className='skills-wrapper'>
            {skills['coding-skills'].map((skill,index) => (
                genSkill(skill,index)
                ))}
        </div>
    )
    
}

export default CodingSkills