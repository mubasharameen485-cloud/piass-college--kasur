import React from "react";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";
import { collegeInfo } from "@/data/affiliationsData";

export default function TopBar() {
  return (
    <div className="bg-[#0B1B4F] text-white text-xs border-b border-blue-950/40 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-2">
          
          {/* Left: Admissions Open Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-[#F59E0B] text-slate-950 font-bold px-2.5 py-0.5 rounded-full text-[11px] tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3 h-3 fill-current" />
              Admissions Open {collegeInfo.admissionsYear}
            </span>
            <span className="hidden md:inline-block text-slate-300">
              Approved by PNMC & Govt. of Punjab
            </span>
          </div>

          {/* Right: Phone, Email & Location */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-200">
            <a
              href={`tel:${collegeInfo.phoneNumbers[0]}`}
              className="flex items-center gap-1.5 hover:text-[#F59E0B] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="font-semibold tracking-wider">{collegeInfo.phoneNumbers[0]}</span>
            </a>

            <span className="hidden lg:inline text-slate-500">|</span>

            <a
              href={`mailto:${collegeInfo.email}`}
              className="hidden md:flex items-center gap-1.5 hover:text-[#F59E0B] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>{collegeInfo.email}</span>
            </a>

            <span className="hidden lg:inline text-slate-500">|</span>

            <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#0D7A68]" />
              <span>Ferozpur Road, Kasur</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}