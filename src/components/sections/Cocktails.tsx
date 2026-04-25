import { motion } from "motion/react";

const COCKTAILS = [
  { 
    name: "OBSIDIAN OLD FASHIONED", 
    price: "22", 
    desc: "Smoked bourbon. Black walnut.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "MIDNIGHT NEGRONI", 
    price: "19", 
    desc: "Barrel aged gin. Activated charcoal.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "DARK MATTER", 
    price: "24", 
    desc: "Mezcal. Blackcurrant. Smoke.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "VELVET SOUR", 
    price: "18", 
    desc: "Whiskey. Egg white. Violet.",
    image: "https://images.unsplash.com/photo-1536935338218-d4135249db21?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "NOIR SPRITZ", 
    price: "16", 
    desc: "Black elderflower. Prosecco.",
    image: "https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&q=80&w=800"
  },
  { 
    name: "THE OBSIDIAN", 
    price: "28", 
    desc: "Our signature. Secret recipe.",
    image: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=800"
  },
];

export function Cocktails() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  return (
    <section id="cocktails" className="py-32 md:py-56 bg-obsidian relative z-20 overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-burgundy/10 to-transparent opacity-50 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-20 md:mb-32 items-end">
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="micro-label mb-6 font-bold block">[ Liquid Art ]</span>
              <h2 className="title-editorial text-5xl md:text-7xl lg:text-8xl text-white">
                THE <span className="italic text-gold italic-small">BAR</span>
              </h2>
            </motion.div>
          </div>
          <div className="md:col-span-4 md:text-right">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/30 font-serif italic text-lg md:text-xl leading-tight max-w-xs ml-auto"
            >
              Crafted by obsession. <br />
              Served with intention.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-white/5 bg-white/[0.01]">
          {COCKTAILS.map((cocktail, i) => (
            <motion.div
              key={cocktail.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group relative p-12 border-white/5 border-[0.5px] transition-all duration-1000 clickable flex flex-col justify-between aspect-square md:min-h-[420px] overflow-hidden"
            >
              {/* Image Background Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={cocktail.image} 
                  alt={cocktail.name}
                  className="w-full h-full object-cover opacity-[0.03] grayscale transition-all duration-1000 group-hover:opacity-[0.15] group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-obsidian/40" />
              </div>

              {/* Subtle hover reveal */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-1" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-1" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="flex flex-col">
                    <span className="font-mono text-[0.45rem] text-gold tracking-[0.5em] mb-2 opacity-40">ITEM 0{i + 1}</span>
                    <div className="w-8 h-[1px] bg-gold/30" />
                  </div>
                  <span className="font-serif text-3xl text-white/10 group-hover:text-gold transition-all duration-700 tracking-tighter">
                    €{cocktail.price}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-6 group-hover:text-gold transition-colors duration-700 leading-[0.9] tracking-tighter uppercase font-light">
                  {cocktail.name.split(' ').map((word, idx) => (
                    <span key={idx} className="block">{word}</span>
                  ))}
                </h3>
              </div>

              <div className="relative z-10">
                <p className="font-serif italic text-white/30 text-lg group-hover:text-white/60 transition-colors duration-700 leading-snug max-w-[80%]">
                  {cocktail.desc}
                </p>
                <div className="mt-8 flex items-center gap-4 group-hover:gap-6 transition-all duration-700">
                  <div className="w-12 h-[1px] bg-gold/20" />
                  <span className="text-[0.45rem] tracking-[0.5em] uppercase text-white/10 group-hover:text-gold/50 transition-colors duration-700">Detailed Sourcing</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
