import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Sagas() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const sagas = [
    { title: "Saiyan Saga", color: "from-amber-500 to-orange-500", desc: "The arrival of fierce Saiyans brings Earth's mightiest challenge." },
    { title: "Frieza Saga", color: "from-violet-500 to-fuchsia-500", desc: "The tyrant of the universe meets the wrath of a Super Saiyan." },
    { title: "Cell Saga", color: "from-emerald-500 to-teal-500", desc: "Perfected power faces destiny in the Cell Games." },
    { title: "Buu Saga", color: "from-pink-500 to-rose-500", desc: "Chaos and candy-fueled destruction change the world forever." },
  ];

  return (
    <section id="sagas" ref={ref} className="relative py-24 md:py-36 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-x-0 -z-10 top-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-40 rounded-full bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-3xl" />
        </div>
      </motion.div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Iconic Sagas
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {sagas.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white`}
            >
              <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${s.color} opacity-30`} />
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/80 text-sm">{s.desc}</p>
              <div className="mt-6 flex items-center gap-3 text-xs text-white/70">
                <span className="px-2 py-1 rounded-md bg-black/30 border border-white/10">Power-ups</span>
                <span className="px-2 py-1 rounded-md bg-black/30 border border-white/10">Transformations</span>
                <span className="px-2 py-1 rounded-md bg-black/30 border border-white/10">Boss fights</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
