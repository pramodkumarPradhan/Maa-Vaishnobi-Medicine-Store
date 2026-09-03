import React from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Calendar, MessageCircle, Phone, MapPin, Star } from "lucide-react";

interface HeroProps {
  onOpenAppointmentModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-[96vh] flex items-center pt-24 pb-28 md:pb-36 overflow-hidden"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_background.jpg"
          alt="Modern Indian Healthcare Consultation at Maa Vaishnobi Clinic"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B192C]/95 via-[#0B192C]/85 to-[#0B192C]/65"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B192C]/30 to-[#0B192C]/90"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-3xl space-y-6 text-white">
          {/* Small Pill Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-badge text-sky-200 text-xs font-semibold tracking-wider uppercase border border-sky-400/30 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>
              MAA VAISHNOBI MEDICINE STORE &amp; CLINIC • BALASORE, ODISHA
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[62px] font-bold tracking-tight leading-[1.12] text-white drop-shadow-sm">
            Trusted Healthcare, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-200 to-teal-200">
              Right Here in Balasore.
            </span>
          </h1>

          {/* Supporting Narrative */}
          <p className="font-headline text-lg sm:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed text-balance">
            {BUSINESS_INFO.subtitle}
          </p>

          {/* Quick Contact & Location text */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 pt-1 pb-1">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="inline-flex items-center gap-1.5 text-sky-300 font-medium hover:underline"
            >
              <Phone className="w-4 h-4" />
              <span>+91 {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-500">•</span>
            <div className="inline-flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>
                {BUSINESS_INFO.address.street} • {BUSINESS_INFO.address.locality} • {BUSINESS_INFO.address.city}
              </span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onOpenAppointmentModal}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-sky-600 text-white font-headline text-sm font-bold tracking-wide uppercase shadow-lg shadow-sky-900/40 hover:shadow-sky-700/60 transition-all duration-200 active:scale-95"
            >
              <span>BOOK AN APPOINTMENT</span>
              <Calendar className="w-5 h-5" />
            </button>

            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl glass-badge hover:bg-white/20 text-white font-headline text-sm font-bold tracking-wide uppercase transition-all duration-200 active:scale-95 border border-white/25"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>WHATSAPP US</span>
            </a>
          </div>

          {/* Floating Glass Trust Badge */}
          <div className="pt-3">
            <a
              href={BUSINESS_INFO.googleRating.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl glass-badge border border-white/15 text-xs sm:text-sm font-medium text-slate-100 shadow-md hover:border-white/30 transition-all"
            >
              <div className="flex items-center gap-0.5 text-amber-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-gold" />
                ))}
              </div>
              <span className="font-semibold text-white">
                {BUSINESS_INFO.googleRating.score} ★ Google Rating
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-300">
                {BUSINESS_INFO.googleRating.reviewsCount} Google Reviews
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
