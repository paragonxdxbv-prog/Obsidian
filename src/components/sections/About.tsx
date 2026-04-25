import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 md:py-56 bg-obsidian relative z-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-dense items-start">
          
          {/* Chef Image with Reveal - Left Offset */}
          <div className="md:col-span-5 relative aspect-[3/4] overflow-hidden group">
            <motion.div
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
              className="w-full h-full"
            >
              <img 
                src="https://framerusercontent.com/images/vtfAe6wdRbOUN82aSjVOF90LGYA.jpg?width=1500&height=1000" 
                alt="Head Chef"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
              />
            </motion.div>
            <motion.div 
              initial={{ scaleX: 1 }}
              whileInView={{ scaleX: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: [0.85, 0, 0.15, 1] }}
              className="absolute inset-0 bg-obsidian origin-right z-10"
            />
          </div>

          {/* Story Content - Right */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="md:col-span-6 md:col-start-7 flex flex-col items-start pt-12 md:pt-24"
          >
            <span className="micro-label mb-10 font-bold block">[ The Visionary ]</span>
            
            <h2 className="title-editorial text-5xl md:text-7xl lg:text-8xl text-gold mb-12 leading-[0.8]">
               CRAFTING <br />
               <span className="text-white italic">SENTIENCE.</span>
            </h2>
            
            <div className="space-y-8 max-w-lg mb-14">
              <p className="text-white/90 font-serif text-2xl md:text-3xl leading-[1.2] italic tracking-tight">
                "OBSIDIAN was born from one belief: that a meal should be an experience that stays with you for years."
              </p>
              <div className="flex gap-6">
                <div className="w-8 h-[1px] bg-gold/30 mt-3 shrink-0" />
                <p className="text-white/40 text-base font-light leading-relaxed tracking-wide">
                  We stripped away the noise of modern dining. What remains is pure focus. Fire, time, and the finest ingredients we can source. The darkness of the room is intentional—it removes distractions and sharpens the palate. 
                </p>
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-10 border-t border-white/5 pt-10">
              <div>
                <p className="micro-label mb-2 text-white/30">Master Of Fire</p>
                <p className="font-serif text-2xl text-white tracking-widest uppercase text-sm">Alexander Thorne</p>
              </div>
              <div>
                <p className="micro-label mb-2 text-white/30">Journey</p>
                <p className="font-serif italic text-lg text-white/50 leading-tight">12 years. 3 countries. <br />One legacy.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
