import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Clock, 
  Award, 
  ArrowRight, 
  PhoneCall, 
  ChevronRight 
} from "lucide-react";
import { programsData } from "@/data/programsData";
import ProgramDetailTabs from "@/components/programs/ProgramDetailTabs";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const program = programsData.find((p) => (p.slug || p.id) === resolvedParams?.slug);

  if (!program) {
    return { title: "Program Not Found | PIASS Kasur" };
  }

  return {
    title: `${program.title} Admissions 2026 | PIASS College Kasur`,
    description: `Apply for ${program.title} at PIASS College Kasur. Duration: ${program.duration}. Eligibility: ${program.eligibility}.`,
  };
}

export default async function ProgramDetailPage({ params }) {
  const resolvedParams = await params;
  const program = programsData.find((p) => (p.slug || p.id) === resolvedParams?.slug);

  if (!program) {
    notFound();
  }

  const accreditationText = program.accreditation || program.recognizedBy || "PNMC & University Affiliated";
  const programImage = program.image || "/images/1.avif";

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#071233] via-[#0B1B4F] to-[#0A2540] text-white py-12 sm:py-16 border-b-4 border-[#0D7A68]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-3">
            <Link href="/" className="hover:text-amber-400">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/programs" className="hover:text-amber-400">Programs</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[#F59E0B] font-bold">{program.title}</span>
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-[#0D7A68] text-white text-xs font-black px-3 py-1 rounded-md shadow-sm">
                {program.category || "Academic Program"}
              </span>
              <span className="bg-[#F59E0B] text-slate-950 text-xs font-black px-3 py-1 rounded-md shadow-sm">
                Admissions Open 2026
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {program.title}
            </h1>

            <p className="mt-3 text-xs sm:text-sm text-slate-200 leading-relaxed max-w-3xl font-normal">
              {program.description}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-200">
              <div className="flex items-center gap-1.5 bg-blue-950/70 px-3 py-1.5 rounded-lg border border-blue-900">
                <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>Duration: {program.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-blue-950/70 px-3 py-1.5 rounded-lg border border-blue-900">
                <Award className="w-3.5 h-3.5 text-[#0D7A68]" />
                <span>{accreditationText}</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Program Details Grid */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Image + TABS */}
            <div className="lg:col-span-8 space-y-6">
              <div className="relative h-64 sm:h-80 w-full rounded-3xl overflow-hidden shadow-sm border-4 border-white bg-slate-200">
                <Image
                  src={programImage}
                  alt={program.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* 🎯 Interactive Tabs Component */}
              <ProgramDetailTabs program={program} />
            </div>

            {/* Right Column: Apply Card */}
            <div className="lg:col-span-4 sticky top-24 space-y-5">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md">
                <span className="text-[10px] font-black uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded">
                  Instant Registration
                </span>
                
                <h3 className="text-lg font-black text-[#0B1B4F] mt-2 mb-1">
                  Enroll in {program.title}
                </h3>
                <p className="text-xs text-slate-500 mb-5">
                  Session 2026 applications are currently being accepted on a merit basis.
                </p>

                <div className="space-y-2.5 text-xs border-y border-slate-100 py-4 mb-5">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Duration:</span>
                    <strong className="text-slate-900">{program.duration}</strong>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Affiliation:</span>
                    <strong className="text-[#0D7A68] text-right line-clamp-1">{accreditationText}</strong>
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

                <div className="space-y-2.5">
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

                <div className="mt-4 text-center text-[11px] text-slate-400">
                  Admissions Helpline: +92 304 1448481
                </div>
              </div>

              <div className="bg-slate-100 p-4 rounded-2xl border border-slate-200 text-xs text-slate-600">
                <div className="font-bold text-[#0B1B4F] mb-1">Campus Admissions Office</div>
                <div>Main Ferozpur Road, Opposite New Bus Terminal Kasur.</div>
                <div className="mt-1.5 text-teal-700 font-semibold">Open Mon - Sat (8:00 AM - 4:00 PM)</div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export async function generateStaticParams() {
  if (!Array.isArray(programsData)) return [];

  return programsData
    .filter((program) => Boolean(program?.slug || program?.id))
    .map((program) => ({
      slug: String(program.slug || program.id),
    }));
}