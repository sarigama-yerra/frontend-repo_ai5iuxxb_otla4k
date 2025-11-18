import { Menu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-slate-900/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="absolute inset-0 blur-md bg-gradient-to-tr from-fuchsia-500 via-blue-500 to-cyan-400 opacity-60 rounded-xl" />
            <div className="relative bg-slate-900/90 border border-white/15 rounded-xl p-2">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>
          <span className="text-white font-semibold tracking-tight">Vibes</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#community" className="hover:text-white transition">Community</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 items-center rounded-lg border border-white/15 bg-white/5 px-3 text-sm text-white hover:bg-white/10 transition">Log in</button>
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ y: 0 }}
            className="inline-flex h-9 items-center rounded-lg bg-gradient-to-r from-fuchsia-500 to-blue-500 px-4 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition"
          >
            Get Started
          </motion.button>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
