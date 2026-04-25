import { motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type ReservationFormData = {
  name: string;
  email: string;
  date: string;
  time: string;
  party: string;
  requests: string;
};

export function Reservation() {
  const { register, handleSubmit, formState: { errors } } = useForm<ReservationFormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (data: ReservationFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      console.log("Reservation DATA: ", data);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="reservations" className="py-20 md:py-32 bg-obsidian relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-light to-obsidian opacity-50 z-0 pointer-events-none" />
      
      <div className="max-w-2xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-5 text-white tracking-tight">
            RESERVE YOUR TABLE
          </h2>
          <p className="text-white/40 font-serif italic text-base md:text-lg">
            We seat a maximum of 40 guests per evening.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1.5 }}
          onSubmit={handleSubmit(onSubmit)} 
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-left border-t border-white/5 pt-16"
        >
          <div className="flex flex-col gap-2 group">
            <label className="text-[0.45rem] tracking-[0.5em] uppercase text-white/20 group-focus-within:text-gold transition-colors">01 // Full Name</label>
            <input 
              {...register("name", { required: true })}
              type="text" 
              className="bg-transparent border-b border-white/5 pb-4 text-white font-serif text-xl focus:outline-none focus:border-gold transition-all duration-700 rounded-none placeholder-white/5 clickable"
              placeholder="Your name"
            />
            {errors.name && <span className="text-red-500/40 text-[9px] mt-1 tracking-widest uppercase">Required</span>}
          </div>

          <div className="flex flex-col gap-2 group">
            <label className="text-[0.45rem] tracking-[0.5em] uppercase text-white/20 group-focus-within:text-gold transition-colors">02 // Email Address</label>
            <input 
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              type="email" 
              className="bg-transparent border-b border-white/5 pb-4 text-white font-serif text-xl focus:outline-none focus:border-gold transition-all duration-700 rounded-none placeholder-white/5 clickable"
              placeholder="Email"
            />
            {errors.email && <span className="text-red-500/40 text-[9px] mt-1 tracking-widest uppercase">Valid email required</span>}
          </div>

          <div className="flex flex-col gap-2 group">
            <label className="text-[0.45rem] tracking-[0.5em] uppercase text-white/20 group-focus-within:text-gold transition-colors">03 // Date Of Visit</label>
            <input 
              {...register("date", { required: true })}
              type="date" 
              className="bg-transparent border-b border-white/5 pb-4 text-white font-serif text-xl focus:outline-none focus:border-gold transition-all duration-700 rounded-none clickable appearance-none color-scheme-dark"
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2 group">
              <label className="text-[0.45rem] tracking-[0.5em] uppercase text-white/20 group-focus-within:text-gold transition-colors">04 // Time</label>
              <select 
                {...register("time", { required: true })}
                className="bg-transparent border-b border-white/5 pb-4 text-white font-serif text-xl focus:outline-none focus:border-gold transition-all duration-700 rounded-none clickable appearance-none [&>option]:bg-obsidian"
              >
                <option value="">Select</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2 group">
              <label className="text-[0.45rem] tracking-[0.5em] uppercase text-white/20 group-focus-within:text-gold transition-colors">05 // Guests</label>
              <select 
                {...register("party", { required: true })}
                className="bg-transparent border-b border-white/5 pb-4 text-white font-serif text-xl focus:outline-none focus:border-gold transition-all duration-700 rounded-none clickable appearance-none [&>option]:bg-obsidian"
              >
                <option value="">Guests</option>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5-8">5-8 People</option>
                <option value="private">Private Hire (8+)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2 group">
            <label className="text-[0.45rem] tracking-[0.5em] uppercase text-white/20 group-focus-within:text-gold transition-colors">06 // Special Requests</label>
            <textarea 
              {...register("requests")}
              className="bg-transparent border-b border-white/5 pb-4 text-white font-serif text-xl focus:outline-none focus:border-gold transition-all duration-700 rounded-none resize-none h-20 placeholder-white/5 clickable"
              placeholder="Dietary requirements..."
            />
          </div>

          <div className="md:col-span-2 flex flex-col items-center mt-12 gap-10">
            <button 
              type="submit" 
              disabled={isSubmitting || isSuccess}
              className="group relative bg-gold text-obsidian px-16 py-5 text-[0.6rem] transition-all duration-700 tracking-[0.4em] uppercase w-full sm:w-auto font-bold overflow-hidden clickable disabled:opacity-50"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-gold">
                {isSubmitting ? "Processing..." : isSuccess ? "Reservation Requested" : "Confirm Reservation"}
              </span>
              <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <div className="absolute inset-0 bg-obsidian transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
            </button>
            <div className="text-center space-y-4">
              <p className="text-white/20 text-[0.5rem] tracking-[0.5em] uppercase font-bold">
                Confirming implies acceptance of our 48h cancellation policy.
              </p>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
