import { motion } from 'framer-motion';
import { Users, Camera, Sparkles, Share2 } from 'lucide-react';

const features = [
  {
    title: 'Creator-first',
    desc: 'Built for storytellers, designers, and anyone with a vision to share.',
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: 'Visual-forward',
    desc: 'Playful, vibrant visuals that make your content pop and your brand shine.',
    icon: <Camera className="w-5 h-5" />,
  },
  {
    title: 'Communities',
    desc: 'Start spaces for your niches, collaborate, and grow together.',
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: 'Seamless sharing',
    desc: 'One-tap cross-posting across your favorite platforms.',
    icon: <Share2 className="w-5 h-5" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_0%,rgba(217,70,239,0.15),transparent),radial-gradient(600px_200px_at_80%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Designed for modern creators
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur hover:bg-white/10 transition"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-fuchsia-300">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
