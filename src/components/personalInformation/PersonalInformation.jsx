import React from 'react'
import "./personalInformation.scss"
import github from "/icons/GitHub.svg"
import linkedin from "/icons/linkedin.svg"

const PersonalInformation = () => {
  return (
    <article className='home__information-container'>
      <h1 className='home__title'>Mariana Castañeda</h1>
      <hr className='home__parting-line' />
      <h2 className='home__subtitle'>Desarrolladora Front End</h2>
      <p className='home__text'>
        Hola! Soy Mariana, una apasionada por la tecnología y la innovación, con conocimientos en HTML
        | CSS | Sass | JavaScript | TypeScript | Angular | React | Redux y manejo de versiones en la plataforma Github.<br /><br />

        Mi formación académica se basa en una técnica en diseño e integración de multimedia, respaldada
        por un Bootcamp de la corporación Makaia especializado en Desarrollo Front End.<br /><br />

        He trabajado brindando apoyo al área de costos, esta experiencia me ha permitido desarrollar habilidades
        analíticas y una comprensión sólida de la gestión de los recursos.<br /><br />
      </p>
      <figure className='home__icons-container'>
        <a href="https://github.com/Mrcsbda" target="_blank" >
          <img className='home__social-networks-icon' src={github} alt="github icon" />
        </a>
        <a href="https://www.linkedin.com/in/mariana-casta%C3%B1eda/" target="_blank" >
          <img className='home__social-networks-icon' src={linkedin} alt="linkedin icon" />
        </a>
      </figure>
    </article>
  )
}

export default PersonalInformation