"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Quote, Star, ChevronLeft, ChevronRight, GraduationCap, CheckCircle2 } from "lucide-react";

export default function StudentVoices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Student Testimonials (Director sahab ki demand ke mutabiq badi photos ke sath)
  const testimonials = [
    {
      id: 1,
      name: "Zubia Ahmad",
      program: "BS Nursing (Generic) • 5th Semester",
      quote:
        "PIASS College of Nursing has provided me with genuine clinical bedside exposure at affiliated teaching hospitals. Our faculty doesn't just teach theory from books—they guide us personally through patient care, emergency protocols, and ward management. I feel confident and fully prepared for my hospital licensing exams.",
      rating: 5,
      badge: "Clinical Nursing Excellence",
      // Badi standing/portrait photo
      image: "/images/17.avif",
    },
    {
      id: 2,
      name: "Muhammad Moeez",
      program: "BS Computer Science (BSCS) • 4th Semester",
      quote:
        "Choosing PIASS Kasur for BSCS was the best decision. The high-spec IT lab and individual attention from teachers give us an environment equal to any top Lahore university. We work directly on real software projects, coding algorithms, and web development without getting lost in overcrowded classrooms.",
      rating: 5,
      badge: "Computing & Software Track",
      // Badi standing/portrait photo
      image: "/images/3.avif",
    },
    {
      id: 3,
      name: "Ayesha Siddiqua",
      program: "Post RN BSN • Final Year",
      quote:
        "As a working diploma nurse upgrading to a degree, the faculty here provided incredible schedule support and advanced clinical counseling. The individual mentorship and weekly viva revisions helped me achieve top merit grades. The Kasur campus is a blessing for female students.",
      rating: 5,
      badge: "Post RN Healthcare Officer",
      // Badi standing/portrait photo
      image: "/images/22.avif",
    },
  ];

  // Auto rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200">
            Student Experiences
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B4F] tracking-tight mt-3">
            Voices of Our Students
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2">
            Real feedback from students pursuing certified healthcare degrees and university programs at PIASS Kasur.
          </p>
        </div>

        {/* 🎯 MAIN SPOTLIGHT CARD (Badi Photo + Bada Text Layout) */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* LEFT COLUMN: Student Ki Badi Standing / Portrait Photo */}
            <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[460px] bg-slate-100 overflow-hidden">
              <Image
                src={current.image}
                alt={current.name}
                fill
                priority
                className="object-cover object-top transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/90 via-transparent to-transparent lg:hidden" />
              
              {/* Badge on Photo */}
              <div className="absolute top-4 left-4 bg-[#0B1B4F]/95 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/20 shadow-md">
                {current.badge}
              </div>

              {/* Mobile name tag overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <div className="text-lg font-black">{current.name}</div>
                <div className="text-xs text-amber-300 font-semibold">{current.program}</div>
              </div>
            </div>

            {/* RIGHT COLUMN: Quotation, Review Text, Degree, Stars */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                {/* Header: Quote Icon & Stars */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#0D7A68] flex items-center justify-center">
                    <Quote className="w-6 h-6 fill-current" />
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Statement */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic font-normal pt-2">
                  "{current.quote}"
                </p>
              </div>

              {/* Student Bio & Navigation Footer */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* Desktop Name & Semester */}
                <div className="hidden lg:block">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-black text-[#0B1B4F] leading-none">
                      {current.name}
                    </h4>
                    <CheckCircle2 className="w-4 h-4 text-[#0D7A68]" />
                  </div>
                  <p className="text-xs font-semibold text-slate-500 mt-1 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#F59E0B]" />
                    <span>{current.program}</span>
                  </p>
                </div>

                {/* Dots & Carousel Arrow Controls */}
                <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                  {/* Dot Indicators */}
                  <div className="flex items-center gap-1.5">
                    {testimonials.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setCurrentIndex(dotIdx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          currentIndex === dotIdx ? "w-6 bg-[#0D7A68]" : "w-2 bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Prev / Next Buttons */}
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={prevReview}
                      className="w-9 h-9 rounded-full border border-slate-300 hover:border-[#0B1B4F] hover:bg-[#0B1B4F] hover:text-white flex items-center justify-center transition-all cursor-pointer"
                      aria-label="Previous review"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextReview}
                      className="w-9 h-9 rounded-full border border-slate-300 hover:border-[#0B1B4F] hover:bg-[#0B1B4F] hover:text-white flex items-center justify-center transition-all cursor-pointer"
                      aria-label="Next review"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}