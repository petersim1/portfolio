import React from 'react'
import '../styles/Skill.css'

import CodingSkills from './CodingSkills'
import SkillText from './SkillText'

function Skill() {


    return (
        <section id='skills'>
            <div className='section-container'>
                <h1>Skills</h1>
                <CodingSkills />
                <SkillText />
            </div>
        </section>
    )
    
}

export default Skill