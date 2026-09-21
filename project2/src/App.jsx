import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

// Everything stacked on one page for practice.
// In the exam, render only the component the question asks for.
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Team />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
    </>
  )
}
