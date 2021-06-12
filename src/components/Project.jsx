import React from 'react'
import FadeInSection from './FadeInSection'

import '../styles/Project.css'

import {projects} from '../projectData'

function Project() {


    function genProject(item,id) {

        return (
            <FadeInSection key={id} className='flex-container'>
                <div className='card'>
                    <div className='card-body'>
                        <h3 className='card-title'>{item.title}</h3>
                        <h6 className="card-subtitle">{item.type}</h6>
                        <p className="card-text" dangerouslySetInnerHTML={{__html: item.description}}></p>
                        <button href={item.url} target="_blank" rel="noreferrer" disabled={item.disabled}>
                            <i className="fab fa-github"></i> Repo
                        </button>
                        <hr />
                        <span className='languages'>{item.languages}</span>
                    </div>
                </div>
            </FadeInSection>
        )
    }

    return (
        <section id='projects'>
            <div className='section-container'>
                <h1>Projects</h1>
                <div className='project-wrapper'>
                    {projects.map((project,index) => (
                        genProject(project,index)
                        ))}
                </div>
            </div>
        </section>
    )
    
}

export default Project