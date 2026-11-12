"use client";

import React from "react";
import { motion } from "framer-motion";

// Premium placeholder data tailored to the hospitality/B2B aesthetic
const testimonials = [
  {
    text: "Heel tevreden over de service, kwaliteit en de fijne mensen.",
    image: "1772042773309.jpg",
    name: "Carin Smand",
    role: "Allegoeds groepshotel Het Bosgoed Lunteren."
  },
  {
    text: "Helder communicatie.. en de problemen goed opgelost",
    image: "huis.jpg",
    name: "Minerva",
    role: "Particulierhuis In Barneveld"
  },
  {
    text: "De opleveringsschoonmaak na onze renovatie was in één woord fantastisch. Geen stress, snelle communicatie en een resultaat dat direct klaar was voor de verhuur.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
    name: "Thomas Bakker",
    role: "Vastgoed Beheer Groep"
  }
];

export const TestimonialsColumn = (props: {
  className?: string;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-8 md:p-10 rounded-2xl border border-border bg-white shadow-premium max-w-sm w-full" key={i}>
                  <div className="text-primary/80 leading-relaxed text-sm md:text-base">"{text}"</div>
                  <div className="flex items-center gap-4 mt-6">
                    <img
                      src={image}
                      alt={name}
                      className="h-12 w-12 rounded-full object-cover shadow-sm border border-border"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-primary tracking-tight leading-5">{name}</div>
                      <div className="text-sm text-primary/60 tracking-tight mt-0.5">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};