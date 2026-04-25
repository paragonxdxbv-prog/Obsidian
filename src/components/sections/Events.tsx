import { motion } from "motion/react";

export function Events() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 md:py-40 bg-obsidian-light relative z-20 overflow-hidden">
      <div className="max-w-[90%] md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-start order-2 md:order-1"
        >
          <span className="text-gold text-[0.65rem] tracking-[0.3em] uppercase mb-6 font-semibold">
            [ Private Events ]
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
            The whole restaurant.<br />Just for you.
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-12 max-w-md font-light">
            Available for private hire Monday and Tuesday. Full buyout. Custom menu. Bespoke cocktail pairing. Create an evening that belongs exclusively to you and your guests.
          </p>

          <button 
            onClick={() => scrollTo("reservations")}
            className="text-[0.65rem] tracking-[0.15em] uppercase border border-gold/50 text-gold px-8 py-4 hover:bg-gold hover:text-obsidian transition-all duration-300 clickable"
          >
            Enquire Now
          </button>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
          className="relative aspect-square md:aspect-[4/3] overflow-hidden order-1 md:order-2 group"
        >
          <div className="absolute inset-0 bg-obsidian/20 z-10 transition-opacity duration-700 group-hover:opacity-0" />
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/98/73/3f/thiptara-4.jpg" 
            alt="Private Event at Obsidian"
            className="w-full h-full object-cover grayscale-[30%] contrast-[1.1]"
          />
          <div className="absolute inset-4 border border-white/5 z-20 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}
