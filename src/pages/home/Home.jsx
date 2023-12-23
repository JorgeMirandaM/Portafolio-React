import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import IntroductionSection from '../../components/introductionSection/IntroductionSection'
import AboutMeSection from '../../components/aboutMeSection/AboutMeSection'
import SkillsSection from '../../components/skillsSection/SkillsSection'
import HobbiesSection from '../../components/hobbiesSection/HobbiesSection'

const Home = () => {
  return (
    <>
    <Navbar/>
    <IntroductionSection/>
    <AboutMeSection/>
    <SkillsSection/>
    <HobbiesSection/>
    </>
  )
}

export default Home