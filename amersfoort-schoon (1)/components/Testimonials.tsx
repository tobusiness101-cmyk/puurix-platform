"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";

export const Testimonials = () => {
  return (
    <section className="bg-background py-24 relative overflow-hidden">
      <div className="container z-10 mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-accent/20 bg-accent/5 py-1.5 px-4 rounded-full text-xs font-medium tracking-wide text-accent uppercase">
              Klantverhalen
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Wat onze partners zeggen
          </h2>
          <p className="text-center mt-4 text-lg text-primary/70">
            Ontdek waarom beheerders in regio Amersfoort & Breda hun objecten blind aan ons toevertrouwen.
          </p>
        </motion.div>

        {/* Masking gradients to seamlessly fade the scrolling columns at top and bottom */}
        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] h-[600px] overflow-hidden">
          <TestimonialsColumn duration={22} className="hidden lg:block w-full max-w-sm" />
          <TestimonialsColumn duration={18} className="w-full max-w-sm" />
          <TestimonialsColumn duration={25} className="hidden md:block w-full max-w-sm" />
        </div>
      </div>
    </section>
  );
};