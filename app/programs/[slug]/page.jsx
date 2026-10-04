import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  PhoneCall, 
  BookOpen, 
  Calendar, 
  Users, 
  GraduationCap, 
  ChevronRight, 
  Building2 
} from "lucide-react";
import { programsData } from "@/data/programsData";
import { collegeInfo } from "@/data/affiliationsData";

// Dynamic metadata taake har program ka Google Title alag ho
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const program = programsData.find((p) => p.id === resolvedParams.slug);

  if (!program) {
    return { title: "Program Not Found | PIASS Kasur" };
  }

  return {
    title: `${program.title} Admissions 2026 | PIASS College Kasur`,
    description: `Apply for ${program.title} at PIASS College Kasur. Duration: ${program.duration}. ${program.accreditation}. Eligibility: ${program.eligibility}.`,
  };
}

export default async function ProgramDetailPage({ params }) {
  const resolvedParams = await params;
  const program = programsData.find((p) => p.id === resolvedParams.slug);

  // Agar ghalat URL ho toh 404 page
  if (!program) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      
      {/* 1. Program Specific Hero Banner */}
      <section className="bg-gradient-to-r from-[#071233] via-[#0B1B4F] to-[#0A2540] text-white py-14 sm:py-20 border-b-4 border-[#0D7A68]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-4">
            <Link href="/" className="hover:text-amber-400">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/programs" className="hover:text-amber-400">Programs</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#F59E0B] font-bold">{program.title}</span>
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`text-white text-xs font-black px-3 py-1 rounded-md shadow-sm ${program.badgeColor || "bg-teal-700"}`}>
                {program.category}
              </span>
              <span className="bg-[#F59E0B] text-slate-950 text-xs font-black px-3 py-1 rounded-md shadow-sm">
                Admissions Open 2026
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              {program.title}
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
              {program.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-200">
              <div className="flex items-center gap-1.5 bg-blue-950/60 px-3 py-1.5 rounded-lg border border-blue-900">
                <Clock className="w-4 h-4 text-[#F59E0B]" />
                <span>Duration: {program.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-950/60 px-3 py-1.5 rounded-lg border border-blue-900">
                <Award className="w-4 h-4 text-[#0D7A68]" />
                <span>{program.accreditation}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Program Details Grid (Left: Content, Right: Sticky Apply Desk) */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Image, Criteria, Curriculum, Highlights */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* High-Resolution Dedicated Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-slate-200">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Eligibility Box */}
              <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2.5 text-[#0D7A68] font-bold text-sm mb-3">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="uppercase tracking-wider">Official Eligibility & Criteria</span>
                </div>
                <h3 className="text-xl font-black text-[#0B1B4F] mb-2">
                  Academic Requirements for Admission:
                </h3>
                <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 text-slate-800 font-semibold text-sm">
                  {program.eligibility}
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  Note: Original documents must be presented during in-person verification at the Kasur admission office.
                </p>
              </div>

              {/* Key Practical & Clinical Highlights */}
              <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2.5 text-[#0B1B4F] font-bold text-sm mb-3">
                  <GraduationCap className="w-5 h-5 text-[#0D7A68]" />
                  <span className="uppercase tracking-wider">What You Will Master</span>
                </div>
                <h3 className="text-xl font-black text-[#0B1B4F] mb-4">
                  Key Competencies & Practical Training:
                </h3>
                <ul className="space-y-3">
                  {program.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-teal-100 text-[#0D7A68] flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-xs">
                        ✓
                      </div>
                      <span className="leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Career Scope in Pakistan */}
              <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-black text-[#0B1B4F] mb-3">
                  Career Scope & Employment Pathways
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Graduates of this discipline from PIASS College of Nursing & Sciences hold recognized qualifications that open doors for DHQ/THQ public hospital appointments, private healthcare setups, software development firms, and corporate multinational organizations across Pakistan and abroad.
                </p>
              </div>

            </div>

            {/* Right Column: Sticky Quick Apply Box */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-lg">
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded">
                  Instant Registration
                </span>
                
                <h3 className="text-xl font-black text-[#0B1B4F] mt-2 mb-1">
                  Enroll in {program.title}
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Session 2026 applications are currently being accepted on a merit basis.
                </p>

                <div className="space-y-3 text-xs border-y border-slate-100 py-4 mb-6">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Duration:</span>
                    <strong className="text-slate-900">{program.duration}</strong>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Affiliation:</span>
                    <strong className="text-[#0D7A68]">{program.accreditation}</strong>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Campus:</span>
                    <strong className="text-slate-900">Main Ferozpur Road, Kasur</strong>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Status:</span>
                    <strong className="text-amber-600">Admissions Open 2026</strong>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1B4F] hover:bg-[#0D7A68] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md transition-all active:scale-95"
                  >
                    <span>Apply Online For This Program</span>
                    <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
                  </Link>

                  <a
                    href="https://wa.me/923041448481?text=Hello%20PIASS%20Kasur,%20I%20want%20information%20about%20Admissions%202026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 rounded-xl transition-all"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Inquire via WhatsApp Desk</span>
                  </a>
                </div>

                <div className="mt-5 text-center text-[11px] text-slate-400">
                  Admissions Helpline: +92 304 1448481
                </div>

              </div>

              {/* Kasur Office Timing Card */}
              <div className="bg-slate-100 p-5 rounded-2xl border border-slate-200 text-xs text-slate-600">
                <div className="font-bold text-[#0B1B4F] mb-1">Campus Admissions Office</div>
                <div>Main Ferozpur Road, Opposite New Bus Terminal Kasur.</div>
                <div className="mt-2 text-teal-700 font-semibold">Open Mon - Sat (8:00 AM - 4:00 PM)</div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}