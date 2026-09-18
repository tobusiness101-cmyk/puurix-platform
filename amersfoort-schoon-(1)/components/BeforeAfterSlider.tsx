"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { MoveHorizontal } from "lucide-react";
import Image from "next/image";

export const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] =
    useState(50);

  const [isDragging, setIsDragging] =
    useState(false);

  const containerRef =
    useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) {
        return;
      }

      const rect =
        containerRef.current.getBoundingClientRect();

      const x = Math.max(
        0,
        Math.min(
          clientX - rect.left,
          rect.width
        )
      );

      const percent =
        (x / rect.width) * 100;

      setSliderPosition(
        Math.max(
          0,
          Math.min(percent, 100)
        )
      );
    },
    []
  );

  const handlePointerMove = useCallback(
    (event: PointerEvent) => {
      if (!isDragging) {
        return;
      }

      handleMove(event.clientX);
    },
    [isDragging, handleMove]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (!isDragging) {
      return;
    }

    window.addEventListener(
      "pointermove",
      handlePointerMove
    );

    window.addEventListener(
      "pointerup",
      handlePointerUp
    );

    window.addEventListener(
      "pointercancel",
      handlePointerUp
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp
      );

      window.removeEventListener(
        "pointercancel",
        handlePointerUp
      );
    };
  }, [
    isDragging,
    handlePointerMove,
    handlePointerUp,
  ]);

  const startDragging = (
    event: React.PointerEvent<HTMLDivElement>
  ) => {
    event.currentTarget.setPointerCapture(
      event.pointerId
    );

    setIsDragging(true);
    handleMove(event.clientX);
  };

  return (
    <section
      id="resultaten"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Zien is geloven.{" "}
            <span className="text-primary/60">
              Verschuif de slider.
            </span>
          </h2>

          <p className="mt-4 text-lg text-primary/70">
            Van onoverzichtelijke ruimtes naar
            vlekkeloze opleveringen in recordtijd.
          </p>
        </div>

        <div
          ref={containerRef}
          onPointerDown={startDragging}
          className="relative mx-auto h-[400px] w-full max-w-5xl overflow-hidden rounded-2xl shadow-premium cursor-ew-resize select-none touch-none"
        >
          {/* AFTER */}
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
              alt="Schone kamer na schoonmaak"
              fill
              className="object-cover"
              draggable={false}
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>

          {/* BEFORE */}
          <div
            className="absolute inset-0 h-full w-full"
            style={{
              clipPath: `inset(0 ${
                100 - sliderPosition
              }% 0 0)`,
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
              alt="Rommelige kamer voor schoonmaak"
              fill
              className="object-cover grayscale-[30%]"
              draggable={false}
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>

          {/* HANDLE */}
          <div
            className="absolute bottom-0 top-0 z-20 w-1 cursor-ew-resize bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
            style={{
              left: `${sliderPosition}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-premium">
              <MoveHorizontal className="h-6 w-6 text-primary" />
            </div>
          </div>

          {/* LABELS */}
          <div className="absolute left-5 top-5 z-30 rounded-full bg-black/60 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm pointer-events-none">
            Voor
          </div>

          <div className="absolute right-5 top-5 z-30 rounded-full bg-black/60 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm pointer-events-none">
            Na
          </div>
        </div>
      </div>
    </section>
  );
};
