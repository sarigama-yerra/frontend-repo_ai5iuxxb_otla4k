import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-600/30 via-blue-600/20 to-slate-900 p-10 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Jump in and start creating</h3>
              <p className="mt-3 text-slate-200/90">Your first space is free. Invite friends, post content, and grow your vibe with playful tools built around community.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button className="inline-flex items-center justify-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100">Start for free</button>
              <button className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10">See plans</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
