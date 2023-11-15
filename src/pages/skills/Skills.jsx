import React from 'react'
import SkillsInformation from '../../components/skillsInformation/SkillsInformation'
import "./skills.scss"

const Skills = () => {
  return (
    <main className='skills'>
      <figure className='skills__illustration-container'>
        <img className='' src="./images/skills-illustration.svg" alt="illustration image" />
      </figure>
      <SkillsInformation/>
    </main>
  )
}

export default Skills