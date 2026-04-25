import { motion } from "motion/react";

export function Experience() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="experience" className="py-24 md:py-40 bg-obsidian relative z-20 overflow-hidden">
      {/* Background structural lines */}
      <div className="absolute inset-0 flex justify-center pointer-events-none opacity-5">
        <div className="w-full max-w-7xl border-x border-white h-full" />
      </div>

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center px-4 md:px-12">
        
        {/* Image with Reveal Mask */}
        <div className="md:col-span-6 relative aspect-[4/3] group overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, filter: "grayscale(100%) brightness(0.6)" }}
            whileInView={{ scale: 1, filter: "grayscale(30%) brightness(1)" }}
            transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
            className="w-full h-full"
          >
            <img 
              src="https://www.doorsdubai.com/wp-content/uploads/2024/04/Breakfast-Blog_1.webp" 
              alt="Obsidian Experience"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </motion.div>
          
          <motion.div 
            initial={{ scaleY: 1 }}
            whileInView={{ scaleY: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.85, 0, 0.15, 1] }}
            className="absolute inset-0 bg-obsidian origin-top z-10"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent z-20" />
        </div>

        {/* Content Section - Offset */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
          className="md:col-span-5 md:col-start-8 flex flex-col items-start mt-8 md:mt-0"
        >
          <span className="micro-label mb-10 font-bold block">
            [ The Experience ]
          </span>
          <h2 className="title-editorial text-5xl md:text-7xl lg:text-8xl mb-12 text-white leading-[0.85]">
            NOT JUST <br />
            <span className="italic text-gold">DINNER.</span> <br />
            AN EVENT.
          </h2>
          
          <p className="text-white/40 text-lg leading-relaxed mb-14 font-light max-w-sm italic">
            OBSIDIAN seats 40 guests per evening. Every table is an experience. Every dish, a statement. Every cocktail, a memory.
          </p>

          <div className="w-full h-[1px] bg-white/5 mb-14" />

          <div className="grid grid-cols-2 gap-16 mb-16 w-full">
            <div>
              <div className="text-4xl font-serif text-gold mb-3 tracking-tighter">40</div>
              <div className="text-[0.45rem] tracking-[0.4em] text-white/20 uppercase font-bold">Exquisite Seats</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-gold mb-3 tracking-tighter">03</div>
              <div className="text-[0.45rem] tracking-[0.4em] text-white/20 uppercase font-bold">Michelin Stars</div>
            </div>
          </div>

          <button 
            onClick={() => scrollTo("menu")}
            className="group relative text-[0.55rem] tracking-[0.4em] uppercase text-gold py-3 px-8 border border-white/10 hover:border-gold transition-all duration-700 clickable overflow-hidden"
          >
            <span className="relative z-10">Explore The Menu</span>
            <div className="absolute inset-0 bg-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.25,1,0.5,1]" />
            <span className="absolute inset-0 flex items-center justify-center text-obsidian font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">Explore The Menu</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
