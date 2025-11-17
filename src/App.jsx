import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sagas from './components/Sagas'
import PowerLevels from './components/PowerLevels'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Sagas />
        <PowerLevels />
        <Gallery />
        <footer className="py-10 text-center text-white/60">Made for Dragon Ball fans • Powered by smooth scroll animations</footer>
      </main>
    </div>
  )
}

export default App
