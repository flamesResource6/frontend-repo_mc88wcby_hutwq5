import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1692645214208-e150e2293672?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdXJhJTIwZW5lcmd5fGVufDB8MHx8fDE3NjM0MDA4MTJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    alt: "Aura energy",
  },
  {
    src: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?q=80&w=1600&auto=format&fit=crop",
    alt: "Blue power burst",
  },
  {
    src: "https://images.unsplash.com/photo-1761075666032-7540b8c58de7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCbHVlJTIwcG93ZXIlMjBidXJzdHxlbnwwfDB8fHwxNzYzNDAwODEzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    alt: "Fiery explosion",
  },
  {
    src: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1600&auto=format&fit=crop",
    alt: "Mountaintop battle",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Battle Gallery
        </motion.h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          A moodboard of energy, motion, and color reminiscent of iconic clashes.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 24, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <img src={img.src} alt={img.alt} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
