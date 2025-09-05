import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Pricing from '../components/Pricing'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Index