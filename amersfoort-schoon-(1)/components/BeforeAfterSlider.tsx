"use client";

import { useState, useRef, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";
import Image from "next/image";

export const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", () => setIsDragging(false));
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", () => setIsDragging(false));

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", () => setIsDragging(false));
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", () => setIsDragging(false));
    };
  }, [isDragging]);

  return (
    <section id="resultaten" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Zien is geloven. <span className="text-primary/60">Verschuif de slider.</span>
          </h2>
          <p className="mt-4 text-lg text-primary/70">
            Van onoverzichtelijke ruimtes naar vlekkeloze opleveringen in recordtijd.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative mx-auto h-[400px] w-full max-w-5xl overflow-hidden rounded-2xl shadow-premium md:h-[600px] cursor-ew-resize select-none"
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* AFTER Image (Background) */}
          <div className="absolute inset-0 h-full w-full">
            <Image 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
              alt="Schone kamer na schoonmaak"
              fill
              className="object-cover"
              draggable={false}
              priority
            />
            *<div className="absolute bottom-6 right-6 rounded-md bg-white/90 px-4 py-2 text-sm font-bold text-primary backdrop-blur-sm shadow-sm">
              Na
            </div>*
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div 
            className="absolute inset-0 h-full w-full"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <Image 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop" 
              alt="Rommelige kamer voor schoonmaak"
              fill
              className="object-cover grayscale-[30%]"
              draggable={false}
            />
            <div className="absolute bottom-6 left-6 rounded-md bg-primary/90 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm shadow-sm">
              Voor
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute bottom-0 top-0 z-20 w-1 cursor-ew-resize bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-premium">
              <MoveHorizontal className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};