import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 border-b border-transparent ${
        isScrolled ? "bg-obsidian/80 backdrop-blur-md border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[90%] md:max-w-7xl mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
        <div className="text-gold font-serif text-2xl tracking-widest cursor-pointer clickable" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          OBSIDIAN
        </div>

        <div className="hidden md:flex items-center gap-1 text-[0.55rem] font-bold tracking-[0.25em] uppercase text-white/40">
          <button onClick={() => scrollTo("experience")} className="hover:text-gold hover:bg-white/[0.02] px-4 py-2 rounded-full transition-all duration-300 clickable">Experience</button>
          <button onClick={() => scrollTo("menu")} className="hover:text-gold hover:bg-white/[0.02] px-4 py-2 rounded-full transition-all duration-300 clickable">Menu</button>
          <button onClick={() => scrollTo("cocktails")} className="hover:text-gold hover:bg-white/[0.02] px-4 py-2 rounded-full transition-all duration-300 clickable">Cocktails</button>
          <button onClick={() => scrollTo("about")} className="hover:text-gold hover:bg-white/[0.02] px-4 py-2 rounded-full transition-all duration-300 clickable">About</button>
        </div>

        <div className="hidden md:block">
          <button 
            onClick={() => scrollTo("reservations")}
            className="text-[0.55rem] tracking-[0.15em] uppercase bg-gold text-obsidian px-6 py-2.5 hover:bg-white transition-all duration-500 font-bold clickable"
          >
            Reservation
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-gold clickable p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="8" x2="20" y2="8"></line>
            <line x1="4" y1="16" x2="20" y2="16"></line>
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
