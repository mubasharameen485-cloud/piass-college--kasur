import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const facilities = [
  {
    title: "Nursing Skill Simulation Lab",
    desc: "Equipped with advanced medical mannequins, vital sign monitors, and clinical hospital beds for safe pre-clinical practice.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "High-Speed Computing Lab",
    desc: "Modern computer labs dedicated to BSCS and BSIT students with specialized programming tools and fast internet.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Medical & Academic Library",
    desc: "Extensive repository of healthcare journals, nursing textbooks, digital literature, and quiet study stations.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Anatomy & Science Laboratories",
    desc: "Well-ventilated labs with anatomical models, physiological charts, and equipment for foundational science experiments.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
  }
];

export default function CampusFacilities() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
            Infrastructure & Environment
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1B4F] tracking-tight mt-3">
            State-of-the-Art Campus Facilities
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Providing students with an environment that mirrors professional hospitals and software development companies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((f, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base text-[#0B1B4F] mb-1.5">
                    {f.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}