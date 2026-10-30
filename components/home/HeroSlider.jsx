"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlidesData } from "@/data/programsData";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play timer (Har 4.5 second baad next slide)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlidesData.length);
    }, 4500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlidesData.length - 1 : prev - 1));
  };

  return (
    /* =========================================================================
       🎯 1. BALANCED SLIDER HEIGHT (Natural, Edge-to-Edge & No Distortion):
       
       - Height: "h-[280px] sm:h-[380px] md:h-[480px] lg:h-[580px] xl:h-[620px]"
         (Is height par image stretch nahi hoti, aur screen par left-to-right poori aati hai)
         
       - Agar aapko thori aur barhani ho:  "lg:h-[620px]"
       - Agar aapko thori kam karni ho:     "lg:h-[550px]"
       ========================================================================= */
    <section className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] lg:h-[580px] xl:h-[620px] bg-slate-900 border-b border-slate-200 overflow-hidden select-none">
      
      {/* Slides Container */}
      {heroSlidesData.map((slide, index) => (
        <div
          key={slide.id || index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* 🎯 Full Width Natural Container */}
          <div className="relative w-full h-full">
            {/* 🎯 object-cover: No distortion (chehre natural rahenge), aur width 100% screen cover karegi */}
            <Image
              src={slide.image}
              alt={slide.title || "PIASS College Admissions Open"}
              fill
              priority={index === 0}
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
      ))}

      {/* Navigation Arrows: Glassmorphic Sleek Buttons */}
      <button
        onClick={prevSlide}
        type="button"
        aria-label="Previous Slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-slate-800 border border-slate-200/80 shadow-lg flex items-center justify-center transition-all cursor-pointer active:scale-95"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-slate-700" />
      </button>

      <button
        onClick={nextSlide}
        type="button"
        aria-label="Next Slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-slate-800 border border-slate-200/80 shadow-lg flex items-center justify-center transition-all cursor-pointer active:scale-95"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-slate-700" />
      </button>

      {/* Live Auto-play Timer Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/30 pointer-events-none">
        <div 
          key={currentSlide}
          className="h-full bg-[#0D7A68] transition-all duration-[4500ms] ease-linear w-full"
        />
      </div>

      {/* Dots Indicator: Neat & Compact at Bottom */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
        {heroSlidesData.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              i === currentSlide
                ? "w-6 sm:w-7 h-1.5 bg-[#0D7A68]"
                : "w-1.5 h-1.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </section>
  );
}