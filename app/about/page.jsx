import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Award, 
  Stethoscope, 
  Laptop, 
  BookOpen, 
  Users, 
  Eye, 
  CheckCircle2, 
  Building2, 
  ArrowRight, 
  Zap, 
  Video, 
  Droplet, 
  GraduationCap, 
  Lock, 
  Sparkles, 
  PhoneCall, 
  HeartHandshake, 
  Check, 
  Clock, 
  Layers 
} from "lucide-react";
import { collegeInfo, affiliationsData } from "@/data/affiliationsData";

export const metadata = {
  title: "About Us | PIASS College of Nursing & Sciences Kasur",
  description:
    "Comprehensive institutional profile of PIASS College Kasur. Leadership, distinguished M.Phil/PhD faculty, clinical simulation labs, female safety, smart multimedia classrooms, and campus facilities.",
};

export default function AboutPage() {
  
  // 1. LEADERSHIP & EXECUTIVE DIRECTORATE
  const leadershipTeam = [
    {
      role: "Managing Director & Chief Executive",
      name: "Prof. Dr. M. Arshad (Consultant)",
      degrees: "M.B.B.S, F.C.P.S, M.Phil (Medical Sciences)",
      experience: "25+ Years Clinical & Academic Experience",
      message: "Our supreme priority at PIASS Kasur is to deliver uncompromised medical and computing ethics. We prepare professionals who treat healthcare not just as a job, but as a sacred public duty.",
      image: "/images/17.avif",
      badge: "Medical Directorate"
    },
    {
      role: "Vice Director & Principal (Nursing Affairs)",
      name: "Prof. Tahira Parveen (Senior Nursing Officer)",
      degrees: "MSN (Nursing), Post RN BSN, Registered Nurse (RN/RM)",
      experience: "18+ Years Hospital Nursing Administration",
      message: "We train our nursing daughters with rigorous bedside discipline. Through hands-on hospital rotations and simulated skill labs, our graduates become leaders in emergency wards across Punjab.",
      image: "/images/17.avif",
      badge: "Clinical Nursing Directorate"
    },
    {
      role: "Director Administration & Academic Operations",
      name: "Engr. Tariq Mahmood",
      degrees: "M.S (Software Engineering), M.Phil (CS / Operations)",
      experience: "15+ Years Higher Education Management",
      message: "From high-speed fiber-optic computer labs to uninterrupted power supply and strict gate security, we ensure that students study in a 100% safe, disciplined, and technologically modern campus.",
      image: "/images/22.avif",
      badge: "Campus Operations"
    }
  ];

  // 2. FACULTY DIVISIONS (Qualified Male & Female Cadres)
  const facultyDepartments = [
    {
      dept: "Department of Clinical Nursing & Sciences",
      qualification: "MSN, Post RN, MBBS Clinical Doctors",
      description: "Dedicated team of registered nursing tutors and senior medical doctors overseeing clinical pharmacology, anatomy, surgical nursing, and bedside training.",
      femaleRatio: "65% Female Nursing Instructors (Providing comfort & mentorship for female students)",
      cadre: "Clinical & Hospital Training"
    },
    {
      dept: "Department of Computer Science & IT",
      qualification: "M.Phil / MS Computer Science & Software Engineers",
      description: "Seasoned coding mentors and network engineers training students in programming, web development, data structures, and computer lab practicals.",
      femaleRatio: "Co-educational Faculty with specialized lab demonstrators",
      cadre: "Software & Technology"
    },
    {
      dept: "Department of Management & Business Studies",
      qualification: "MBA, M.Phil Management Sciences",
      description: "Faculty members with corporate exposure delivering interactive lectures in financial accounting, marketing strategy, and business management.",
      femaleRatio: "Experienced Senior Lecturers",
      cadre: "Corporate Management"
    },
    {
      dept: "Department of English Literature & Humanities",
      qualification: "M.Phil English (Linguistics & Literature)",
      description: "Language experts focusing on spoken English fluency, technical writing, academic grammar, and professional clinical communication.",
      femaleRatio: "Dedicated English Language Mentors",
      cadre: "Communication Skills"
    }
  ];

  // 3. SPECIALIZED SEPARATE LABORATORIES
  const labFacilities = [
    {
      title: "Medical & Nursing Skill Simulation Lab",
      category: "Healthcare Practicals",
      desc: "Equipped with life-sized anatomical mannequins, multi-parameter vital sign monitors, hospital patient beds, IV therapy stations, and sterile catheterization models for zero-risk practice.",
      image: "/images/18.avif",
      points: ["Full-Body Clinical Mannequins", "Emergency Crash Cart & IV Setups", "Bedside Hygiene Simulation"]
    },
    {
      title: "Advanced Computer Science & IT Lab",
      category: "Computing & Software",
      desc: "Fully air-conditioned computer laboratory with branded Core i7 workstations, high-speed fiber internet, Linux/Windows environments, and projection monitors for coding sessions.",
      image: "/images/24.webp",
      points: ["Dedicated Individual Workstations", "High-Speed Fiber Connectivity", "Modern Software Development IDEs"]
    },
    {
      title: "Anatomy, Physiology & Science Demonstration Lab",
      category: "Foundational Medical Sciences",
      desc: "Spacious laboratory featuring detailed skeletal models, human organ charts, histological microscopes, and chemical reagents for practical bio-science experiments.",
      image: "/images/25.webp",
      points: ["Complete Human Skeleton & Organ Models", "High-Resolution Microscopes", "Hands-on Dissection Displays"]
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      
      {/* 1. HERO HEADER BANNER */}
      <section className="bg-gradient-to-r from-[#071233] via-[#0B1B4F] to-[#0A2540] text-white py-16 sm:py-24 border-b-4 border-[#0D7A68]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-[#F59E0B] text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-md">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              Institutional Profile • Kasur Campus
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              About PIASS College of <span className="text-[#0D7A68]">Nursing & Sciences</span>
            </h1>
            <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed">
              Established on Main Ferozpur Road Kasur, PIASS College is a recognized seat of healthcare learning and higher degree education, officially accredited by PNMC Islamabad, NEBP Lahore, and affiliated with leading state universities.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL ESSENCE: VISION, MISSION & LEGAL CREDIBILITY */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
                Our Foundational Ethos
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0B1B4F] tracking-tight leading-tight">
                Empowering Kasur with World-Class Healthcare & Technological Expertise
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                PIASS College was founded with the mission to eliminate the need for students of Kasur district to travel to distant cities for quality nursing and degree education. By uniting direct teaching hospital affiliations with modern computing laboratories, we provide an inspiring, highly disciplined learning atmosphere.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-[#0D7A68] flex items-center justify-center font-black mb-3">
                    🎯
                  </div>
                  <h3 className="font-extrabold text-base text-[#0B1B4F]">Institutional Vision</h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    To be the foremost center of clinical nursing and computing excellence in Punjab, recognized for zero-compromise patient care ethics and professional competence.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black mb-3">
                    💡
                  </div>
                  <h3 className="font-extrabold text-base text-[#0B1B4F]">Educational Mission</h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    To nurture compassionate nurses, certified midwives, and technology professionals through personalized mentorship, advanced simulation labs, and clinical hospital rotations.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/17.avif"
                  alt="Students at PIASS Campus"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200">
                  <div className="text-xs font-bold text-[#0D7A68] uppercase">Legal Status</div>
                  <div className="text-sm font-black text-[#0B1B4F] mt-0.5">Approved by PNMC, NEBP & Punjab Govt</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Affiliated with University of Education & IUB</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. EXECUTIVE DIRECTORATE & PRINCIPAL SPOTLIGHT (Formal Leadership) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200">
              Governance & Leadership
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B4F] tracking-tight mt-3">
              Board of Academic & Medical Directorate
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-3">
              PIASS is led by seasoned medical consultants, clinical nursing superintendents, and higher education managers with decades of institutional experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo with Badge */}
                  <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-[#0B1B4F] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-md">
                      {leader.badge}
                    </span>
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[11px] font-bold text-[#F59E0B] block">{leader.role}</span>
                      <h3 className="text-lg font-black leading-snug">{leader.name}</h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Degree & Certification Chip */}
                    <div className="bg-white p-3 rounded-xl border border-slate-200 mb-4">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Qualifications:</div>
                      <div className="text-xs font-black text-[#0D7A68] mt-0.5">{leader.degrees}</div>
                      <div className="text-[11px] text-slate-500 font-semibold mt-0.5">{leader.experience}</div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-[#0D7A68] pl-3">
                      "{leader.message}"
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#0B1B4F]">
                    <ShieldCheck className="w-4 h-4 text-[#0D7A68]" /> Verified Institutional Directorate
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. DISTINGUISHED FACULTY CADRES & TEACHING METHODOLOGY */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-14">
            <div className="lg:col-span-8">
              <span className="text-xs font-black uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200">
                Academic Staff & Mentorship
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B4F] tracking-tight mt-3">
                Highly Qualified M.Phil, PhD & Clinical Faculty
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2">
                We believe that great colleges are defined by their teachers. PIASS Kasur maintains a balanced, highly credentialed cadre of male and female educators, ensuring that both clinical nursing concepts and computer science principles are thoroughly explained.
              </p>
            </div>

            {/* Respectful Female & Male Teacher Representation Card */}
            <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              {/* Minimalist culturally dignified avatar */}
              <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-[#0D7A68]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C9.243 2 7 4.243 7 7c0 2.21 1.442 4.085 3.447 4.745C7.432 12.637 5 15.534 5 19v1h14v-1c0-3.466-2.432-6.363-5.447-7.255C15.558 11.085 17 9.21 17 7c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0 9c3.309 0 6 2.691 6 6H6c0-3.309 2.691-6 6-6z" />
                </svg>
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-[#0B1B4F]">Dedicated Female & Male Faculty</h4>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  Senior female nursing officers provide full comfort and personalized mentorship for female students.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Academic Department Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facultyDepartments.map((f, idx) => (
              <div key={idx} className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0D7A68] bg-teal-50 px-2.5 py-1 rounded">
                      {f.cadre}
                    </span>
                    <span className="text-xs font-bold text-slate-400">M.Phil / MS Standards</span>
                  </div>

                  <h3 className="text-lg font-black text-[#0B1B4F] mb-1.5">
                    {f.dept}
                  </h3>

                  <div className="text-xs font-bold text-[#F59E0B] mb-3">
                    Faculty Qualifications: {f.qualification}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {f.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0D7A68] flex-shrink-0" />
                  <span>{f.femaleRatio}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. DEDICATED FEMALE STUDENT PROTECTION & PARENTAL PEACE OF MIND */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-[#071233] to-[#0B1B4F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 bg-[#F59E0B] text-slate-950 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow">
                <Lock className="w-3.5 h-3.5" /> Special Message for Parents & Female Students
              </span>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                A Secure, Respectful & Fully Protected Campus for Daughters
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                In our society, nothing matters more than the honor, safety, and respect of our daughters. PIASS Kasur has enforced uncompromising security protocols and an ethical campus culture so female students can pursue professional medical degrees with total confidence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="w-8 h-8 rounded-lg bg-teal-400 text-slate-950 flex items-center justify-center font-black mb-2">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white">Dedicated Female Common Rooms</h4>
                  <p className="text-xs text-slate-300 mt-1">Spacious, private waiting halls and study areas reserved exclusively for female students.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black mb-2">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white">Female Proctors & Mentors</h4>
                  <p className="text-xs text-slate-300 mt-1">Resident female teachers oversee student discipline, well-being, and grievance resolution.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="w-8 h-8 rounded-lg bg-teal-400 text-slate-950 flex items-center justify-center font-black mb-2">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white">Zero Tolerance Policy</h4>
                  <p className="text-xs text-slate-300 mt-1">Strict anti-harassment regulations and non-negotiable campus code of conduct enforced 24/7.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black mb-2">
                    <Video className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-white">Controlled Gate Entry</h4>
                  <p className="text-xs text-slate-300 mt-1">No unauthorized outsider can enter campus gates without computerized identity checks.</p>
                </div>

              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/23.avif"
                  alt="Female Nursing Students in Clinical Lab"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold text-[#F59E0B] uppercase">Parental Trust</span>
                  <div className="text-base font-black mt-0.5">Where Daughters Build Honorable Careers</div>
                  <p className="text-xs text-slate-300 mt-1">Over 60% of our enrolled medical scholars are female students.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. SMART MULTIMEDIA CLASSROOMS & CLIMATE-CONTROLLED LEARNING */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
                Classroom Infrastructure
              </span>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B4F] tracking-tight leading-tight">
                Bright, Ventilated (Hawadar) & Multimedia Smart Lecture Rooms
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A student cannot concentrate in dark, cramped, or suffocating rooms. Our purpose-built campus architecture ensures natural sunlight, cross-ventilation, and modern climate management so that neither severe summer heat nor winter cold disturbs lectures.
              </p>

              <div className="space-y-3.5 pt-2">
                
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-[#0D7A68] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0B1B4F]">High-Definition Video Projectors</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Ceiling-mounted HD multimedia projectors connected to faculty laptops display 3D anatomical animations, surgery videos, and live programming demos.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0B1B4F]">Spacious & Cross-Ventilated Architecture</h4>
                    <p className="text-xs text-slate-500 mt-0.5">High ceilings, wide windows, and cross-ventilation ensure constant fresh air circulation and bright daylight across all lecture halls.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0B1B4F]">Strict Attendance & Automated Parent SMS</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Biometric student attendance is recorded daily. In case of unexcused absence, automated SMS notifications are dispatched immediately to parents.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100">
                <Image
                  src="/images/24.avif"
                  alt="Multimedia Lecture Hall"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/85 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200">
                  <div className="text-sm font-black text-[#0B1B4F]">Audio-Visual Smart Lecture Halls</div>
                  <div className="text-xs text-slate-600 mt-0.5">Interactive multimedia teaching with focused student seating.</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. SEPARATE SPECIALIZED LABS: MEDICAL SIMULATION VS IT SOFTWARE */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200">
              Hands-On Practicals
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B4F] tracking-tight mt-3">
              Independent Healthcare & Computing Laboratories
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-3">
              We do not combine medical and computer labs. PIASS Kasur maintains completely separated, specialized experimental environments for clinical healthcare and IT development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {labFacilities.map((lab, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={lab.image}
                      alt={lab.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-[#0B1B4F] text-white text-[10px] font-black px-3 py-1 rounded-md shadow">
                      {lab.category}
                    </span>
                    <h3 className="absolute bottom-3 left-4 right-4 text-white text-base font-black leading-snug">
                      {lab.title}
                    </h3>
                  </div>

                  <div className="p-6">
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {lab.desc}
                    </p>

                    <ul className="space-y-2 text-xs font-semibold text-slate-800">
                      {lab.points.map((p, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D7A68] flex-shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="text-[11px] font-bold text-[#0D7A68] bg-teal-50 p-2.5 rounded-xl border border-teal-100 text-center">
                    ✓ Regular Practical Exam Demonstrations
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. MEDICAL & ACADEMIC REFERENCE LIBRARY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-r from-slate-50 to-blue-50/40 rounded-3xl border border-slate-200 p-8 sm:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-black uppercase tracking-widest text-[#0B1B4F] bg-blue-100 px-3.5 py-1.5 rounded-full">
                  Learning Resource Center
                </span>
                
                <h2 className="text-2xl sm:text-4xl font-black text-[#0B1B4F] tracking-tight leading-tight">
                  Comprehensive Medical & Academic Reference Library
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  Our quiet, well-stocked central library provides thousands of volumes spanning international nursing editions, medical surgical guides, pharmacology manuals, and computer science textbooks. Students have access to quiet study carrels and digital academic materials.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/80">
                    <BookOpen className="w-4 h-4 text-[#0D7A68]" />
                    <span>International Nursing Textbooks</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/80">
                    <Laptop className="w-4 h-4 text-[#0B1B4F]" />
                    <span>Computer Science & IT Handbooks</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/80">
                    <Award className="w-4 h-4 text-[#F59E0B]" />
                    <span>Past NEBP & University Board Papers</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200/80">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Quiet Individual Reading Desks</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <Image
                    src="/images/20.avif"
                    alt="Campus Library"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                    Knowledge Hub: Continuous Study & Research Environment
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 9. CAMPUS UTILITIES: GENERATOR / UPS, 24/7 CCTV & MINERAL RO WATER */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-4 py-1.5 rounded-full border border-teal-200">
              Uninterrupted Operations
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B1B4F] tracking-tight mt-3">
              Reliable Utilities & Campus Security Systems
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-3">
              Power cuts or hygiene issues can compromise study hours. We maintain industrial infrastructure to ensure continuous, worry-free education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Generator / UPS */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#0B1B4F] mb-2">
                  Heavy Generator & Central UPS
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dual-layer backup power system. Automatic commercial diesel generator paired with an uninterrupted UPS network guarantees that coding practicals, video lectures, and exams never pause during city load-shedding.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-amber-700">
                ✓ 100% Zero Power Interruption
              </div>
            </div>

            {/* 24/7 CCTV Cameras */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-teal-100 text-[#0D7A68] flex items-center justify-center mb-4">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#0B1B4F] mb-2">
                  Complete CCTV Camera Coverage
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-resolution surveillance cameras cover all corridors, main gates, computer laboratories, and perimeter boundaries. The live feeds are supervised by the administrative security control room.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-[#0D7A68]">
                ✓ Monitored Campus Discipline
              </div>
            </div>

            {/* Clean RO Water */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
                  <Droplet className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#0B1B4F] mb-2">
                  Multi-Stage RO Mineral Drinking Water
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Health begins with pure water. Our campus is equipped with an industrial Reverse Osmosis (RO) filtration plant with electric water chillers, providing lab-tested, hygienic drinking water across all floors.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-bold text-blue-800">
                ✓ Pure, Filtered & Chilled Water
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. DEDICATED SUPPORT, SECURITY & SANITATION STAFF */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
              Campus Operations & Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1B4F] tracking-tight mt-3">
              Committed Security, Housekeeping & Technical Staff
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Beyond professors, a dedicated operations team works quietly every day to ensure cleanliness, safety, and rapid resolution of campus issues.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-9 h-9 rounded-xl bg-teal-100 text-[#0D7A68] flex items-center justify-center font-black mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-sm sm:text-base text-[#0B1B4F]">Trained Gate Security Guards</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Courteous yet vigilant uniformed security personnel stationed at entry and exit gates, performing visitor verification, student bag inspection, and perimeter safety.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-black mb-3">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-sm sm:text-base text-[#0B1B4F]">Active Housekeeping & Sanitation</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Full-time sanitation staff performing continuous floor sweeping, dust sanitization of laboratories, and strict hygiene maintenance of student washrooms.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-sm sm:text-base text-[#0B1B4F]">Rapid Technical & Electrical Team</h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                On-campus electricians, plumbers, and network technicians who swiftly address any water dispenser, generator, projector, or computer workstation requirement.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 11. STUDENT HOLISTIC GROWTH & CHARACTER BUILDING */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-black uppercase tracking-widest text-[#0D7A68]">Character & Ethics</span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1B4F] tracking-tight mt-2">
            Beyond Degrees: Character, Compassion & Ethical Leadership
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
            Healthcare is built on empathy. Our students participate in clinical ethics workshops, hospital orientation sessions, personality grooming, and emergency life-support drills to emerge as responsible citizens of Pakistan.
          </p>
        </div>
      </section>

      {/* 12. CALL TO ACTION / VISIT KASUR CAMPUS */}
      <section className="bg-gradient-to-r from-[#071233] to-[#0B1B4F] text-white py-16 border-t-4 border-[#0D7A68]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">Experience PIASS in Person</span>
            <h3 className="text-2xl sm:text-4xl font-black mt-1">Visit Our Campus on Main Ferozpur Road</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-xl">
              Opposite New Bus Terminal Kasur. Meet the Directorate, inspect our clinical simulation and IT labs, and discuss admissions with faculty counselors.
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
              <span>Get Location & Directions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}