import React from "react";

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  center = true,
  className = ""
}) {
  return (
    <div className={`max-w-3xl mb-12 ${center ? "mx-auto text-center" : "text-left"} ${className}`}>
      {/* Category Badge */}
      {badge && (
        <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-[#0D7A68] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200 shadow-sm mb-3">
          {badge}
        </span>
      )}

      {/* Main Title with Highlight Option */}
      <h2 className="text-2xl sm:text-4xl font-black text-[#0B1B4F] tracking-tight leading-tight">
        {title}{" "}
        {highlight && <span className="text-[#0D7A68]">{highlight}</span>}
      </h2>

      {/* Descriptive Subtitle */}
      {subtitle && (
        <p className="mt-3 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}