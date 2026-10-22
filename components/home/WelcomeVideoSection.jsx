"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Play, ShieldCheck } from "lucide-react";

export default function WelcomeVideoSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ========================================================
              LEFT SIDE: VIDEO PLAYER CONTAINER
             ======================================================== */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Frame */}
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                
                {/* HTML5 Video Player */}
                <video
                  src="/videos/welcome.mp4"
                  //poster="/images/27.jpeg"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>

                {/* Subtle Floating Corner Badge */}
                <div className="absolute top-4 left-4 pointer-events-none bg-[#0B1B4F]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                  <Play className="w-3 h-3 text-[#F59E0B] fill-current" />
                  <span>Campus Tour & Introduction</span>
                </div>
              </div>

              {/* Bottom Decorative Experience Tag */}
              <div className="absolute -bottom-4 -right-4 bg-teal-50 border border-teal-200 text-[#0D7A68] p-3 rounded-2xl shadow-lg hidden sm:flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                <span className="text-xs font-bold leading-tight">
                  100% Certified Healthcare Training
                </span>
              </div>

            </div>
          </div>

          {/* ========================================================
              RIGHT SIDE: TITLE, PARAGRAPH & APPLY NOW BUTTON
             ======================================================== */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top Sub-Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0D7A68]/10 text-[#0D7A68] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Campus Introduction</span>
            </div>

            {/* Main Title Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B4F] tracking-tight leading-tight">
              Welcome to <span className="text-[#0D7A68]">PIASS College</span> of Nursing
            </h2>

            {/* Detailed Description Paragraph */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              PIASS College of Nursing & Sciences Kasur stands as a premier seat of healthcare and higher degree education on Main Ferozpur Road. Officially accredited by the Pakistan Nursing & Midwifery Council (PNMC) and the Nursing Examination Board Punjab (NEBP), our institution is dedicated to transforming aspiring students into compassionate, clinically competent medical professionals. 
            </p>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
              With dedicated bedside hospital rotations in affiliated teaching hospitals, state-of-the-art anatomy and clinical simulation laboratories, and disciplined classroom mentoring, we ensure our graduates are thoroughly prepared to excel in public health institutions, armed forces hospitals, and global healthcare careers.
            </p>

            {/* 3 Quick Verified Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#0D7A68] flex-shrink-0" />
                <span>PNMC & NEBP Approved Programs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#0D7A68] flex-shrink-0" />
                <span>Teaching Hospital Rotations</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#0D7A68] flex-shrink-0" />
                <span>Modern Practical Science Labs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-[#0D7A68] flex-shrink-0" />
                <span>Merit-Based Affordable Fee Plan</span>
              </div>
            </div>

            {/* Apply Now Action Button (Links to /contact) */}
            <div className="pt-3 flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 bg-[#0B1B4F] hover:bg-[#0D7A68] text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95"
              >
                <span>Apply Now for Admission</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </Link>

              <span className="text-xs font-semibold text-slate-500 hidden sm:inline">
                Session 2026 Admissions Open
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}