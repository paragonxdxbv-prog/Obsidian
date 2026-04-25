import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-[#000000] relative pt-20 pb-10 z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Animated Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-20 origin-center"
        />

        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-serif tracking-widest text-white mb-5">
            OBSIDIAN
          </h2>
          <p className="text-gold font-serif italic text-base md:text-lg relative before:content-[''] before:absolute before:top-1/2 before:-left-10 before:w-6 before:h-[1px] before:bg-gold/50 after:content-[''] after:absolute after:top-1/2 after:-right-10 after:w-6 after:h-[1px] after:bg-gold/50">
            Fine Dining & Cocktails — Est. 2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-16 text-center md:text-left text-xs font-light text-white/40 tracking-wider">
          <div className="flex flex-col items-center md:items-start space-y-1.5">
            <h4 className="text-[0.55rem] tracking-[0.2em] uppercase text-gold mb-2 font-semibold">Location</h4>
            <p>128 Midnight Boulevard</p>
            <p>Underground Sector</p>
            <p>City Center, 10001</p>
          </div>
          
          <div className="flex flex-col items-center space-y-1.5">
            <h4 className="text-[0.55rem] tracking-[0.2em] uppercase text-gold mb-2 font-semibold">Hours</h4>
            <p>Tue — Sun: 18:00 — 02:00</p>
            <p>Monday: Private Events Only</p>
            <p>Kitchen closes at 23:30</p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-1.5">
            <h4 className="text-[0.55rem] tracking-[0.2em] uppercase text-gold mb-2 font-semibold">Contact</h4>
            <p className="hover:text-gold transition-colors cursor-pointer">+1 (555) 019-2837</p>
            <p className="hover:text-gold transition-colors cursor-pointer">concierge@obsidian.rest</p>
            <div className="flex gap-3 mt-3">
              <span className="hover:text-gold transition-colors cursor-pointer uppercase text-[0.55rem] tracking-widest">IG</span>
              <span className="hover:text-gold transition-colors cursor-pointer uppercase text-[0.55rem] tracking-widest">FB</span>
            </div>
          </div>
        </div>

        <div className="text-center text-[0.55rem] tracking-[0.2em] uppercase text-white/20 border-t border-white/5 pt-6 flex items-center justify-center gap-2">
          <span>© 2026 OBSIDIAN.</span>
          <span className="w-1 h-1 bg-gold rounded-full inline-block" />
          <span>Reservation Required.</span>
        </div>

      </div>
    </footer>
  );
}
