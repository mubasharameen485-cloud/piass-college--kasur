"use client";

import React from "react";
import Image from "next/image";

export default function AffiliationsStrip() {
  // 🎯 Kul 6 Official Accreditations
  const affiliations = [
    {
      name: "PNMC Islamabad",
      title: "Pakistan Nursing & Midwifery Council",
      image: "/logos/pnmc-logo.jpeg",
      fallback: "/logos/pnmc-logo.png"
    },
    {
      name: "NEBP Lahore",
      title: "Nursing Examination Board Punjab",
      image: "/logos/nebp-logo.jpeg",
      fallback: "/logos/nebp-logo.png"
    },
    {
      name: "Govt. of Punjab",
      title: "Health & Education Department, Government of Punjab",
      image: "/logos/punjab-govt.jpeg",
      fallback: "/logos/punjab-govt.png"
    },
    {
      name: "IUB Bahawalpur",
      title: "The Islamia University of Bahawalpur",
      image: "/logos/iub-logo.jpeg",
      fallback: "/logos/iub-logo.png"
    },
    {
      name: "University of Education",
      title: "University of Education, Lahore",
      image: "/logos/ue-logo.jpeg",
      fallback: "/logos/ue-logo.png"
    },
    {
      name: "E-ROZGAR",
      title: "E-ROZGAR Training Program",
      image: "/images/26.jpeg", 
      fallback: "/images/26.jpeg"
    }
  ];

  // 🎯 Sirf 2 sets (6 + 6) taake double/bheed feel na ho aur 6th ke baad 1st aaye
  const scrollList = [...affiliations, ...affiliations];

  return (
    <section className="py-10 sm:py-12 bg-slate-50/70 border-b border-slate-200 overflow-hidden">
      
      {/* ⚡ Pure CSS Smooth Marquee (Speed 20s: Thori Tez Aur Smooth) */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes continuousMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logos-slider {
          display: flex;
          width: max-content;
          animation: continuousMarquee 20s linear infinite;
          will-change: transform;
        }
        .animate-logos-slider:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-[11px] font-black uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
          Recognized & Approved Affiliations
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-[#0B1B4F] mt-2">
          Degrees & Diplomas Accredited by National & Provincial Regulatory Bodies
        </h2>
      </div>

      {/* 🚀 MOVING LOGOS TRACK */}
      <div className="relative w-full overflow-hidden py-2">
        
        {/* Left & Right Smooth Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10 pointer-events-none" />

        {/* 🎯 Gap barha diya hai taake logos khulay khulay dikhein */}
        <div className="animate-logos-slider flex items-center gap-12 sm:gap-16 lg:gap-20">
          {scrollList.map((item, idx) => (
            <div
              key={idx}
              title={`${item.name} — ${item.title}`}
              className="group relative flex items-center justify-center cursor-pointer flex-shrink-0"
            >
              {/* 🎯 SIZE INCREASED: 100px - 112px (Ab chota bilkul feel nahi hoga) */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border-2 border-slate-200/90 shadow-sm group-hover:shadow-xl group-hover:border-[#0D7A68] flex items-center justify-center p-4 transition-all duration-300 group-hover:scale-105">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain filter group-hover:brightness-105 transition-all"
                  onError={(e) => {
                    if (item.fallback && e.target.src !== item.fallback) {
                      e.target.src = item.fallback;
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}g