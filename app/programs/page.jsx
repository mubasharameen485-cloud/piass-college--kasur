"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  ChevronRight, 
  Sparkles, 
  PhoneCall, 
  GraduationCap, 
  BookOpen, 
  Stethoscope, 
  ShieldCheck, 
  Layers,
  ArrowRight
} from "lucide-react";
import { programsData } from "@/data/programsData";
import ProgramCard from "@/components/ui/ProgramCard";
import { collegeInfo } from "@/data/affiliationsData";

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // 🎯 IMAGE 1 KE MUTABIQ EXACT 5 CATEGORIES + ALL DISCIPLINES
  const categories = [
    { 
      id: "all", 
      label: `All Disciplines (${programsData.length})`,
      icon: Sparkles 
    },
    { 
      id: "nursing-ahs", 
      label: "Nursing & AHS", 
      icon: Stethoscope 
    },
    { 
      id: "diplomas", 
      label: "Nursing Diplomas", 
      icon: ShieldCheck 
    },
    { 
      id: "bs-programs", 
      label: "BS Programs (4 Yrs)", 
      icon: GraduationCap 
    },
    { 
      id: "adp", 
      label: "ADP Programs (2 Yrs)", 
      icon: BookOpen 
    },
    { 
      id: "post-adp", 
      label: "Post ADP Programs", 
      icon: Layers 
    },
  ];

  // 🎯 100% Robust Filter Logic (Kabhi 0 nahi aayega agar data mojood hai)
  const filteredPrograms = programsData.filter((program) => {
    // 1. Search Query Filter
    const query = searchQuery.toLowerCase().trim();
    const titleMatch = program.title?.toLowerCase().includes(query);
    const descMatch = program.description?.toLowerCase().includes(query);
    const eligMatch = program.eligibility?.toLowerCase().includes(query);

    if (query && !titleMatch && !descMatch && !eligMatch) {
      return false;
    }

    // 2. Category Tab Filter
    if (activeCategory === "all") return true;

    const catSlug = (program.categorySlug || "").toLowerCase();
    const catName = (program.category || "").toLowerCase();
    const slug = (program.slug || program.id || "").toLowerCase();

    // 🏥 Column 1: Nursing & AHS (BS Nursing, Post RN, DPT)
    if (activeCategory === "nursing-ahs") {
      return (
        slug === "bs-nursing" ||
        slug === "post-rn" ||
        slug === "dpt" ||
        catSlug === "nursing" ||
        catSlug === "allied-health" ||
        catName.includes("nursing") ||
        catName.includes("allied")
      );
    }

    // 🩺 Column 2: Nursing Diplomas (LHV, CMW, CNA)
    if (activeCategory === "diplomas") {
      return (
        slug === "lhv" ||
        slug === "cmw" ||
        slug === "cna" ||
        catSlug === "diploma" ||
        catSlug === "diplomas" ||
        catName.includes("diploma")
      );
    }

    // 💻 Column 3: BS Programs (4 Yrs) (BSCS, BSIT, BBA, BS English)
    if (activeCategory === "bs-programs") {
      return (
        slug === "bscs" ||
        slug === "bsit" ||
        slug === "bba" ||
        slug === "bs-english" ||
        catSlug === "bs-programs" ||
        catName.includes("bs degree") ||
        catName.includes("bs program")
      );
    }

    // 🎓 Column 4: ADP Programs (2 Yrs)
    if (activeCategory === "adp") {
      const isPostAdp = slug.startsWith("post-adp") || catName.includes("post");
      return (
        !isPostAdp && (
          slug === "adp-cs" ||
          slug === "adp-it" ||
          slug === "adp-bba" ||
          slug === "adp-english" ||
          catSlug === "adp" ||
          catName.includes("adp")
        )
      );
    }

    // 🟣 Column 5: Post ADP Programs (Lateral 5th Sem)
    if (activeCategory === "post-adp") {
      return (
        slug.startsWith("post-adp") ||
        catSlug === "post-adp" ||
        catName.includes("post adp")
      );
    }

    return true;
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#071233] via-[#0B1B4F] to-[#0A2540] text-white py-14 sm:py-20 border-b-4 border-[#0D7A68]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-4">
            <Link href="/" className="hover:text-amber-400">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#F59E0B] font-bold">Academic Programs</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#F59E0B] text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-md">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              Session {collegeInfo.admissionsYear} Admissions Open
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Explore Our <span className="text-[#0D7A68]">Academic Programs</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal">
              Accredited degree and diploma tracks offering complete clinical hospital training, advanced computing labs, and verified university syllabus.
            </p>
          </div>

        </div>
      </section>

      {/* 2. Main Directory Area */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Search Box & Summary Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search program, degree or eligibility..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 outline-none focus:border-[#0D7A68] focus:bg-white transition-all"
              />
            </div>

            {/* Total Results Count */}
            <div className="text-xs font-bold text-slate-500 whitespace-nowrap">
              Showing <span className="text-[#0B1B4F] font-black">{filteredPrograms.length}</span> programs available
            </div>

          </div>

          {/* 🎯 3. EXACT NAVBAR MATCHING FILTER BAR (IMAGE 1 KE MUTABIQ PETTI) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  type="button"
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 whitespace-nowrap cursor-pointer shadow-xs ${
                    isActive
                      ? "bg-[#0B1B4F] text-white shadow-md shadow-blue-950/20"
                      : "bg-white text-slate-700 border border-slate-200/90 hover:border-[#0D7A68] hover:text-[#0D7A68]"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#F59E0B]" : "text-[#0D7A68]"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* 4. Filtered Programs Grid */}
          {filteredPrograms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {filteredPrograms.map((program) => (
                <ProgramCard key={program.slug || program.id} program={program} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1B4F]">No matching programs found</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                We couldn't find any discipline matching your search term. Try resetting your search or select "All Disciplines".
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="inline-flex items-center gap-2 bg-[#0D7A68] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* 5. Bottom Regulatory Affirmation */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="font-semibold text-slate-600">
              Approve by PMNC, NEBP, IUB, UOE & Govt. of Punjab
            </span>
            <Link
              href="/contact"
              className="text-[#0D7A68] font-bold flex items-center gap-1.5 hover:underline"
            >
              <span>Download Complete Prospectus 2026</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}