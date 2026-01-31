import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Services from './components/sections/Services'
import Pricing from './components/sections/Pricing'
import About from './components/sections/About'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Pricing />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
