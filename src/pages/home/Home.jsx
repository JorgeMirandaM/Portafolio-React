import React from 'react'
import { Navbar, IntroductionSection, AboutMeSection, SkillsSection, HobbiesSection, AcademicTrainingSection, ProjectsSection, ContactSection } from '../../components'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <IntroductionSection />
      <AboutMeSection />
      <SkillsSection />
      <HobbiesSection />
      <AcademicTrainingSection />
      <ProjectsSection />
      <ContactSection />
      <Footer/>
    </>
  )
}

export default Home