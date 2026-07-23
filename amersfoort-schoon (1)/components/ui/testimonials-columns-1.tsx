"use client";

import React from "react";
import { motion } from "framer-motion";

// Premium placeholder data tailored to the hospitality/B2B aesthetic
const testimonials = [
  {
    text: "Sinds we Puurix inzetten voor onze short-stay appartementen in Breda, zijn onze 5-sterren reviews qua hygiëne door het dak gegaan. Vlekkeloos en altijd op tijd.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
    name: "Jan-Willem de Vries",
    role: "Eigenaar, Stay & Co."
  },
  {
    text: "Als beheerder van kantoorpanden in Amersfoort is betrouwbaarheid alles. Dit team werkt datagedreven en onzichtbaar. Het visitekaartje van ons pand is altijd perfect.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    name: "Sophie van den Berg",
    role: "Facility Manager, ABC"
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