import React from "react";
import ProgramsSection from "@/components/home/ProgramsSection";

export const metadata = {
  title: "Academic Programs | PIASS College Kasur",
  description: "Browse all 13+ degree and diploma programs offered at PIASS College Kasur including BS Nursing, Post RN, BSCS, BBA, and ADP.",
};

export default function ProgramsPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* Banner */}
      <section className="bg-[#071233] text-white py-16 lg:py-20 border-b-4 border-[#0D7A68]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#F59E0B] bg-blue-950 px-3.5 py-1.5 rounded-full border border-blue-900">
            Admissions Directory 2026
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mt-4">
            All Academic Programs & Disciplines
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-3">
            Explore 13+ recognized programs spanning Nursing, Allied Health Diplomas, Computing, Business, and Associate Degrees.
          </p>
        </div>
      </section>

      {/* Interactive Filterable Programs Grid */}
      <ProgramsSection />

    </div>
  );
}