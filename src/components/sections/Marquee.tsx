import { motion } from "motion/react";

export function Marquee() {
  const text = "FINE DINING /// CRAFT COCKTAILS /// PRIVATE EVENTS /// OBSIDIAN /// RESERVATION REQUIRED /// DRESS CODE ENFORCED /// ";
  
  return (
    <section className="bg-burgundy py-4 overflow-hidden border-y border-white/5 relative z-20">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex whitespace-nowrap text-gold/40 text-[0.5rem] tracking-[0.5em] uppercase font-bold"
        >
          <span>{text.repeat(8)}</span>
        </motion.div>
      </div>
    </section>
  );
}
