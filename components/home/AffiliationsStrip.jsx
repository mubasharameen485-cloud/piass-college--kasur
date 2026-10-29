"use client";

import React from "react";
import Image from "next/image";

export default function AffiliationsStrip() {
  
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
      title: "Health & Education Department",
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
      title: "E-ROZGAR",
      image: "/images/26.jpeg", 
      fallback: "/images/26.jpeg"
    }
  ];

  // Infinite smooth loop ke liye list ko repeat kiya gaya hai
  const scrollList = [...affiliations, ...affiliations, ...affiliations];

  return (
    <section className="py-8 bg-slate-50/80 border-b border-slate-200 overflow-hidden">
      
      {/* ⚡ Pure CSS High-Performance Infinite Loop Animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes continuousMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logos-slider {
          display: flex;
          width: max-content;
          animation: continuousMarquee 28s linear infinite;
          will-change: transform;
        }
        .animate-logos-slider:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 text-center">
        <span className="text-[11px] font-black uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-3.5 py-1 rounded-full border border-teal-200">
          Recognized & Approved Affiliations
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-[#0B1B4F] mt-2">
          Degrees & Diplomas Accredited by National & Provincial Councils
        </h2>
      </div>

      {/* 🚀 MOVABLE CONTINUOUS LOGOS STRIP */}
      <div className="relative w-full overflow-hidden">
        
        {/* Left & Right Smooth Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Moving Slider Track */}
        <div className="animate-logos-slider flex items-center gap-5 py-2">
          {scrollList.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex-shrink-0 cursor-default"
            >
              {/* 🎯 BALANCED LOGO SIZE (Na bara na chota: 42px x 42px) */}
              <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-1 overflow-hidden flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    // Agar .jpeg na mile toh fallback try kare
                    if (item.fallback && e.target.src !== item.fallback) {
                      e.target.src = item.fallback;
                    }
                  }}
                />
              </div>

              {/* Text Info */}
              <div className="text-left pr-2">
                <div className="font-extrabold text-[#0B1B4F] text-xs leading-tight">
                  {item.name}
                </div>
                <div className="text-[10px] text-slate-500 font-medium leading-tight mt-0.5 max-w-[190px] truncate">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}