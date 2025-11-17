import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Gauge({ value }) {
  return (
    <div className="relative h-2 w-full overflow-hidden rounded bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="absolute left-0 top-0 h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-emerald-400"
      />
    </div>
  );
}

export default function PowerLevels() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 20, mass: 0.4 });
  const [level, setLevel] = useState(10);

  useEffect(() => {
    const unsub = smooth.on("change", (v) => {
      setLevel(Math.round(10 + v * 90));
    });
    return () => unsub?.();
  }, [smooth]);

  const fighters = [
    { name: "Goku", value: Math.min(100, level) },
    { name: "Vegeta", value: Math.min(95, Math.round(level * 0.95)) },
    { name: "Gohan", value: Math.min(88, Math.round(level * 0.9)) },
    { name: "Piccolo", value: Math.min(80, Math.round(level * 0.82)) },
  ];

  return (
    <section id="power" ref={ref} className="relative py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Power Levels
        </motion.h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Scroll to charge up the scouter readings. The deeper you go, the higher they spike.
        </p>

        <div className="mt-8 grid gap-5">
          {fighters.map((f) => (
            <div key={f.name} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between text-white/90 mb-2">
                <span className="font-medium">{f.name}</span>
                <span className="text-sm">{f.value}%</span>
              </div>
              <Gauge value={f.value} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
