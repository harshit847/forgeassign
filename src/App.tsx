import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import VideoSection from './sections/VideoSection'
import PopularDetails from './sections/PopularDetails'
import About from './sections/About'
import Tools from './sections/Tools'
import GetInTouch from './sections/GetInTouch'

export default function App() {
  return (
    <div className="min-h-screen dot-bg">
      <Navbar />
      <main>
        <Hero />
        <VideoSection />
        <About />
        <Tools/>
        <GetInTouch/>
        <PopularDetails />
      </main>
    </div>
  )
}