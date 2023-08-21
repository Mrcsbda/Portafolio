import React from 'react'
import "./skillsInformation.scss"

const SkillsInformation = () => {
    const skills = ["Html", "Css", "JavaScript", "Sass", "React", "Redux", "Git", "GitHub", "Responsive", "Illustrator"]
    return (
        <article className='skills__information-container'>
            <h1 className='skills__title'><span>Mis</span> Habilidades</h1>
            <p className='skills__text'>Aquí puedes ver las <span> tecnologías y herramientas</span> con las cuales he trabajado.</p>
            <section className='skills__skills-icons-container'>
                {
                    skills.map((item, i) => (
                        <figure key={i} className='skills__skill-icon-container'>
                            <img src={`/icons/${item}.svg`} alt="skill icon" className='skills__skill-icon'/>
                            <figcaption className='skills__skill-name'>{item}</figcaption>
                        </figure>
                    ))
                }
            </section>
        </article>
    )
}

export default SkillsInformation