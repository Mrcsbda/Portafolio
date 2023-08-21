import React, { useState } from 'react'
import projectsInfo from '../../services/projects'
import ProjectsInformation from '../../components/projectsInformation/ProjectsInformation'
import "./projects.scss"

const Projects = () => {
  const [projects, setProjects] = useState(projectsInfo)

  return (
    <main className='projects'>
      <h1 className='projects__title'><span>Mis</span> Proyectos</h1>
      <p className='projects__text'>Aquí puedes ver algunos de los proyectos en los que he trabajado.</p>
      {
        projects.map((item,i)=> (
          <ProjectsInformation key={i} project={item}/>
        ))
      }
    </main>
  )
}

export default Projects