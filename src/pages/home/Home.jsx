import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import IntroductionSection from '../../components/introductionSection/IntroductionSection'
import AboutMeSection from '../../components/aboutMeSection/AboutMeSection'

const Home = () => {
  return (
    <>
    <Navbar/>
    <IntroductionSection/>
    <AboutMeSection/>
    </>
  )
}

export default Home