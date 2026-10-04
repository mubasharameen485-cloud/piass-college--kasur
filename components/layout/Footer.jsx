import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink, 
  MessageSquare, 
  GraduationCap 
} from "lucide-react";
import { collegeInfo, affiliationsData } from "@/data/affiliationsData";

export default function Footer() {
  return (
    <footer className="bg-[#071233] text-white border-t-4 border-[#0D7A68]">
      
      {/* 1. Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Col 1: College Identity & WhatsApp Action (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Open Logo & College Name (Boxless natural look) */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <Image
                  src={collegeInfo.mainLogo}
                  alt="PIASS College Logo"
                  width={56}
                  height={56}
                  className="object-contain w-auto h-14 drop-shadow-md transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-none">
                  PIASS <span className="text-[#0D7A68]">COLLEGE</span>
                </span>
                <span className="text-xs font-semibold text-teal-400 tracking-wider uppercase mt-1">
                  of Nursing & Sciences • Kasur
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Premier clinical nursing and higher degree college in Kasur. Delivering PNMC recognized healthcare diplomas and university-affiliated degrees with hands-on hospital ward training.
            </p>

            {/* PNMC Legal Badge */}
            <div className="flex items-center gap-2 text-xs text-amber-400 font-bold bg-blue-950/70 p-3 rounded-xl border border-blue-900/80">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Recognized by PNMC, NEBP & Govt. of Punjab</span>
            </div>

            {/* Direct WhatsApp Chat Action Button */}
            <div className="pt-1">
              <a
                href="https://wa.me/923041448481?text=Hello%20PIASS%20Kasur,%20I%20want%20information%20about%20Admissions%202026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-sm active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Admissions Desk</span>
              </a>
            </div>

          </div>

          {/* Col 2: Institutional Quick Links (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-blue-900/80 pb-2.5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#F59E0B] flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#0D7A68]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F59E0B] flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#0D7A68]" />
                  <span>About & Leadership</span>
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-[#F59E0B] flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#0D7A68]" />
                  <span>All Programs Directory</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F59E0B] flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#0D7A68]" />
                  <span>Admissions 2026 Desk</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F59E0B] flex items-center gap-1.5 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#0D7A68]" />
                  <span>Campus Map & Directions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Degree Pages (Span 3 - Har link 100% working) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-blue-900/80 pb-2.5">
              Degree & Diplomas
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/programs/bs-nursing" className="hover:text-[#F59E0B] flex items-center justify-between transition-colors py-0.5">
                  <span className="hover:underline">• BS Nursing (Generic 4 Yrs)</span>
                  <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded border border-teal-800">PNMC</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/post-rn" className="hover:text-[#F59E0B] flex items-center justify-between transition-colors py-0.5">
                  <span className="hover:underline">• Post RN BSN (2 Yrs)</span>
                  <span className="text-[10px] bg-teal-950 text-teal-300 px-1.5 py-0.5 rounded border border-teal-800">2 Yrs</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/lhv" className="hover:text-[#F59E0B] flex items-center justify-between transition-colors py-0.5">
                  <span className="hover:underline">• LHV (Lady Health Visitor)</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-800">NEBP</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/cmw" className="hover:text-[#F59E0B] flex items-center justify-between transition-colors py-0.5">
                  <span className="hover:underline">• CMW (Community Midwife)</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-800">Diploma</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/cna" className="hover:text-[#F59E0B] flex items-center justify-between transition-colors py-0.5">
                  <span className="hover:underline">• CNA (Nursing Assistant)</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-800">Diploma</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/bscs" className="hover:text-[#F59E0B] flex items-center justify-between transition-colors py-0.5">
                  <span className="hover:underline">• BS Computer Science (BSCS)</span>
                  <span className="text-[10px] bg-blue-950 text-blue-300 px-1.5 py-0.5 rounded border border-blue-800">UE/IUB</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/bsit" className="hover:text-[#F59E0B] flex items-center justify-between transition-colors py-0.5">
                  <span className="hover:underline">• BS Information Tech (BSIT)</span>
                  <span className="text-[10px] bg-blue-950 text-blue-300 px-1.5 py-0.5 rounded border border-blue-800">4 Yrs</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/bba" className="hover:text-[#F59E0B] flex items-center justify-between transition-colors py-0.5">
                  <span className="hover:underline">• BBA (Business Administration)</span>
                  <span className="text-[10px] bg-amber-950 text-amber-300 px-1.5 py-0.5 rounded border border-amber-800">BBA</span>
                </Link>
              </li>
              <li>
                <Link href="/programs/adp-cs" className="hover:text-[#F59E0B] flex items-center justify-between transition-colors py-0.5">
                  <span className="hover:underline">• ADP Fast-Track Programs</span>
                  <span className="text-[10px] bg-indigo-950 text-indigo-300 px-1.5 py-0.5 rounded border border-indigo-800">2 Yrs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Kasur Campus Contact & Location (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-wider text-white border-b border-blue-900/80 pb-2.5">
              Kasur Campus Desk
            </h4>
            <div className="space-y-3.5 text-xs text-slate-300">
              
              {/* Address with Map Link */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="leading-relaxed block">{collegeInfo.address}</span>
                  <a
                    href="https://maps.google.com/?q=Kasur+New+Bus+Terminal+Ferozpur+Road"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-teal-400 font-bold hover:underline inline-flex items-center gap-1 mt-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Clickable Phones */}
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div className="space-x-1.5">
                  <a href={`tel:${collegeInfo.phoneNumbers[0]}`} className="hover:text-[#F59E0B] font-bold">
                    {collegeInfo.phoneNumbers[0]}
                  </a>
                  <span className="text-slate-500">/</span>
                  <a href={`tel:${collegeInfo.phoneNumbers[1]}`} className="hover:text-[#F59E0B] font-bold">
                    {collegeInfo.phoneNumbers[1]}
                  </a>
                </div>
              </div>

              {/* Clickable Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                <a href={`mailto:${collegeInfo.email}`} className="hover:text-[#F59E0B] break-all">
                  {collegeInfo.email}
                </a>
              </div>

              {/* Office Timings */}
              <div className="flex items-start gap-2.5 pt-1 text-slate-400 border-t border-blue-950">
                <Clock className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-300">Admissions Office Timings:</div>
                  <div className="text-[11px]">Monday to Saturday (8:00 AM - 4:00 PM)</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* 2. Official Affiliations Bottom Ribbon */}
      <div className="bg-[#050D24] border-t border-blue-950 py-4 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-[11px]">
            <span className="font-bold text-slate-300">Recognized Bodies:</span>
            <span>• PNMC Islamabad</span>
            <span>• NEBP Punjab</span>
            <span>• Govt. of the Punjab</span>
            <span>• Islamia University Bahawalpur (IUB)</span>
            <span>• University of Education (UE)</span>
          </div>

          <div className="text-[11px] text-teal-400 font-semibold">
            Official Portal: <span className="text-white">www.piass.edu.pk</span>
          </div>

        </div>
      </div>

      {/* 3. Copyright Strip */}
      <div className="bg-[#030817] text-[11px] text-slate-500 py-4 border-t border-blue-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} PIASS College of Nursing & Sciences, Kasur. All Rights Reserved.
          </p>
          <p className="text-slate-400">
            Admissions Session 2026 • Main Ferozpur Road, Kasur
          </p>
        </div>
      </div>

    </footer>
  );
}