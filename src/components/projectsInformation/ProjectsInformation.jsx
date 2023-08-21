import React from 'react'
import "./projectsInformation.scss"

const ProjectsInformation = ({ project }) => {
    return (
        <article className={`projects__information-container ${project.class}__information-container`}>
            <section>
                <h2 className={`projects__subtitle ${project.class}__subtitle`}>{project.name}</h2>
                <p className={`projects__description ${project.class}__description`}>{project.description}</p>
                <figure className="projects__technologies-container">
                    {
                        project.technologies.map((technology, i) => (
                            <img
                                key={i}
                                src={`/icons/${technology}.svg`}
                                alt={`${technology} icon`}
                                className={`projects__technology ${project.class}__technology`}
                            />)
                        )
                    }
                </figure>
                <div className="projects__btns-container">
                    <a className={`projects__btn ${project.class}__btn`} href={project.demo}>Demo</a>
                    <a className={`projects__btn ${project.class}__btn`} href={project.code}>Código</a>
                </div>
            </section>
            <figure>
                <img src={project.image} alt="project image" className="projects__project-image" />
            </figure>
        </article>
    )
}

export default ProjectsInformation