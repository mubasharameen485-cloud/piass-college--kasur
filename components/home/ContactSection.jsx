"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle, 
  ExternalLink 
} from "lucide-react";
import { collegeInfo } from "@/data/affiliationsData";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    program: "BS Nursing",
    city: "Kasur"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
            Admissions Desk 2026
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1B4F] tracking-tight mt-3">
            Visit Campus or Apply Today
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">
            Main Ferozpur Road, Opposite New Bus Terminal, Kasur. Our admission advisors are available 6 days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Inquiry Form */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Quick Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-[#0D7A68] flex items-center justify-center mb-2">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-500 font-semibold">Helpline Numbers</div>
                <a href={`tel:${collegeInfo.phoneNumbers[0]}`} className="block font-bold text-sm text-[#0B1B4F] hover:text-[#0D7A68] mt-0.5">
                  {collegeInfo.phoneNumbers[0]}
                </a>
                <a href={`tel:${collegeInfo.phoneNumbers[1]}`} className="block font-bold text-sm text-[#0B1B4F] hover:text-[#0D7A68]">
                  {collegeInfo.phoneNumbers[1]}
                </a>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-500 font-semibold">Official Email</div>
                <a href={`mailto:${collegeInfo.email}`} className="block font-bold text-xs sm:text-sm text-[#0B1B4F] hover:text-amber-600 mt-1 break-all">
                  {collegeInfo.email}
                </a>
                <div className="text-[11px] text-slate-500 mt-1">Mon - Sat (8am - 4pm)</div>
              </div>
            </div>

            {/* WhatsApp Direct Action Button */}
            <a
              href="https://wa.me/923041448481?text=Hello%20PIASS%20College%20Kasur,%20I%20want%20information%20about%20Admissions%202026"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-2xl shadow-md transition-all active:scale-98"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Direct WhatsApp Admissions Desk</span>
            </a>

            {/* Quick Online Admission Inquiry Form */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="font-extrabold text-base text-[#0B1B4F] mb-1">
                Quick Admission Inquiry (Session 2026)
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Fill this brief form and our team will contact you with fee details and prospectus.
              </p>

              {submitted ? (
                <div className="bg-teal-50 border border-teal-200 text-[#0D7A68] p-4 rounded-xl text-center text-xs font-bold">
                  <CheckCircle className="w-6 h-6 mx-auto mb-1 text-[#0D7A68]" />
                  Inquiry Received! Our Kasur Admission team will call you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Student Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D7A68]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile / WhatsApp Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D7A68]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      value={form.program}
                      onChange={(e) => setForm({ ...form, program: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D7A68] bg-white font-medium"
                    >
                      <option value="BS Nursing">BS Nursing (4 Yrs)</option>
                      <option value="Post RN">Post RN (2 Yrs)</option>
                      <option value="LHV / CMW / CNA">LHV / CMW / CNA</option>
                      <option value="BSCS / BSIT">BSCS / BSIT</option>
                      <option value="BBA / BS English">BBA / BS English</option>
                      <option value="ADP Programs">ADP Program</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Your City"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0D7A68]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#0B1B4F] hover:bg-[#0D7A68] text-white font-bold py-3 rounded-xl text-xs transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Right Column: Embedded Google Map of Kasur Campus */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B1B4F]">
                  <MapPin className="w-4 h-4 text-[#0D7A68]" />
                  <span>Main Ferozpur Road, Opposite New Bus Terminal, Kasur</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Kasur+New+Bus+Terminal+Ferozpur+Road"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#0D7A68] hover:underline flex items-center gap-1"
                >
                  <span>Open in App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Responsive Google Maps Iframe */}
              <div className="relative w-full h-[460px] rounded-xl overflow-hidden border border-slate-200 shadow-inner">
                <iframe
                  title="PIASS College Kasur Location"
                  src="https://maps.google.com/maps?q=Opposite%20New%20Bus%20Terminal,%20Ferozpur%20Road,%20Kasur,%20Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}