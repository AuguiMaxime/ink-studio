import Header from './components/Header'
import Hero from './components/Hero'
import Flash from './components/Flash'
import Artistes from './components/Artistes'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Flash />
        <Artistes />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
