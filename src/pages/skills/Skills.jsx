import React from 'react'
import SkillsInformation from '../../components/skillsInformation/SkillsInformation'
import "./skills.scss"

const Skills = () => {
  return (
    <main className='skills'>
      <figure className='skills__illustration-container'>
        <img className='' src="" alt="illustration image" />
      </figure>
      <SkillsInformation/>
    </main>
  )
}

export default Skills