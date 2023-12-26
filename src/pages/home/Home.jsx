import React from 'react'
import { Navbar, IntroductionSection, AboutMeSection, SkillsSection, HobbiesSection, AcademicTrainingSection, ProjectsSection, ContactSection } from '../../components'

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
    </>
  )
}

export default Home