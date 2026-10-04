"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Stethoscope, 
  Laptop, 
  Briefcase, 
  CheckCircle2, 
  PhoneCall, 
  Building2, 
  Clock, 
  Quote, 
  Calendar, 
  BookOpen, 
  Check, 
  ChevronDown, 
  Users, 
  Eye, 
  Layers 
} from "lucide-react";
import HeroSlider from "@/components/home/HeroSlider";
import AffiliationsStrip from "@/components/home/AffiliationsStrip";
import { collegeInfo } from "@/data/affiliationsData";

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  // 1. SIRF 3 BALANCED FACULTY OVERVIEW BOXES (Poster ke mutabiq)
  const academicWings = [
    {
      id: "nursing-health",
      title: "Faculty of Nursing & Allied Health",
      category: "Healthcare & Clinical Medicine",
      badge: "Approved by PNMC & NEBP",
      badgeColor: "bg-teal-700",
      seatsBadge: "Limited Merit Seats",
      image: "/images/1.avif",
      overview: "Direct clinical bedside hospital rotations, intensive anatomy training, and patient care procedures.",
      programsList: [
        "BS Nursing (Generic - 4 Years Degree)",
        "Post RN BSN (2 Years for Registered Nurses)",
        "LHV (Lady Health Visitor - 2 Years Diploma)",
        "CMW (Community Midwife - 2 Years Diploma)",
        "CNA (Certified Nursing Assistant - 2 Years)"
      ],
      link: "/programs"
    },
    {
      id: "computing-it",
      title: "Faculty of Computing & Information Tech",
      category: "Computer Science & Software",
      badge: "Affiliated with University of Education / IUB",
      badgeColor: "bg-[#0B1B4F]",
      seatsBadge: "Open for ICS / FSc",
      image: "/images/6.avif",
      overview: "High-performance programming labs, web & mobile app engineering, cloud networking, and AI fundamentals.",
      programsList: [
        "BS Computer Science (BSCS - 4 Years)",
        "BS Information Technology (BSIT - 4 Years)",
        "ADP Computer Science (2 Years Fast-Track)",
        "ADP Information Technology (2 Years Fast-Track)"
      ],
      link: "/programs"
    },
    {
      id: "business-adp",
      title: "Faculty of Management & Associate Degrees",
      category: "Business, Commerce & English",
      badge: "Degree Awarding Affiliation",
      badgeColor: "bg-amber-600",
      seatsBadge: "Morning & Evening",
      image: "/images/8.avif",
      overview: "Corporate leadership, financial analysis, professional English literature, and lateral BS 5th semester entry.",
      programsList: [
        "BBA (Business Administration - 4 Years)",
        "BS English (Language & Literature - 4 Years)",
        "ADP Business Administration (2 Years)",
        "ADP English & Post ADP Lateral Progression"
      ],
      link: "/programs"
    }
  ];

  // 2. ADMISSION 4-STEP ROADMAP
  const admissionSteps = [
    {
      step: "01",
      title: "Submit Inquiry",
      desc: "Fill our quick online form or visit our admission office opposite New Bus Terminal Kasur."
    },
    {
      step: "02",
      title: "Document Verification",
      desc: "Provide Matric, F.Sc, or ICS certificates with CNIC/B-Form copies for eligibility verification."
    },
    {
      step: "03",
      title: "Academic Counseling",
      desc: "Meet senior faculty advisors to select the ideal field matching your aptitude and career scope."
    },
    {
      step: "04",
      title: "Confirm Enrollment",
      desc: "Deposit semester fees to secure your registered roll number before the Session 2026 merit deadline."
    }
  ];

  // 3. FREQUENTLY ASKED QUESTIONS (Hostel/Transport hata kar purely academic questions)
  const faqs = [
    {
      q: "Is PIASS College of Nursing Kasur approved by PNMC?",
      a: "Yes, PIASS College of Nursing is officially recognized by the Pakistan Nursing and Midwifery Council (PNMC) Islamabad and the Nursing Examination Board Punjab (NEBP). All degrees and diplomas entitle graduates to official government licensing and DHQ/THQ hospital appointments."
    },
    {
      q: "What are the eligibility criteria for BS Nursing (Generic 4 Years)?",
      a: "Candidates must have passed F.Sc Pre-Medical with a minimum of 50% marks from any recognized BISE board in Pakistan. Both male and female candidates can apply as per council quota guidelines."
    },
    {
      q: "With which universities are the BSCS and BBA programs affiliated?",
      a: "Our computing, business, and associate degree programs are officially affiliated with recognized public universities, including the University of Education (UE) Lahore and The Islamia University of Bahawalpur (IUB)."
    },
    {
      q: "How does PIASS Kasur ensure individual student attention in classrooms?",
      a: "We maintain limited batch sizes per lecture hall so teachers can focus on each student individually. Regular weekly quizzes, conceptual revisions, and personalized viva sessions ensure high passing rates in board and university examinations."
    },
    {
      q: "Can students with an ICS background apply for Computing programs?",
      a: "Yes! Students with ICS (Physics, Statistics, or Economics), F.Sc Pre-Engineering, or Pre-Medical with additional Mathematics are fully eligible for BSCS, BSIT, and ADP Computer Science."
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      
      {/* 1. AUTO-PLAY HERO SLIDER (4-Second Auto Rotate with Progress Bar) */}
      <HeroSlider />

      {/* 2. OFFICIAL REGULATORY LOGOS STRIP */}
      <AffiliationsStrip />

      {/* 3. URGENT ADMISSION NOTICE TICKER */}
      <section className="bg-[#071233] text-white py-3.5 border-b border-blue-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="bg-[#F59E0B] text-slate-950 font-black px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider flex items-center gap-1 shadow-sm">
              <Calendar className="w-3.5 h-3.5" /> Notice
            </span>
            <span className="text-slate-200 font-medium">
              Admissions Open for Session {collegeInfo.admissionsYear} • Scrutiny of F.Sc & Matric applications in progress.
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 font-semibold">
            <span className="hidden sm:inline text-teal-400">● Limited Merit Seats</span>
            <Link href="/contact" className="text-[#F59E0B] hover:underline flex items-center gap-1">
              Apply Before Deadline <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE DIRECTOR & PRINCIPAL COMMITMENT SPOTLIGHT */}
      <section className="py-20 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-slate-50 via-white to-teal-50/40 rounded-3xl border border-slate-200 p-8 sm:p-12 lg:p-16 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Prestigious Executive Portrait */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  
                  {/* Portrait Frame */}
                  <div className="relative h-[440px] sm:h-[490px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <Image
                      src="/images/17.avif"
                      alt="PIASS Academic Leadership"
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/95 via-transparent to-transparent" />
                    
                    {/* Badge at Bottom of Portrait */}
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">Executive Directorate</div>
                      <div className="text-xl font-black leading-tight">Board of Academic & Clinical Governance</div>
                      <div className="text-xs text-slate-300 mt-1">PIASS College of Nursing & Sciences • Kasur</div>
                    </div>
                  </div>

                  {/* Top-Right Seal */}
                  <div className="absolute -top-4 -right-4 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-teal-100 text-[#0D7A68] flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#0B1B4F]">PNMC Approved</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Legal Certification</div>
                    </div>
                  </div>

                  {/* Bottom-Left Experience Badge */}
                  <div className="absolute -bottom-4 -left-4 bg-[#0B1B4F] text-white p-3.5 rounded-2xl shadow-xl hidden sm:flex items-center gap-3">
                    <div className="text-2xl font-black text-[#F59E0B]">100%</div>
                    <div className="text-[11px] leading-tight text-slate-300">
                      Hospital Ward<br />Clinical Duties
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Leadership Commitment (Hostel/Transport hata kar Classroom focus) */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 bg-[#0D7A68]/10 text-[#0D7A68] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Director & Principal's Commitment</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B4F] tracking-tight leading-tight">
                  "Excellence in <span className="text-[#0D7A68]">Classroom Learning</span> & Practical Clinical Training"
                </h2>

                <div className="relative pl-6 border-l-4 border-[#F59E0B]">
                  <Quote className="w-8 h-8 text-[#F59E0B]/30 absolute -top-3 left-1 -z-0" />
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal relative z-10">
                    Our vision for PIASS College Kasur is built on two strict principles: <strong>uncompromised individual student attention inside lecture halls</strong> and <strong>rigorous practical rotations in hospitals and computing labs</strong>. We don't believe in crowded classrooms where students get lost—every individual receives personal academic mentoring.
                  </p>
                </div>

                {/* 3 Realistic Feature Highlights (No Hostel / No Transport here) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                  
                  <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 text-[#0D7A68] flex items-center justify-center mb-2">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div className="font-extrabold text-xs text-[#0B1B4F]">Hospital Ward Rotations</div>
                    <div className="text-[11px] text-slate-500 mt-1">Direct bedside clinical shifts in affiliated teaching hospitals.</div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center mb-2">
                      <Users className="w-5 h-5" />
                    </div>
                    <div className="font-extrabold text-xs text-[#0B1B4F]">Individual Attention</div>
                    <div className="text-[11px] text-slate-500 mt-1">Limited class sizes ensuring dedicated teacher-to-student guidance.</div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-2">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div className="font-extrabold text-xs text-[#0B1B4F]">Smart Lecture Rooms</div>
                    <div className="text-[11px] text-slate-500 mt-1">Air-conditioned classrooms equipped with modern multimedia audio-visual tools.</div>
                  </div>

                </div>

                {/* Action Row */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 bg-[#0B1B4F] hover:bg-[#0D7A68] text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
                  >
                    <span>Read Full About Profile</span>
                    <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
                  </Link>
                  <span className="text-xs font-semibold text-slate-500">
                    Kasur Campus • Admissions Open {collegeInfo.admissionsYear}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. SIRF 3 BALANCED ACADEMIC WINGS (Poster ke mutabiq 3 Boxes) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200">
              Overview of Disciplines
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B4F] tracking-tight mt-3">
              Explore Our Academic Faculties
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-3">
              PIASS Kasur offers certified degree and diploma programs divided into three comprehensive wings with experienced instructors and thorough exam preparation.
            </p>
          </div>

          {/* EXACTLY 3 BOXES GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {academicWings.map((wing) => (
              <div
                key={wing.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                
                {/* 1. Large Top Photo */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={wing.image}
                    alt={wing.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  
                  <span className={`absolute top-4 left-4 text-white text-[11px] font-black px-3.5 py-1 rounded-lg shadow-md ${wing.badgeColor}`}>
                    {wing.category}
                  </span>

                  <span className="absolute top-4 right-4 bg-amber-400 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded shadow">
                    {wing.seatsBadge}
                  </span>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-white text-xs font-bold">
                    <Award className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
                    <span>{wing.badge}</span>
                  </div>
                </div>

                {/* 2. Body: Overview + Program List */}
                <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-[#0B1B4F] tracking-tight mb-2">
                      {wing.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {wing.overview}
                    </p>

                    <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 mb-6">
                      <div className="text-[11px] font-extrabold text-[#0D7A68] uppercase tracking-wider mb-2.5">
                        Programs Offered in this Wing:
                      </div>
                      <ul className="space-y-2 text-xs font-semibold text-slate-800">
                        {wing.programsList.map((prog, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A68] flex-shrink-0" />
                            <span>{prog}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href={wing.link}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1B4F] hover:bg-[#0D7A68] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl transition-all duration-200 shadow-sm"
                  >
                    <span>View Eligibility & Course Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </Link>

                </div>

              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-[#0D7A68] hover:text-[#0B1B4F] transition-colors"
            >
              <span>Looking for individual semester syllabus? Open Full 13 Programs Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. HOSPITAL ROTATIONS & WARD CLINICAL PRACTICE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
                Hospital Ward Experience
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B4F] tracking-tight leading-tight">
                Mandatory Bedside Training at Affiliated Teaching Hospitals
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Nursing and healthcare qualifications require intense clinical exposure. At PIASS Kasur, candidates undergo supervised clinical shifts under senior doctors and nursing officers to master real-life patient care.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-[#0D7A68] flex items-center justify-center flex-shrink-0 font-black">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#0B1B4F]">Emergency & Trauma Rotations</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Rapid triage handling, IV infusions, wound management, and vital monitoring.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-[#0D7A68] flex items-center justify-center flex-shrink-0 font-black">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#0B1B4F]">Maternal & Labor Room Practice</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Labor room assistance, neonatal care, and pre-natal/post-natal hygiene routines.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 text-[#0D7A68] flex items-center justify-center flex-shrink-0 font-black">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#0B1B4F]">Operation Theatre & Surgical Care</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Surgical sterilization, post-op patient observation, and medication administration.</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100">
                <Image
                  src="/images/2.avif"
                  alt="Clinical Ward Training"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg border-2 border-slate-100 mt-8">
                <Image
                  src="/images/3.avif"
                  alt="Doctor with Stethoscope"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. NEW SECTION: CLASSROOM EXCELLENCE & INDIVIDUAL ATTENTION (Hostel ki jagah!) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200">
              Teaching Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B4F] tracking-tight mt-3">
              Focused Classroom Learning & Personal Attention
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-3">
              We ensure an educational atmosphere where teachers know their students by name, ensuring solid board exam preparation and conceptual clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#0D7A68] flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-[#0B1B4F] mb-2">
                  Limited Batch Sizes
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Controlled seat allocation per room ensures zero crowding. Every student has an unobstructed view and direct interactive access to the teacher.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-[#0D7A68]">
                ✓ No Overcrowding
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-[#0B1B4F] mb-2">
                  Individual Mentorship
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated faculty counseling sessions for students who need extra revision in challenging medical and computing concepts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-blue-800">
                ✓ Personal Academic Focus
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-[#0B1B4F] mb-2">
                  Smart Multimedia Tools
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Lectures are supported with visual 3D anatomical animations, coding demonstrations, and multimedia slides for quick grasping.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-amber-700">
                ✓ Audio-Visual Learning
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-[#0B1B4F] mb-2">
                  Weekly Board Tests
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Regular test sessions designed strictly as per Punjab Nursing Board (NEBP) and University examination patterns to guarantee high marks.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-indigo-700">
                ✓ Proven Exam Success
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. ADMISSIONS 4-STEP APPLICATION ROADMAP */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
              Simple 4-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B4F] tracking-tight mt-3">
              How to Secure Admission for 2026
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Follow our transparent enrollment guide to register for degree and diploma programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-[#0D7A68] mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-extrabold text-base text-[#0B1B4F] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                  <Check className="w-3.5 h-3.5 text-[#0D7A68]" /> Step {idx + 1} of 4
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0B1B4F] hover:bg-[#0D7A68] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <span>Start Your Admission Application Now</span>
              <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            </Link>
          </div>

        </div>
      </section>

      {/* 9. VISUAL CAMPUS INFRASTRUCTURE GALLERY (Clean Photo Strip) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-black text-[#0D7A68] uppercase tracking-wider">Campus Life & Training</span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0B1B4F] mt-1">Practical Learning Facilities in Kasur</h3>
            </div>
            <Link href="/about" className="text-xs font-bold text-[#0D7A68] hover:underline flex items-center gap-1">
              <span>View All Campus Labs</span> <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-2xl overflow-hidden group shadow-sm">
              <Image 
                src="/images/18.avif" 
                alt="Nursing Simulation Lab" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 text-white font-bold text-xs sm:text-sm">
                Nursing Simulation Lab
              </span>
            </div>

            <div className="relative h-48 rounded-2xl overflow-hidden group shadow-sm">
              <Image 
                src="/images/19.avif" 
                alt="IT & Software Lab" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 text-white font-bold text-xs sm:text-sm">
                High-Spec Computer Lab
              </span>
            </div>

            <div className="relative h-48 rounded-2xl overflow-hidden group shadow-sm">
              <Image 
                src="/images/20.avif" 
                alt="Medical Library" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 text-white font-bold text-xs sm:text-sm">
                Digital & Medical Library
              </span>
            </div>

            <div className="relative h-48 rounded-2xl overflow-hidden group shadow-sm">
              <Image 
                src="/images/21.avif" 
                alt="Anatomy & Science Lab" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 text-white font-bold text-xs sm:text-sm">
                Anatomy Science Lab
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS (FAQS - Kept as requested) */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200">
              Questions & Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B4F] tracking-tight mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Everything you need to know about regulatory approvals, admissions, and classroom environment.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0B1B4F] hover:text-[#0D7A68] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    openFaq === index ? "rotate-180 text-[#0D7A68]" : "text-slate-400"
                  }`} />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/80 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. KASUR ADMISSIONS DESK & CTA PIN */}
      <section className="bg-gradient-to-r from-[#071233] to-[#0B1B4F] text-white py-16 border-t-4 border-[#0D7A68]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">Kasur Admissions Desk</span>
            <h3 className="text-2xl sm:text-4xl font-black mt-1">Visit Campus on Main Ferozpur Road</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-xl">
              Opposite New Bus Terminal Kasur. Meet our academic counselors Monday to Saturday from 8:00 AM to 4:00 PM.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${collegeInfo.phoneNumbers[0]}`}
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm px-6 py-4 rounded-xl shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Helpline</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0D7A68] hover:bg-teal-600 text-white font-bold text-xs sm:text-sm px-6 py-4 rounded-xl shadow-md transition-all"
            >
              <span>View Location & Contact Desk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}