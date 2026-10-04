import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Award, CheckCircle2, ArrowRight } from "lucide-react";

export default function ProgramCard({ program }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
      
      {/* 1. Card Top Image with Badges */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Category Pill Tag */}
        <span
          className={`absolute top-3 left-3 text-white text-[11px] font-extrabold px-3 py-1 rounded-lg shadow-md ${
            program.badgeColor || "bg-[#0B1B4F]"
          }`}
        >
          {program.category}
        </span>

        {/* Duration Chip */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-semibold bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
          <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>{program.duration}</span>
        </div>
      </div>

      {/* 2. Card Content & Academic Specs */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
        <div>
          
          {/* Accreditation Line */}
          <div className="text-[11px] font-bold text-[#0D7A68] uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <Award className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="line-clamp-1">{program.accreditation}</span>
          </div>

          {/* Program Title */}
          <h3 className="text-lg sm:text-xl font-black text-[#0B1B4F] tracking-tight mb-2 group-hover:text-[#0D7A68] transition-colors">
            {program.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">
            {program.description}
          </p>

          {/* Eligibility Box */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3 mb-4">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider block">
              Eligibility Requirement:
            </span>
            <span className="text-xs font-semibold text-slate-800 mt-0.5 block leading-snug">
              {program.eligibility}
            </span>
          </div>

          {/* Highlights */}
          <ul className="space-y-1.5 mb-5 text-xs text-slate-700">
            {program.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A68] flex-shrink-0 mt-0.5" />
                <span className="leading-tight">{h}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* 3. Har Card ka Apna Dedicated URL */}
        <div className="pt-3 border-t border-slate-100 mt-auto">
          <Link
            href={`/programs/${program.id}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1B4F] hover:bg-[#0D7A68] text-white font-bold text-xs sm:text-sm py-2.5 rounded-xl transition-all duration-200 shadow-sm active:scale-98"
          >
            <span>View Details & Curriculum</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
          </Link>
        </div>

      </div>

    </div>
  );
}