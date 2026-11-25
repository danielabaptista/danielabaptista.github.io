import About from './components/About'
import Contact from './components/Contact'
import Header, { sectionIds } from './components/Header'
import Projects from './components/Projects'
import Resume from './components/Resume'
import { useActiveSection } from './hooks/useActiveSection'

export default function App() {
  const active = useActiveSection(sectionIds)
  return (
    <>
      <Header active={active} />
      <main>
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
