import React from 'react'
import "./contact.scss"

const Contact = () => {
  return (
    <main className='contact'>
      <h1 className='contact__title'>Contactame</h1>
      <p className='contact__text'>Si estás interesado en trabajar conmigo, <br/> ¡No dudes en contactarme!</p>
      <form className='contact__form'>
        <div className='contact__input-container'>
          <label htmlFor="name">Nombre completo</label>
          <input id="name" type="text" />
        </div>
        <div className='contact__input-container'>
          <label htmlFor="email">Correo Electronico</label>
          <input id="email" type="email" />
        </div>
        <div className='contact__input-container'>
          <label htmlFor="message">¡Deja tu mensaje!</label>
          <textarea id="message"></textarea>
        </div>
        <button type='submit'>Enviar</button>
      </form>
      <figure className='contact__illustration-container'>
        <img src="" alt="" />
      </figure>
    </main>
  )
}

export default Contact