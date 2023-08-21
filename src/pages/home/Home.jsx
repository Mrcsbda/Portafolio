import React from 'react'
import PersonalInformation from '../../components/personalInformation/PersonalInformation'
import illustration from "/images/home-illustration.svg"
import "./home.scss"

const Home = () => {
  return (
    <main className='home'>
      <PersonalInformation/>
      <figure className='home__illustration-container'>
        <img className='home__illustration' src={illustration} alt="illustration image" />
      </figure>
    </main>
  )
}

export default Home