import React from 'react'
import './skillsSection.css'
import { skills } from './skills'

const SkillsSection = () => {
  return (
    <>
        <div className="container skillSection mb-5">
            <div className="row py-0 py-sm-5">
            <h2 className='h2 text-center mb-5'>Skills</h2>
                <div className="col-12 d-flex gap-3 justify-content-center flex-wrap">
                    
                    {skills.map((skill,key)=>{
                        return (
                            <div className="container-skill rounded d-flex flex-column justify-content-end align-items-center gap-2 p-3" key={key}>
                                <img src={`../assets/skills/${skill.imageName}`} alt="" />
                                <p className='fw-bolder'>{skill.skill}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
  )
}

export default SkillsSection