import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { affiliationsData } from "../../data/affiliationsData";

export default function AffiliationsStrip() {
  return (
    <section id="affiliations" className="bg-slate-50 border-y border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-6 mb-6 border-b border-slate-200 gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0D7A68]/10 text-[#0D7A68] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#0B1B4F]">
                Recognized & Approved Affiliations
              </h2>
              <p className="text-xs text-slate-500">
                Degrees & Diplomas accredited by national and provincial regulatory councils
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1 bg-white border border-slate-200 rounded-full text-slate-600 shadow-sm">
            Government Certified Campus
          </span>
        </div>

        {/* 5 Affiliations Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {affiliationsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center text-center group"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-3 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm text-[#0B1B4F]">
                {item.name}
              </h3>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5 line-clamp-1">
                {item.role}
              </p>
              <span className="mt-2 text-[10px] font-bold text-[#0D7A68] bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                Verified
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}