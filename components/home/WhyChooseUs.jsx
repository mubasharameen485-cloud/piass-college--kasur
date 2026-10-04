import React from "react";
import Image from "next/image";
import { 
  Building2, 
  Stethoscope, 
  Laptop, 
  Bus, 
  ShieldCheck, 
  Award, 
  Users 
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Stethoscope,
      title: "Direct Teaching Hospital Affiliation",
      description: "Nursing & diploma students undergo real ward duties, ICU observations, and emergency room clinical shifts."
    },
    {
      icon: ShieldCheck,
      title: "100% Verified Regulatory Approvals",
      description: "Full accreditation from PNMC Islamabad, NEBP Lahore, and degree programs affiliated with top state universities."
    },
    {
      icon: Laptop,
      title: "Dedicated Computer & IT Labs",
      description: "Equipped with high-performance workstations, fiber optic connectivity, and modern development environments."
    },
    {
      icon: Bus,
      title: "Transport & Safe Hostel Facilities",
      description: "Dedicated college transport routes across Kasur district and secure hostel arrangements for female students."
    },
    {
      icon: Users,
      title: "Experienced Senior Medical Faculty",
      description: "Classes delivered by specialized doctors, senior nursing officers, and industry seasoned computer instructors."
    },
    {
      icon: Award,
      title: "Merit & Need-Based Scholarships",
      description: "Financial assistance and fee concessions available for position holders and deserving students."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
              Why Choose PIASS Kasur
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-[#0B1B4F] tracking-tight leading-tight">
              A Trusted Center for <span className="text-[#0D7A68]">Professional Nursing</span> & Higher Education
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Located on Main Ferozpur Road Kasur, PIASS College of Nursing & Sciences bridges the gap between theoretical knowledge and practical workplace readiness. We provide modern clinical simulation and academic excellence.
            </p>

            {/* Feature Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {points.map((pt, index) => {
                const IconComponent = pt.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 text-[#0D7A68] mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xs sm:text-sm text-slate-900">{pt.title}</h3>
                      <p className="text-[11px] text-slate-500 leading-normal mt-0.5">{pt.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 h-[420px] sm:h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop"
                alt="Nursing Clinical Training"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B4F]/80 via-transparent to-transparent" />
              
              {/* Floating Stat Box */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg border border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#0B1B4F]">100% Clinical</div>
                    <div className="text-xs font-semibold text-slate-600">Hospital Rotations & Hands-on Practicals</div>
                  </div>
                  <span className="bg-[#F59E0B] text-slate-950 text-xs font-black px-3 py-1.5 rounded-lg shadow-sm">
                    PNMC Approved
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}