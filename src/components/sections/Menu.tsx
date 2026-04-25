import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const MENU_DATA = {
  STARTERS: [
    { name: "Charred Octopus", price: "24", desc: "Smoked paprika. Saffron foam." },
    { name: "Black Truffle Bruschetta", price: "18", desc: "24 month aged sourdough." },
    { name: "Wagyu Tartare", price: "32", desc: "Egg yolk. Capers. Dark rye." },
    { name: "Lobster Bisque", price: "28", desc: "Cognac cream. Chive oil." },
  ],
  MAINS: [
    { name: "Dry Aged Venison", price: "54", desc: "Blackberry jus. Celeriac." },
    { name: "Wild Turbot", price: "48", desc: "Brown butter. Sea herbs. Foraged mushrooms." },
    { name: "A5 Black Wagyu Striploin", price: "120", desc: "Pomme purée. Bone marrow crumb." },
    { name: "Roasted Lion's Mane", price: "38", desc: "Miso glaze. Burnt onion dashi." },
  ],
  DESSERTS: [
    { name: "Dark Matter Sphere", price: "22", desc: "72% Valrhona. Yuzu center." },
    { name: "Smoked Vanilla Panacotta", price: "16", desc: "Rhubarb. Pistachio dust." },
    { name: "Gold Leaf Opera Cake", price: "24", desc: "Espresso. Dark rum. Hazelnut." },
    { name: "Artisan Cheeses", price: "28", desc: "Truffle honey. Charcoal crackers." },
  ],
};

type Tab = keyof typeof MENU_DATA;

export function Menu() {
  const [activeTab, setActiveTab] = useState<Tab>("STARTERS");

  return (
    <section id="menu" className="py-32 md:py-56 bg-obsidian-light relative z-20 overflow-hidden">
      {/* Decorative vertical text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block opacity-10">
        <div className="vertical-text text-white text-[10vw] font-serif leading-none select-none">
          CARTE DU JOUR
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-24 items-end">
          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="micro-label mb-5 font-bold block">[ The Selection ]</span>
              <h2 className="title-editorial text-5xl md:text-7xl lg:text-8xl text-white">
                THE <span className="italic text-gold italic-small">MENU</span>
              </h2>
            </motion.div>
          </div>
          <div className="md:col-span-4 text-right md:text-left">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/30 font-serif italic text-lg md:text-xl leading-tight"
            >
              Seasonal. Local. <br />
              Uncompromising.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Tabs - Sidebar Style on Desktop */}
          <div className="lg:col-span-3 flex lg:flex-col gap-6 md:gap-12 border-b lg:border-b-0 lg:border-r border-white/5 pb-8 lg:pb-0 lg:pr-12">
            {(Object.keys(MENU_DATA) as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-[0.5rem] tracking-[0.5em] uppercase text-left transition-all duration-700 clickable flex items-center group ${
                  activeTab === tab ? "text-gold translate-x-4" : "text-white/20 hover:text-white"
                }`}
              >
                <div className={`w-12 h-[1px] mr-6 bg-gold transition-all duration-700 origin-left ${activeTab === tab ? "scale-x-100" : "scale-x-0"}`} />
                {tab}
              </button>
            ))}
          </div>

          {/* Menu Items Content */}
          <div className="lg:col-span-9 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                className="grid gap-14 md:gap-24"
              >
                {MENU_DATA[activeTab].map((item, i) => (
                  <motion.div 
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="group"
                  >
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 border-b border-white/5 pb-4 group-hover:border-gold/30 transition-colors duration-700">
                      <h3 className="text-3xl md:text-5xl font-serif text-white group-hover:text-gold transition-colors duration-700 tracking-tighter leading-none">
                        {item.name}
                      </h3>
                      <span className="text-gold font-serif text-2xl md:text-4xl mt-3 md:mt-0 tracking-tighter tabular-nums">
                        €{item.price}
                      </span>
                    </div>
                    <p className="text-white/30 text-base md:text-xl font-light tracking-wide max-w-xl italic leading-relaxed group-hover:text-white/50 transition-colors duration-700">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
