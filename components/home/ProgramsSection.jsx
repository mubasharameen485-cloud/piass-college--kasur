"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProgramCard from "@/components/ui/ProgramCard";
import { programsData } from "@/data/programsData";

const categories = [
  { key: "all", label: "All Disciplines (13)" },
  { key: "Nursing Degree", label: "Nursing Degrees" },
  { key: "Diploma Programs", label: "Health Diplomas" },
  { key: "BS Programs", label: "BS Programs (4 Yrs)" },
  { key: "ADP Programs", label: "ADP Fast-Track (2 Yrs)" },
];

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredPrograms =
    activeTab === "all"
      ? programsData
      : programsData.filter((item) => item.category === activeTab);

  return (
    <section id="programs" className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Component */}
        <SectionHeading
          badge="Admissions Open 2026"
          title="Academic Programs &"
          highlight="Degree Disciplines"
          subtitle="Accredited degree and diploma tracks offering complete clinical hospital training, advanced computing labs, and verified university syllabus."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === cat.key
                  ? "bg-[#0B1B4F] text-white shadow-md shadow-blue-950/20"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid using ProgramCard Component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

      </div>
    </section>
  );
}