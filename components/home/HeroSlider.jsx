"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
    /* 🎯 BALANCED HEIGHT: Height ko normal aur sleek kar diya hai (bohot lambi nahi lagegi) */
    <section className="relative w-full h-[280px] sm:h-[380px] md:h-[440px] lg:h-[480px] xl:h-[500px] bg-[#071233] overflow-hidden select-none">
      
      {/* Slides Container */}
      {heroSlidesData.map((slide, index) => (
        <div
          key={slide.id || index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* 🎯 100% CLEAN IMAGE (Kahin koi text ya dark dabba nahi aayega) */}
          <Link 
            href="/admissions/apply"
            className="relative block w-full h-full cursor-pointer group"
            title="Click to Apply Online"
          >
            <Image
              src={slide.image}
              alt={slide.title || "PIASS College Banner"}
              fill
              priority={index === 0}
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.01]"
            />
          </Link>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/35 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/35 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Live Auto-play Timer Progress Bar (Neechay Bariki Se Chalegi) */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/20 pointer-events-none">
        <div 
          key={currentSlide}
          className="h-full bg-[#F59E0B] transition-all ease-linear"
          style={{
            animation: "progress 4.5s linear infinite"
          }}
        />
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {heroSlidesData.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              i === currentSlide
                ? "w-7 h-2 bg-[#F59E0B]"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}