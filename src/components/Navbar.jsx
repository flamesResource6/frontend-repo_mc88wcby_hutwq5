import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const items = [
    { label: "Home", href: "#home" },
    { label: "Sagas", href: "#sagas" },
    { label: "Power", href: "#power" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/30">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow"
        >
          Dragon Ball Vibes
        </motion.a>
        <div className="hidden md:flex items-center gap-6">
          {items.map((it, i) => (
            <motion.a
              key={it.href}
              href={it.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * i, duration: 0.4 }}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              {it.label}
            </motion.a>
          ))}
        </div>
        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-white/20 text-white">
          <Menu size={20} />
        </button>
      </nav>
    </header>
  );
}
