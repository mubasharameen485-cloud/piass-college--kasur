"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, PhoneCall } from "lucide-react";
import { heroSlidesData } from "@/data/programsData";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 100% GUARANTEED AUTO-PLAY (Har 4 second baad khud agay chalega)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlidesData.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlidesData.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[560px] sm:h-[620px] lg:h-[680px] bg-[#071233] overflow-hidden select-none">
      
      {/* Slides Container */}
      {heroSlidesData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* Background Image with Dark Gradient */}
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
            {/* Dark gradient taake text crystal clear parha jaye */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071233]/95 via-[#071233]/80 to-transparent lg:w-3/4" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071233] via-transparent to-black/30" />
          </div>

          {/* Slide Text Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl text-left">
                
                {/* Admission Tag */}
                <div className="inline-flex items-center gap-2 bg-[#F59E0B] text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 fill-current" />
                  <span>{slide.tag}</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {slide.subtitle}
                </p>

                {/* CTA Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-2 bg-[#0D7A68] hover:bg-teal-600 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200 active:scale-95"
                  >
                    <span>{slide.primaryCta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-white/30 transition-all duration-200 active:scale-95"
                  >
                    <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
                    <span>{slide.secondaryCta}</span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-sm border border-white/20 transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/10 hover:bg-white/30 text-white backdrop-blur-sm border border-white/20 transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Live Auto-play Timer Progress Bar (Visual proof k auto-slider chal raha hai) */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-white/20">
        <div 
          key={currentSlide}
          className="h-full bg-[#F59E0B] transition-all ease-linear"
          style={{
            animation: "progress 4s linear infinite"
          }}
        />
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {heroSlidesData.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === currentSlide
                ? "w-8 h-2.5 bg-[#F59E0B]"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
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