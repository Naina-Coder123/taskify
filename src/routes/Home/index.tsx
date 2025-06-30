import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../common/components/Header'

import { ReactComponent as HomeIllustration } from '../../assets/home-illustration.svg';
import './styles.scss'
import '../../styles/_global.scss'


const Home: React.FC = () => {
  return (
    <div className='home-container'>
      <Header />
      <main>
        <section className='home-container__presentation'>
          <div className='home-container__about'>
            <h2>Taskify helps you organize and complete your tasks.</h2>
            <p>Boost your productivity with a clean interface, stay focused, and finish all your work without hassle.</p>

          </div>
          <div className="home-container__illustration">
            <HomeIllustration />
          </div>
        </section>
        <div className='home-container__start'>
          <Link to='/tasks' className='link-button'>Get Started with Taskify!
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home