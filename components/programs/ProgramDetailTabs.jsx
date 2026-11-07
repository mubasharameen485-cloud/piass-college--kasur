"use client";

import React, { useState } from "react";
import { 
  FileText, 
  ShieldCheck, 
  BookOpen, 
  Briefcase, 
  Users, 
  CheckCircle2, 
  Stethoscope,
  ChevronRight,
  GraduationCap
} from "lucide-react";

export default function ProgramDetailTabs({ program }) {
  // Active Tab State (Default: Overview)
  const [activeTab, setActiveTab] = useState("overview");

  // Safe fallbacks
  const accreditationText = program.accreditation || program.recognizedBy || "PNMC & University Affiliated";
  const highlightsList = program.highlights || [
    "Comprehensive hands-on training under qualified faculty",
    "Modern skills laboratory and computer simulation practice",
    "Direct affiliation with recognized government regulatory bodies"
  ];
  const subjectsList = program.subjects || [
    "Core Foundation Modules",
    "Applied Clinical / Practical Studies",
    "Professional Ethics & Patient Care",
    "Advanced Research & Final Evaluation"
  ];

  // Faculty & Staff Data (Placeholder / Customizable)
  const getFacultyData = () => {
    const cat = (program.categorySlug || program.category || "").toLowerCase();
    
    if (cat.includes("nursing") || cat.includes("diploma")) {
      return [
        {
          name: "Madam Nasreen Akhtar",
          role: "Principal / Senior Nursing Director",
          qual: "MSN (Nursing), Post RN, RN, RM",
          exp: "18+ Years Clinical & Teaching Experience",
          specialty: "Nursing Administration & Clinical Ethics"
        },
        {
          name: "Dr. Hamza Rafique",
          role: "Medical Officer / Clinical Instructor",
          qual: "MBBS, FCPS (Training)",
          exp: "10+ Years Hospital Ward Rotations",
          specialty: "Anatomy, Physiology & Emergency Medicine"
        },
        {
          name: "Sister Samina Kausar",
          role: "Senior Nursing Instructor",
          qual: "BS Nursing, Diploma in ICU & Critical Care",
          exp: "12+ Years Teaching Hospital Experience",
          specialty: "Critical Care, Bedside Nursing & Vitals"
        },
        {
          name: "Madam Farzana Bibi",
          role: "Midwifery & LHV Clinical Supervisor",
          qual: "Post RN, Certified Community Midwife",
          exp: "14+ Years Maternal Health Services",
          specialty: "Maternal & Neonatal Child Healthcare"
        }
      ];
    } else if (cat.includes("allied") || program.slug === "dpt") {
      return [
        {
          name: "Dr. Usman Tariq (PT)",
          role: "Head of Physical Therapy (HOD)",
          qual: "DPT, MS-OMPT, Certified Orthopedic PT",
          exp: "11+ Years Clinical Rehab Experience",
          specialty: "Musculoskeletal & Sports Rehabilitation"
        },
        {
          name: "Dr. Ayesha Noor (PT)",
          role: "Assistant Professor / Senior Lecturer",
          qual: "DPT, MS Neuro-Physical Therapy",
          exp: "8+ Years Hospital Practice",
          specialty: "Neurological Physical Therapy & Kinesiology"
        },
        {
          name: "Dr. Bilal Javed (PT)",
          role: "Clinical Physiotherapist",
          qual: "DPT, Certified Manual Therapist",
          exp: "6+ Years Clinical Practice",
          specialty: "Electrotherapy, Exercise Therapy & Biomechanics"
        }
      ];
    } else if (cat.includes("bs") || cat.includes("cs") || cat.includes("it") || cat.includes("adp")) {
      return [
        {
          name: "Engr. Muhammad Awais",
          role: "Head of Department (Computing & IT)",
          qual: "MS Software Engineering, BS Computer Science",
          exp: "12+ Years Software Industry & Academia",
          specialty: "Algorithms, Database Systems & AI"
        },
        {
          name: "Sir Salman Farooq",
          role: "Assistant Professor",
          qual: "MS Computer Science (FAST/UET)",
          exp: "9+ Years Teaching Experience",
          specialty: "Full Stack Web & Cloud Architectures"
        },
        {
          name: "Madam Hina Bukhari",
          role: "Lecturer in IT",
          qual: "MS Information Technology",
          exp: "6+ Years Teaching Experience",
          specialty: "Network Security & Mobile App Development"
        }
      ];
    } else {
      return [
        {
          name: "Prof. Tariq Mehmood",
          role: "Head of Management Sciences",
          qual: "MBA, M.Phil Management Sciences",
          exp: "15+ Years Corporate & Academic Experience",
          specialty: "Strategic Marketing & Financial Analytics"
        },
        {
          name: "Sir Zeeshan Ali",
          role: "Senior Lecturer",
          qual: "MS Commerce & Corporate Finance",
          exp: "8+ Years Banking & Finance Experience",
          specialty: "Accounting, Business Law & Corporate Taxation"
        },
        {
          name: "Madam Maria Tahir",
          role: "Lecturer in English",
          qual: "M.Phil English Linguistics & Literature",
          exp: "7+ Years Higher Education Experience",
          specialty: "Applied Linguistics & Academic Communication"
        }
      ];
    }
  };

  const facultyList = getFacultyData();

  // 🎯 5 Tab Definitions with Sub-Labels
  const tabs = [
    { id: "overview", label: "Program Overview", sub: "Summary & Key Specs", icon: FileText },
    { id: "requirements", label: "Eligibility & Criteria", sub: "Academic Requirements", icon: ShieldCheck },
    { id: "curriculum", label: "Curriculum & Training", sub: "Subjects & Clinical Skills", icon: BookOpen },
    { id: "scope", label: "Career Scope & Jobs", sub: "Employment & DHQ/THQ", icon: Briefcase },
    { id: "faculty", label: "Faculty & Staff", sub: "Doctors & Mentors", icon: Users },
  ];

  return (
    /* 🎯 TOP TO BOTTOM (VERTICAL) LAYOUT: 
       Left Column: Vertical Tabs Menu (Upar se Neechay)
       Right Column: Active Content Box */
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
      
      {/* ========================================================
          1. VERTICAL TABS SIDEBAR (UPAR SE NEECHAY KI TARAF)
         ======================================================== */}
      <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-2 bg-white p-3 rounded-3xl border border-slate-200/90 shadow-sm">
        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 pt-1 block">
          Select Information:
        </span>

        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              type="button"
              className={`flex items-center gap-3 w-full p-3 rounded-2xl font-bold text-left transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#0D7A68] text-white shadow-md shadow-teal-900/15"
                  : "text-slate-700 hover:bg-slate-50 hover:text-[#0B1B4F]"
              }`}
            >
              {/* Tab Icon */}
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                isActive ? "bg-white/20 text-[#F59E0B]" : "bg-teal-50 text-[#0D7A68]"
              }`}>
                <Icon className="w-4 h-4" />
              </div>

              {/* Title & Subtitle */}
              <div className="flex-1 min-w-0">
                <span className="block text-xs sm:text-sm font-extrabold leading-tight truncate">
                  {tab.label}
                </span>
                <span className={`text-[10px] block mt-0.5 font-normal truncate ${
                  isActive ? "text-slate-100" : "text-slate-400"
                }`}>
                  {tab.sub}
                </span>
              </div>

              {/* Arrow Indicator on Active Tab */}
              {isActive && (
                <ChevronRight className="w-4 h-4 text-[#F59E0B] flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* ========================================================
          2. ACTIVE TAB CONTENT PANEL (RIGHT SIDE)
         ======================================================== */}
      <div className="md:col-span-7 lg:col-span-8 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm min-h-[460px] flex flex-col justify-between">
        
        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0D7A68] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Academic Profile
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0B1B4F] mt-2 mb-2">
                About {program.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {program.description}
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Duration</span>
                <span className="text-xs sm:text-sm font-extrabold text-[#0B1B4F] mt-0.5 block">{program.duration}</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Total Seats</span>
                <span className="text-xs sm:text-sm font-extrabold text-[#0D7A68] mt-0.5 block">{program.seats || "Merit Based"}</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Accreditation</span>
                <span className="text-xs font-bold text-slate-800 mt-0.5 block line-clamp-1">{accreditationText}</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Campus</span>
                <span className="text-xs font-bold text-slate-800 mt-0.5 block">Kasur Campus</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="pt-3 border-t border-slate-100">
              <h4 className="font-extrabold text-xs sm:text-sm text-[#0B1B4F] mb-2.5">Institutional Advantages:</h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {highlightsList.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A68] flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* TAB 2: ELIGIBILITY & REQUIREMENTS */}
        {activeTab === "requirements" && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0D7A68] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Admission Guidelines
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0B1B4F] mt-2 mb-1.5">
                Official Eligibility & Merit Criteria
              </h3>
              <p className="text-xs text-slate-500">
                Candidates must satisfy statutory eligibility criteria set by the regulatory council and university.
              </p>
            </div>

            <div className="bg-teal-50/70 border border-teal-200 p-4 rounded-2xl">
              <div className="text-[11px] font-bold text-[#0D7A68] uppercase tracking-wider mb-1">
                Academic Qualification Required:
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-[#0B1B4F] leading-snug">
                {program.eligibility}
              </div>
            </div>

            <div className="space-y-2.5 pt-1">
              <h4 className="font-extrabold text-xs sm:text-sm text-[#0B1B4F]">Mandatory Documents for Verification:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A68] flex-shrink-0" />
                  <span>Matric / SSC Certificate (Attested)</span>
                </li>
                <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A68] flex-shrink-0" />
                  <span>F.Sc / HSSC Result Card</span>
                </li>
                <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A68] flex-shrink-0" />
                  <span>CNIC or B-Form Copy of Candidate</span>
                </li>
                <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A68] flex-shrink-0" />
                  <span>Father / Guardian CNIC Copy</span>
                </li>
                <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A68] flex-shrink-0" />
                  <span>6 Passport Photographs (Blue)</span>
                </li>
                <li className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A68] flex-shrink-0" />
                  <span>Domicile Certificate (Punjab)</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 3: CURRICULUM & TRAINING */}
        {activeTab === "curriculum" && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0D7A68] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Study Modules
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0B1B4F] mt-2 mb-1.5">
                Curriculum, Subjects & Training
              </h3>
              <p className="text-xs text-slate-500">
                Course outline formulated in accordance with PNMC, NEBP, and HEC standard guidelines.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {subjectsList.map((subject, idx) => (
                <div key={idx} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-teal-100 text-[#0D7A68] flex items-center justify-center font-black text-xs flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-extrabold text-xs sm:text-sm text-[#0B1B4F]">{subject}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Practical & lab assessment included</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#0B1B4F] text-white p-4 rounded-2xl flex items-center gap-3 mt-3">
              <Stethoscope className="w-7 h-7 text-[#F59E0B] flex-shrink-0" />
              <div>
                <div className="font-bold text-xs sm:text-sm">Hospital Bedside Ward System</div>
                <div className="text-[11px] text-slate-300 mt-0.5">Supervised clinical rotations in affiliated teaching hospitals.</div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CAREER SCOPE & JOBS */}
        {activeTab === "scope" && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0D7A68] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Future Pathways
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0B1B4F] mt-2 mb-1.5">
                Career Scope & Employment Pathways
              </h3>
              <p className="text-xs text-slate-500">
                National and international job opportunities available for graduates of this program.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {program.scope || "Graduates from PIASS College hold recognized statutory credentials that open immediate appointment pathways across DHQ/THQ public hospitals, military healthcare facilities, private teaching hospitals, and leading multinational firms."}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-3.5 rounded-2xl border border-slate-200 bg-white">
                <div className="font-black text-xs sm:text-sm text-[#0B1B4F] mb-1">Government Hospitals</div>
                <p className="text-[11px] text-slate-500">Eligible for public sector hospital inductions via PPSC merit.</p>
              </div>

              <div className="p-3.5 rounded-2xl border border-slate-200 bg-white">
                <div className="font-black text-xs sm:text-sm text-[#0B1B4F] mb-1">Private Healthcare</div>
                <p className="text-[11px] text-slate-500">Immediate induction in private hospitals and corporate firms.</p>
              </div>

              <div className="p-3.5 rounded-2xl border border-slate-200 bg-white">
                <div className="font-black text-xs sm:text-sm text-[#0B1B4F] mb-1">Overseas Migration</div>
                <p className="text-[11px] text-slate-500">Eligible for NCLEX-RN, UK NMC, and Gulf Prometric / DHA exams.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: FACULTY & STAFF */}
        {activeTab === "faculty" && (
          <div className="space-y-5 animate-in fade-in duration-200">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#0D7A68] bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                Academic Mentors
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0B1B4F] mt-2 mb-1.5">
                Departmental Faculty & Teaching Staff
              </h3>
              <p className="text-xs text-slate-500">
                Experienced medical doctors, senior nursing officers, and professors for this discipline.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {facultyList.map((teacher, idx) => (
                <div key={idx} className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/90 flex items-start gap-3 hover:border-[#0D7A68] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#0D7A68] flex items-center justify-center font-black text-sm flex-shrink-0">
                    {teacher.name.split(" ").slice(-1)[0][0] || "T"}
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="font-black text-xs sm:text-sm text-[#0B1B4F] truncate">{teacher.name}</h4>
                    <div className="text-[11px] font-bold text-[#0D7A68]">{teacher.role}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5 truncate">{teacher.qual}</div>
                    <div className="text-[10px] text-slate-400 mt-1 border-t border-slate-200 pt-1">
                      {teacher.specialty}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}