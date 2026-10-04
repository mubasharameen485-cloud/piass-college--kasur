"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Stethoscope, 
  GraduationCap, 
  BookOpen, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight
} from "lucide-react";
import { collegeInfo } from "@/data/affiliationsData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setProgramsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      isScrolled ? "glass-nav shadow-md border-b border-slate-200/80 bg-white/95" : "bg-white border-b border-slate-100"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo & Institute Identity (Box khatam, open natural look) */}
          <Link href="/" className="flex items-center gap-3.5 group" onClick={handleLinkClick}>
            <div className="relative w-14 h-14 flex items-center justify-center">
              <Image
                src={collegeInfo.mainLogo}
                alt="PIASS College Logo"
                width={56}
                height={56}
                className="object-contain w-auto h-14 drop-shadow-sm transition-transform duration-200 group-hover:scale-105"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0B1B4F] leading-none">
                PIASS <span className="text-[#0D7A68]">COLLEGE</span>
              </span>
              <span className="text-xs font-semibold text-slate-600 tracking-wider uppercase mt-1">
                of Nursing & Sciences • Kasur
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="px-3.5 py-2 text-sm font-bold text-[#0B1B4F] hover:text-[#0D7A68] rounded-md transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={handleLinkClick}
              className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-[#0D7A68] rounded-md transition-colors"
            >
              About College
            </Link>

            {/* MEGA DROPDOWN TRIGGER */}
            <div 
              className="relative group"
              onMouseEnter={() => setProgramsDropdownOpen(true)}
              onMouseLeave={() => setProgramsDropdownOpen(false)}
            >
              <Link
                href="/programs"
                className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-[#0D7A68] rounded-md transition-colors group-hover:text-[#0D7A68]"
              >
                <span>Academic Programs</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              {/* MEGA MENU CONTAINER WITH EXACT DEDICATED PATHS */}
              <div
                className={`absolute top-full -left-48 xl:-left-36 w-[880px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-6 transition-all duration-200 origin-top z-50 ${
                  programsDropdownOpen ? "opacity-100 visible scale-100 pointer-events-auto" : "opacity-0 invisible scale-95 pointer-events-none"
                }`}
              >
                <div className="grid grid-cols-4 gap-5">

                  {/* Column 1: Nursing Degrees */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[#0D7A68] font-bold text-sm mb-3 pb-2 border-b border-slate-200">
                        <Stethoscope className="w-4 h-4" />
                        <span>Nursing Degrees</span>
                      </div>
                      <ul className="space-y-2 text-xs">
                        <li>
                          <Link 
                            href="/programs/bs-nursing" 
                            onClick={handleLinkClick}
                            className="block p-2 rounded-lg bg-white border border-slate-200/60 hover:border-[#0D7A68] hover:text-[#0D7A68] font-medium text-slate-800 transition-all shadow-none hover:shadow-sm"
                          >
                            <div className="font-bold flex items-center justify-between">
                              <span>BS Nursing (Generic)</span>
                              <span className="text-[10px] bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded font-bold">4 Yrs</span>
                            </div>
                            <div className="text-slate-500 text-[11px] mt-0.5">Approved by PNMC</div>
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/programs/post-rn" 
                            onClick={handleLinkClick}
                            className="block p-2 rounded-lg bg-white border border-slate-200/60 hover:border-[#0D7A68] hover:text-[#0D7A68] font-medium text-slate-800 transition-all shadow-none hover:shadow-sm"
                          >
                            <div className="font-bold flex items-center justify-between">
                              <span>Post RN BSN</span>
                              <span className="text-[10px] bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded font-bold">2 Yrs</span>
                            </div>
                            <div className="text-slate-500 text-[11px] mt-0.5">For Registered Nurses</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 2: Healthcare Diplomas */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-3 pb-2 border-b border-slate-200">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Diplomas</span>
                      </div>
                      <ul className="space-y-2 text-xs">
                        <li>
                          <Link 
                            href="/programs/lhv" 
                            onClick={handleLinkClick}
                            className="block p-2 rounded-lg bg-white border border-slate-200/60 hover:border-emerald-700 hover:text-emerald-700 font-medium text-slate-800 transition-all"
                          >
                            <div className="font-bold">LHV Diploma</div>
                            <div className="text-slate-500 text-[11px]">2 Yrs • Lady Health Visitor</div>
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/programs/cmw" 
                            onClick={handleLinkClick}
                            className="block p-2 rounded-lg bg-white border border-slate-200/60 hover:border-emerald-700 hover:text-emerald-700 font-medium text-slate-800 transition-all"
                          >
                            <div className="font-bold">CMW Diploma</div>
                            <div className="text-slate-500 text-[11px]">2 Yrs • Community Midwife</div>
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/programs/cna" 
                            onClick={handleLinkClick}
                            className="block p-2 rounded-lg bg-white border border-slate-200/60 hover:border-emerald-700 hover:text-emerald-700 font-medium text-slate-800 transition-all"
                          >
                            <div className="font-bold">CNA Program</div>
                            <div className="text-slate-500 text-[11px]">2 Yrs • Nursing Assistant</div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 3: BS Degrees */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[#0B1B4F] font-bold text-sm mb-3 pb-2 border-b border-slate-200">
                        <GraduationCap className="w-4 h-4" />
                        <span>BS Programs (4 Yrs)</span>
                      </div>
                      <ul className="space-y-1.5 text-xs">
                        <li>
                          <Link 
                            href="/programs/bscs" 
                            onClick={handleLinkClick}
                            className="block p-1.5 rounded-lg hover:bg-white hover:text-blue-700 font-semibold text-slate-700 transition-all"
                          >
                            • BS Computer Science
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/programs/bsit" 
                            onClick={handleLinkClick}
                            className="block p-1.5 rounded-lg hover:bg-white hover:text-blue-700 font-semibold text-slate-700 transition-all"
                          >
                            • BS Information Tech
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/programs/bba" 
                            onClick={handleLinkClick}
                            className="block p-1.5 rounded-lg hover:bg-white hover:text-blue-700 font-semibold text-slate-700 transition-all"
                          >
                            • BBA (Business Admin)
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/programs/bs-english" 
                            onClick={handleLinkClick}
                            className="block p-1.5 rounded-lg hover:bg-white hover:text-blue-700 font-semibold text-slate-700 transition-all"
                          >
                            • BS English Literature
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 4: ADP Programs */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm mb-3 pb-2 border-b border-slate-200">
                        <BookOpen className="w-4 h-4" />
                        <span>ADP Programs (2 Yrs)</span>
                      </div>
                      <ul className="space-y-1.5 text-xs">
                        <li>
                          <Link 
                            href="/programs/adp-cs" 
                            onClick={handleLinkClick}
                            className="block p-1.5 rounded-lg hover:bg-white hover:text-indigo-700 font-semibold text-slate-700 transition-all"
                          >
                            • ADP Computer Science
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/programs/adp-it" 
                            onClick={handleLinkClick}
                            className="block p-1.5 rounded-lg hover:bg-white hover:text-indigo-700 font-semibold text-slate-700 transition-all"
                          >
                            • ADP Information Tech
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/programs/adp-bba" 
                            onClick={handleLinkClick}
                            className="block p-1.5 rounded-lg hover:bg-white hover:text-indigo-700 font-semibold text-slate-700 transition-all"
                          >
                            • ADP Business Admin
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href="/programs/adp-english" 
                            onClick={handleLinkClick}
                            className="block p-1.5 rounded-lg hover:bg-white hover:text-indigo-700 font-semibold text-slate-700 transition-all"
                          >
                            • ADP English & Post ADP
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Affiliated with University of Education (UE) & IUB</span>
                  <Link 
                    href="/programs" 
                    onClick={handleLinkClick}
                    className="text-[#0D7A68] font-bold flex items-center gap-1 hover:underline"
                  >
                    View All Programs Directory <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="px-3.5 py-2 text-sm font-bold text-slate-700 hover:text-[#0D7A68] rounded-md transition-colors"
            >
              Contact & Location
            </Link>
          </nav>

          {/* Right Action Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="inline-flex items-center gap-2 bg-[#0B1B4F] text-white hover:bg-[#0D7A68] font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-sm active:scale-95"
            >
              <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
              <span>Apply Online 2026</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#0B1B4F]" /> : <Menu className="w-6 h-6 text-[#0B1B4F]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            onClick={handleLinkClick}
            className="block px-3 py-2 text-base font-bold text-[#0B1B4F] hover:bg-slate-50 rounded-lg"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={handleLinkClick}
            className="block px-3 py-2 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            About College
          </Link>

          {/* Mobile Programs Accordion */}
          <div className="border border-slate-200 rounded-xl p-3 bg-slate-50">
            <div className="font-black text-[#0B1B4F] text-sm mb-2 flex items-center justify-between">
              <span>All Programs (Dedicated Pages)</span>
              <span className="text-[10px] bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full font-bold">13 Disciplines</span>
            </div>
            <div className="space-y-1.5 text-xs font-semibold">
              <Link href="/programs/bs-nursing" onClick={handleLinkClick} className="block p-2 bg-white rounded border border-slate-200 text-slate-800 hover:text-[#0D7A68]">
                🩺 BS Nursing (Generic 4 Yrs)
              </Link>
              <Link href="/programs/post-rn" onClick={handleLinkClick} className="block p-2 bg-white rounded border border-slate-200 text-slate-800 hover:text-[#0D7A68]">
                🩺 Post RN BSN (2 Yrs)
              </Link>
              <Link href="/programs/lhv" onClick={handleLinkClick} className="block p-2 bg-white rounded border border-slate-200 text-slate-800 hover:text-[#0D7A68]">
                👶 LHV (Lady Health Visitor)
              </Link>
              <Link href="/programs/cmw" onClick={handleLinkClick} className="block p-2 bg-white rounded border border-slate-200 text-slate-800 hover:text-[#0D7A68]">
                👶 CMW (Community Midwife)
              </Link>
              <Link href="/programs/cna" onClick={handleLinkClick} className="block p-2 bg-white rounded border border-slate-200 text-slate-800 hover:text-[#0D7A68]">
                👶 CNA (Nursing Assistant)
              </Link>
              <Link href="/programs/bscs" onClick={handleLinkClick} className="block p-2 bg-white rounded border border-slate-200 text-slate-800 hover:text-[#0D7A68]">
                💻 BS Computer Science (BSCS)
              </Link>
              <Link href="/programs/bsit" onClick={handleLinkClick} className="block p-2 bg-white rounded border border-slate-200 text-slate-800 hover:text-[#0D7A68]">
                💻 BS Information Technology (BSIT)
              </Link>
              <Link href="/programs/bba" onClick={handleLinkClick} className="block p-2 bg-white rounded border border-slate-200 text-slate-800 hover:text-[#0D7A68]">
                📊 BBA (Business Admin)
              </Link>
              <Link href="/programs/bs-english" onClick={handleLinkClick} className="block p-2 bg-white rounded border border-slate-200 text-slate-800 hover:text-[#0D7A68]">
                📚 BS English Literature
              </Link>
              <Link href="/programs/adp-cs" onClick={handleLinkClick} className="block p-2 bg-white rounded border border-slate-200 text-slate-800 hover:text-[#0D7A68]">
                🎓 ADP Programs (2 Years)
              </Link>
            </div>
          </div>

          <Link
            href="/contact"
            onClick={handleLinkClick}
            className="block px-3 py-2 text-base font-bold text-slate-700 hover:bg-slate-50 rounded-lg"
          >
            Contact & Location (Kasur)
          </Link>

          <div className="pt-2">
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 bg-[#0B1B4F] text-white font-bold py-3 rounded-xl shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-[#F59E0B]" />
              <span>Apply Online for 2026</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}