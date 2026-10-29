"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Award, GraduationCap } from "lucide-react";
import { collegeInfo } from "@/data/affiliationsData";

export default function AboutPage() {
  
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const milestones = [
    {
      year: "2018",
      title: "Foundational Stone Laid",
      desc: "The foundational stone of PIASS College of Nursing was laid on Main Ferozpur Road Kasur to provide recognized medical education to students of Punjab.",
      image: "/images/27.jpg"
    },
    {
      year: "2020",
      title: "Punjab Health Dept & NEBP Registration",
      desc: "Attained official provincial registration with the Health Department Government of Punjab and affiliation with the Nursing Examination Board Punjab (NEBP).",
      image: "/images/18.avif"
    },
    {
      year: "2022",
      title: "PNMC Accreditation for BSN",
      desc: "Secured formal statutory accreditation from the Pakistan Nursing & Midwifery Council (PNMC) Islamabad for 4-Year BS Nursing (Generic) and Post RN programs.",
      image: "/images/1.avif"
    },
    {
      year: "2024",
      title: "University Affiliated Degree Expansion",
      desc: "Expanded into high-demand higher education disciplines (BSCS, BSIT, BBA) in formal academic affiliation with the University of Education Lahore and IUB.",
      image: "/images/19.avif"
    },
    {
      year: "2026",
      title: "Session 2026 Admissions",
      desc: "Currently accepting admissions across 15+ degree and diploma programs with 100% clinical bedside rotations in affiliated teaching hospitals.",
      image: "/images/27.jpg"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#222222] font-sans antialiased">
      
      {/* ========================================================
          1. TOP HERO BANNER (Full-width Campus Building + Large "About")
         ======================================================== */}
      <section className="relative w-full">
        {/* Campus Building Hero Photo */}
        <div className="relative w-full h-[280px] sm:h-[420px] lg:h-[500px] overflow-hidden bg-gray-100">
          <Image
            src="/images/27.jpg"
            alt="PIASS College Kasur Campus"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Large Serif "About" Title on top of the image */}
          <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 max-w-6xl mx-auto px-6 sm:px-8">
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white font-normal tracking-tight drop-shadow-md">
              About
            </h1>
          </div>
        </div>

        {/* Intro Paragraph Below Hero Photo */}
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 sm:py-14">
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed max-w-5xl font-normal">
            At PIASS College of Nursing & Sciences Kasur, we prioritise your academic journey, offering certified healthcare and degree education, supportive environment, and opportunities to grow academically and personally. Your success drives our commitment to clinical excellence, medical ethics, and community impact.
          </p>
        </div>
      </section>

      {/* ========================================================
          2. OUR VISION (2-Column: Left Image, Right Vision + Quote Mark)
         ======================================================== */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-8 sm:py-14 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Campus Building Image */}
          <div className="lg:col-span-6 relative h-[280px] sm:h-[380px] w-full overflow-hidden rounded-sm shadow-sm">
            <Image
              src="/images/19.avif"
              alt="PIASS Academic Vision"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column: Large Quote Mark + "Our Vision" */}
          <div className="lg:col-span-6 space-y-4">
            <div className="text-7xl sm:text-8xl font-serif text-[#d6d6d6] leading-none select-none -mb-6">
              “
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1e1e1e] font-normal tracking-tight">
              Our Vision
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal pt-2">
              To become a premier healthcare and degree-awarding collegiate institution in Punjab, characterised by its clinical excellence, ethical hospital practice, and contribution to society through 21<sup>ST</sup> CENTURY SKILL-CENTRED Healthcare, Nursing, Computing Education, and Research.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================
          3. OUR MISSION (2-Column: Left Quote + 5 Cards, Right Tall Image)
         ======================================================== */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-10 sm:py-16 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Large Quote Mark + Mission + 5 Stacked Boxed Cards */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-7xl sm:text-8xl font-serif text-[#d6d6d6] leading-none select-none -mb-6">
              “
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1e1e1e] font-normal tracking-tight">
              Our Mission
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pb-2">
              PIASS College of Nursing & Sciences Kasur strives to achieve the following mission goals in pursuance of our institutional vision:
            </p>

            {/* 5 Distinct Stacked Cards (Matching UOL Exact Boxes) */}
            <div className="space-y-3.5">
              <div className="border border-gray-200 bg-white p-4 sm:p-5 rounded-md text-xs sm:text-sm text-gray-800 shadow-sm leading-relaxed">
                Pursue and deliver academic and clinical excellence in every aspect of our healthcare, nursing, and degree endeavours.
              </div>

              <div className="border border-gray-200 bg-white p-4 sm:p-5 rounded-md text-xs sm:text-sm text-gray-800 shadow-sm leading-relaxed">
                Produce certified nursing officers, technologists, and graduates to become future-ready leaders through hands-on bedside hospital training and lifelong learning experience.
              </div>

              <div className="border border-gray-200 bg-white p-4 sm:p-5 rounded-md text-xs sm:text-sm text-gray-800 shadow-sm leading-relaxed">
                Reinforce the culture of compassionate patient care, medical ethics, practical computing research, and healthcare innovation.
              </div>

              <div className="border border-gray-200 bg-white p-4 sm:p-5 rounded-md text-xs sm:text-sm text-gray-800 shadow-sm leading-relaxed">
                Improve the sustainability of the healthcare ecosystem, ensuring social responsibility and healthcare accessibility for every stratum of society.
              </div>

              <div className="border border-gray-200 bg-white p-4 sm:p-5 rounded-md text-xs sm:text-sm text-gray-800 shadow-sm leading-relaxed">
                Promote global flow of nursing skills, professional licensing opportunities, and technological expertise through accredited education.
              </div>
            </div>
          </div>

          {/* Right Column: Tall Campus Architecture Photo */}
          <div className="lg:col-span-5 relative h-[440px] sm:h-[580px] w-full overflow-hidden rounded-sm shadow-sm mt-4 lg:mt-12">
            <Image
              src="/images/24.avif"
              alt="PIASS Medical Campus"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ========================================================
          4. LEADERSHIP 1: CHAIRMAN'S PHILOSOPHY (Black Shalwar Kameez: /images/ceo.jpg)
         ======================================================== */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-20 border-t border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Quote Mark + Text + Name + Designation */}
          <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
            <div className="text-7xl sm:text-8xl font-serif text-[#d6d6d6] leading-none select-none -mb-6">
              “
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#1e1e1e] font-normal tracking-tight">
              Chairman’s Philosophy
            </h2>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal italic">
              “As we shape the future, we aim to provide our students with the tools to excel and make a meaningful impact. At PIASS College of Nursing & Sciences, education is the foundation for sustainable healthcare development, and it is our mission to equip every student with the knowledge and clinical skills to lead with integrity, compassion, and innovation.”
            </p>

            <div className="pt-2">
              <div className="font-serif text-lg sm:text-xl text-[#1e1e1e] font-semibold">
                M.YAQOOB KHAN
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                Chairman, PIASS College of nursing  Kasur
              </div>
            </div>
          </div>

          {/* Right Column: 🎯 REAL PORTRAIT OF CHAIRMAN (Black Shalwar Kameez) */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] w-full bg-gray-50 overflow-hidden rounded-sm shadow-sm order-1 lg:order-2">
            <Image
              src="/images/ceo.jpeg"
              alt="Chairman, Board of Governors"
              fill
              className="object-cover object-top"
            />
          </div>

        </div>
      </section>

      {/* ========================================================
          DARK CALLOUT BANNER 1 (Full-Width Charcoal Banner)
         ======================================================== */}
      <section className="bg-[#1c1c1c] text-white py-12 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-light leading-relaxed">
            PIASS College Kasur is committed to making a positive impact through certified healthcare training, supporting community hospital initiatives, and driving sustainable professional progress.
          </p>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-white hover:text-amber-400 font-medium transition-colors group"
            >
              <span>Be part of our community</span>
              <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center group-hover:border-amber-400 transition-colors">
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. LEADERSHIP 2: DIRECTOR'S MISSION (Blue Suit: /images/director.jpg)
         ======================================================== */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column:  REAL PORTRAIT OF DIRECTOR (Blue Suit) */}
          <div className="lg:col-span-5 relative h-[380px] sm:h-[460px] w-full bg-gray-50 overflow-hidden rounded-sm shadow-sm">
            <Image
              src="/images/director.jpeg"
              alt="Managing Director, PIASS College"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Right Column: Quote Mark + Title + Quote + Designation (Alternating Layout!) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-7xl sm:text-8xl font-serif text-[#d6d6d6] leading-none select-none -mb-6">
              “
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#1e1e1e] font-normal tracking-tight">
              Director’s Mission
            </h2>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal italic">
              “At PIASS College of Nursing Kasur, our mission is to create an inclusive, dynamic clinical learning environment where students are empowered to thrive academically and professionally. We are committed to delivering innovative healthcare and computing education that prepares them for the challenges of the future, ensuring they acquire both technical bedside expertise and the critical decision-making skills needed to make a meaningful impact in their respective fields.”
            </p>

            <div className="pt-2">
              <div className="font-serif text-lg sm:text-xl text-[#1e1e1e] font-semibold">
                M.HASEEB 
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                Managing Director & Academic Operations Head • PIASS Kasur
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          DARK ACCREDITATIONS & RANKINGS BANNER (Matching UOL Video 00:14)
         ======================================================== */}
      <section className="bg-[#1c1c1c] text-white py-14 sm:py-18 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* 3 White Ranking Cards (Exact UOL Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {/* Card 1 */}
            <div className="bg-white text-[#1c1c1c] p-6 rounded-sm shadow-sm flex flex-col justify-between h-36">
              <div className="flex items-center gap-2 text-emerald-800 font-black text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                <span>PNMC Islamabad</span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#1c1c1c]">100% Accredited</div>
                <div className="text-[11px] text-gray-500 mt-0.5">Pakistan Nursing & Midwifery Council</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white text-[#1c1c1c] p-6 rounded-sm shadow-sm flex flex-col justify-between h-36">
              <div className="flex items-center gap-2 text-[#0B1B4F] font-black text-sm">
                <Award className="w-5 h-5 text-amber-500" />
                <span>NEBP Punjab</span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#1c1c1c]">Registered Board</div>
                <div className="text-[11px] text-gray-500 mt-0.5">Nursing Examination Board Punjab</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white text-[#1c1c1c] p-6 rounded-sm shadow-sm flex flex-col justify-between h-36">
              <div className="flex items-center gap-2 text-gray-900 font-black text-sm">
                <GraduationCap className="w-5 h-5 text-blue-700" />
                <span>HEC Universities</span>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-[#1c1c1c]">Degree Affiliated</div>
                <div className="text-[11px] text-gray-500 mt-0.5">University of Education & IUB</div>
              </div>
            </div>

          </div>

          {/* Link Below Cards */}
          <div className="text-center pt-2">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-white hover:text-amber-400 font-medium transition-colors group"
            >
              <span>See all our accreditations</span>
              <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center group-hover:border-amber-400 transition-colors">
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          6. STRATEGY SECTION (2-Column: Left Text, Right Lab Photo)
         ======================================================== */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-20 border-t border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: "PIASS's Strategy" */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1e1e1e] font-normal tracking-tight">
              PIASS’s Strategy
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal pt-2">
              PIASS College of Nursing & Sciences Kasur focuses on innovative clinical education, hospital bedside excellence, modern programming laboratories, and disciplined practices to prepare students for national and global healthcare and technological challenges.
            </p>
          </div>

          {/* Right Column: Large Photo */}
          <div className="lg:col-span-6 relative h-[280px] sm:h-[380px] w-full overflow-hidden rounded-sm shadow-sm">
            <Image
              src="/images/18.avif"
              alt="PIASS Clinical Strategy"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ========================================================
          DARK CALLOUT BANNER 2 (Contact Assistance)
         ======================================================== */}
      <section className="bg-[#1c1c1c] text-white py-12 sm:py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-light leading-relaxed">
            Contact us for personalised assistance and expert support. Our academic counseling team is ready to help with any enquiries you may have.
          </p>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-white hover:text-amber-400 font-medium transition-colors group"
            >
              <span>Visit our campus</span>
              <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center group-hover:border-amber-400 transition-colors">
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. PIASS THROUGH THE YEARS (Timeline Carousel - Video 00:22)
         ======================================================== */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
        
        <h2 className="font-serif text-3xl sm:text-5xl text-[#1e1e1e] font-normal tracking-tight mb-8">
          PIASS through the Years
        </h2>

        {/* Top Split: Left Active Text, Right Active Milestone Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="font-serif text-3xl sm:text-4xl text-[#0B1B4F] font-normal">
              {milestones[activeYearIndex].year} — {milestones[activeYearIndex].title}
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              {milestones[activeYearIndex].desc}
            </p>
          </div>

          <div className="lg:col-span-6 relative h-[260px] sm:h-[340px] w-full overflow-hidden rounded-sm shadow-sm bg-gray-100">
            <Image
              src={milestones[activeYearIndex].image}
              alt={milestones[activeYearIndex].title}
              fill
              className="object-cover"
            />
          </div>

        </div>

        {/* Bottom Horizontal Timeline with clickable points and next/prev arrows */}
        <div className="relative border-t border-gray-300 pt-6 flex items-center justify-between">
          
          <div className="flex items-center gap-8 sm:gap-14 overflow-x-auto py-2">
            {milestones.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveYearIndex(idx)}
                className={`flex flex-col items-center gap-2 transition-all cursor-pointer group flex-shrink-0`}
              >
                <span className={`text-xs sm:text-sm font-semibold ${
                  activeYearIndex === idx ? "text-slate-950 font-bold" : "text-gray-400 group-hover:text-gray-700"
                }`}>
                  {item.year}
                </span>
                
                {/* Timeline circle node */}
                <span className={`w-3 h-3 rounded-full border-2 transition-all ${
                  activeYearIndex === idx 
                    ? "bg-slate-900 border-slate-900 scale-125" 
                    : "bg-white border-gray-300 group-hover:border-gray-500"
                }`} />
              </button>
            ))}
          </div>

          {/* Timeline Arrows */}
          <div className="flex items-center gap-2 pl-4 flex-shrink-0">
            <button
              onClick={() => setActiveYearIndex(prev => prev > 0 ? prev - 1 : milestones.length - 1)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous milestone"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={() => setActiveYearIndex(prev => prev < milestones.length - 1 ? prev + 1 : 0)}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next milestone"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>

        </div>

      </section>

    </div>
  );
}