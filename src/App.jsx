import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_300px_at_50%_-10%,rgba(168,85,247,0.15),transparent),radial-gradient(800px_250px_at_10%_-10%,rgba(59,130,246,0.15),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Vibes — A playful space for social creativity</p>
          <div className="flex items-center gap-5 text-slate-400 text-sm">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#community" className="hover:text-white transition">Community</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
