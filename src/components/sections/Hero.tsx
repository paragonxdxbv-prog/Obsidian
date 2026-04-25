import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToRef = () => {
    const el = document.getElementById("experience");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-obsidian flex items-center justify-center">
      {/* Background Image with Parallax & Slow Zoom */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <motion.div 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/98/73/3f/thiptara-4.jpg"
            alt="Obsidian Venue"
            className="w-full h-full object-cover object-center opacity-30 grayscale-[20%] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-t from-burgundy/10 to-transparent mix-blend-overlay" />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
          <p className="micro-label mb-8 font-bold">
            [ Fine Dining & Craft Cocktails ]
          </p>
          <h1 className="title-editorial text-[12vw] md:text-[9vw] lg:text-[7.5vw] text-white overflow-hidden mb-10">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 3, duration: 1, ease: [0.85, 0, 0.15, 1] }}
              className="block"
            >
              WHERE DARKNESS
            </motion.span>
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 3.1, duration: 1, ease: [0.85, 0, 0.15, 1] }}
              className="block italic text-gold"
            >
              TASTES LIKE LUXURY.
            </motion.span>
          </h1>
          <p className="text-white/40 font-serif italic text-lg md:text-xl tracking-[0.05em] mb-16 max-w-xl mx-auto">
            The whole restaurant. Just for you.
          </p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <button 
          onClick={scrollToRef}
          className="text-[0.6rem] tracking-[0.3em] uppercase text-gold hover:text-white transition-all duration-500 clickable flex flex-col items-center gap-8 group"
        >
          <span className="group-hover:tracking-[0.4em] transition-all duration-500">Reserve Your Table</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent group-hover:h-24 transition-all duration-700" />
        </button>
      </motion.div>
      
      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-burgundy/10 via-gold/5 to-transparent pointer-events-none blur-3xl" />
    </section>
  );
}
