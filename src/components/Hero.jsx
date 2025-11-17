import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[120vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,153,0,0.25),transparent_40%),_radial-gradient(circle_at_80%_30%,rgba(0,140,255,0.2),transparent_35%),_radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.1),transparent_40%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7 }}
          className="text-white"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Unleash Your Saiyan Energy
          </h1>
          <p className="mt-5 text-white/80 text-lg leading-relaxed">
            A dynamic fan hub with buttery scroll animations, parallax layers, and a gallery inspired by Dragon Ball's legendary battles.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#sagas" className="px-5 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/30 transition-transform hover:-translate-y-0.5">
              Explore Sagas
            </a>
            <a href="#gallery" className="px-5 py-3 rounded-md border border-white/20 hover:bg-white/10 text-white font-semibold">
              View Gallery
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-amber-500/30 via-amber-300/20 to-sky-400/30 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white">
            <motion.div
              initial={{ rotate: -8 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="aspect-video w-full rounded-xl overflow-hidden bg-gradient-to-br from-orange-500/40 to-cyan-500/40 grid place-items-center text-2xl font-bold"
            >
              Kamehameha Energy
            </motion.div>
            <p className="mt-4 text-white/70 text-sm">
              Smooth parallax and scroll-triggered reveals make the site feel alive.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Scroll to power up ↓
      </motion.div>
    </section>
  );
}
