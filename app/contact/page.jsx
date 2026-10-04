import React from "react";
import ContactSection from "@/components/home/ContactSection";

export const metadata = {
  title: "Contact & Location | PIASS College Kasur",
  description: "Get in touch with PIASS College of Nursing Kasur. Main Ferozpur Road, Opposite New Bus Terminal Kasur.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* Banner */}
      <section className="bg-[#071233] text-white py-16 lg:py-20 border-b-4 border-[#0D7A68]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#F59E0B] bg-blue-950 px-3.5 py-1.5 rounded-full border border-blue-900">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mt-4">
            Contact & Campus Location
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-3">
            Visit our admissions desk on Main Ferozpur Road Kasur or connect directly with our counselors via call or WhatsApp.
          </p>
        </div>
      </section>

      {/* Google Map + Inquiry Desk Component */}
      <ContactSection />

    </div>
  );
}