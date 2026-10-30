import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Award, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function ProgramCard({ program }) {
  // 1. Safe Fallbacks (Taake kisi bhi field ki kami se page crash na ho)
  const programSlug = program.slug || program.id;
  const accreditationText = program.accreditation || program.recognizedBy || "PNMC & University Affiliated";
  const cardImage = program.image || "/images/1.avif";
  
  // Safe Highlights (Agar highlights na hon to subjects ya default points uthaye ga)
  const displayHighlights = program.highlights && program.highlights.length > 0
    ? program.highlights.slice(0, 3)
    : (program.subjects && program.subjects.length > 0 
        ? program.subjects.slice(0, 3).map(s => `Core Curriculum: ${s}`)
        : [
            "Clinical hospital training & bedside rotations",
            "Modern laboratory & practical skills exposure",
            "Recognized certification for public & private employment"
          ]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
      
      {/* 1. Card Top Image with Badges */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
        <Image
          src={cardImage}
          alt={program.title || "Academic Program"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        
        {/* Category Pill Tag (Unified Brand Palette) */}
        <span className="absolute top-3 left-3 text-white text-[11px] font-black px-3 py-1 rounded-lg shadow-md bg-[#0D7A68] border border-white/20">
          {program.category || "Degree Program"}
        </span>

        {/* Seats or Session Tag */}
        {program.seats && (
          <span className="absolute top-3 right-3 bg-[#F59E0B] text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded shadow-md">
            {program.seats}
          </span>
        )}

        {/* Duration Chip */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-bold bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
          <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>{program.duration}</span>
        </div>
      </div>

      {/* 2. Card Content & Academic Specs */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
        <div>
          
          {/* Accreditation Line (Brand Green Theme) */}
          <div className="text-[11px] font-bold text-[#0D7A68] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="line-clamp-1">{accreditationText}</span>
          </div>

          {/* Program Title */}
          <h3 className="text-lg sm:text-xl font-black text-[#0B1B4F] tracking-tight mb-2 group-hover:text-[#0D7A68] transition-colors leading-snug">
            {program.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
            {program.description}
          </p>

          {/* Eligibility Requirement Box */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3 mb-4">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
              Eligibility Criteria:
            </span>
            <span className="text-xs font-semibold text-slate-800 mt-0.5 block leading-snug">
              {program.eligibility}
            </span>
          </div>

          {/* Crash-Proof Practical Highlights */}
          <ul className="space-y-1.5 mb-5 text-xs text-slate-700">
            {displayHighlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A68] flex-shrink-0 mt-0.5" />
                <span className="leading-tight">{highlight}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* 3. Dual Action Bar: Details + Direct Quick Apply */}
        <div className="pt-3.5 border-t border-slate-100 mt-auto flex items-center gap-2">
          
          {/* View Details Button */}
          <Link
            href={`/programs/${programSlug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#0B1B4F] hover:bg-[#0D7A68] text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-all duration-200 shadow-sm active:scale-95 text-center"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
          </Link>

          {/* Direct Apply Button */}
          <Link
            href="/admissions/apply"
            className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs py-2.5 px-4 rounded-xl transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap"
          >
            Apply Now
          </Link>

        </div>

      </div>

    </div>
  );
}