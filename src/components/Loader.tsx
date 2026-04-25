import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Loader() {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplete(true);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  if (complete) return null;

  const text = "OBSIDIAN";
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.2, duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-obsidian"
    >
      <div className="relative flex flex-col items-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          className="text-4xl md:text-6xl text-gold font-serif tracking-[0.2em]"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants} transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          className="h-[1px] bg-gold w-full mt-4 transform origin-left"
        />
      </div>
    </motion.div>
  );
}
