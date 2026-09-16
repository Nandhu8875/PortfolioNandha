import { usePortfolio } from './hooks/usePortfolio'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import AboutSection from './components/AboutSection'
import EducationSection from './components/EducationSection'
import Footer from './components/Footer'

export default function App() {
  const { profile, projects, experience, skills, recommendation, education } = usePortfolio()

  return (
    <>
      <Navbar name={profile.shortName} />
      <main>
        <HeroSection profile={profile} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experience={experience} />
        <SkillsSection skills={skills} />
        <AboutSection profile={profile} recommendation={recommendation} />
        <EducationSection education={education} />
      </main>
      <Footer profile={profile} />
    </>
  )
}
