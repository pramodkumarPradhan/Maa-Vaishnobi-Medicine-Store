import React, { useState, useRef, useEffect } from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Calendar, MessageCircle, Phone, MapPin, Star, Play, X, ShieldCheck, Stethoscope, Sparkles } from "lucide-react";

interface HeroProps {
  onOpenAppointmentModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointmentModal }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Auto-play prevented by browser:", error);
        });
      }
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center pt-24 pb-16 bg-slate-950 text-white overflow-hidden"
    >
      {/* Full Background Slow Looping Local Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={(e) => {
            e.currentTarget.muted = true;
            e.currentTarget.play().catch(() => {});
          }}
          className="w-full h-full object-cover opacity-40 scale-105 pointer-events-none transition-opacity duration-1000"
        >
          <source src="/videos/hero_clinic_loop.mp4" type="video/mp4" />
          <img
            src="/images/hero_background.jpg"
            alt="Maa Vaishnobi Healthcare Clinic Balasore"
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 blur-[130px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/60 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>MAA VAISHNOBI HEALTHCARE • BALASORE</span>
          </div>

          <a
            href={BUSINESS_INFO.googleRating.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 text-xs text-amber-300 font-bold hover:bg-slate-800 backdrop-blur-md transition-all"
          >
            <div className="flex items-center gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span>{BUSINESS_INFO.googleRating.score} ★ ({BUSINESS_INFO.googleRating.reviewsCount}+ Reviews)</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & CTAs - MINIMAL TEXT */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Trusted Healthcare &amp; Genuine Medicines <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300">
                Right Here in Balasore
              </span>
            </h1>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-emerald-300 backdrop-blur-sm">
                <Stethoscope className="w-4 h-4 text-emerald-400" />
                6+ Visiting Specialist OPDs
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-teal-300 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-teal-400" />
                100% Genuine Pharmacy
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-semibold text-sky-300 backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-sky-400" />
                Jail Road, Balasore
              </span>
            </div>

            {/* Minimal Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-xl">
              Specialist doctor OPD consultation schedule and complete prescription medicine desk available daily.
            </p>

            {/* High Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/25 active:scale-95 transition-all"
              >
                <Calendar className="w-5 h-5 text-slate-950" />
                <span>Book Doctor Appointment</span>
              </button>

              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  "Hello Maa Vaishnobi Healthcare, I need help with doctor booking or prescription medicines."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider border border-slate-700 backdrop-blur-md active:scale-95 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>WhatsApp Pharmacy</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Direct Hotline: <strong className="text-white font-bold">{BUSINESS_INFO.phoneDisplay}</strong></span>
            </div>
          </div>

          {/* Right Floating Video Card Trigger & Quick Desk */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-5">
              
              {/* Card Header with Video Badge */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Polyclinic &amp; Pharmacy</h3>
                    <p className="text-xs text-slate-400">Jail Road, Balasore</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                  Open Today
                </span>
              </div>

              {/* Video Player Card Preview */}
              <div
                onClick={() => setIsVideoModalOpen(true)}
                className="group relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-700 cursor-pointer shadow-lg"
              >
                <img
                  src="/images/hero_background.jpg"
                  alt="Maa Vaishnobi Healthcare Clinic Video Tour"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors"></div>

                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 text-emerald-300 text-[11px] font-bold border border-slate-700">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  <span>Full HD Video Tour</span>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-slate-950 translate-x-0.5" />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <button
                  onClick={onOpenAppointmentModal}
                  className="p-3 rounded-xl bg-slate-800/90 hover:bg-emerald-500/20 border border-slate-700 hover:border-emerald-500/50 text-left transition-all group"
                >
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-400">Doctor OPD</span>
                  <span className="block text-xs font-bold text-white group-hover:text-emerald-300">Book OPD &rarr;</span>
                </button>

                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    "Hello Maa Vaishnobi Healthcare, I need prescription medicines."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-800/90 hover:bg-emerald-500/20 border border-slate-700 hover:border-emerald-500/50 text-left transition-all group"
                >
                  <span className="block text-[10px] uppercase tracking-wider font-bold text-slate-400">Pharmacy Desk</span>
                  <span className="block text-xs font-bold text-white group-hover:text-emerald-300">Order Online &rarr;</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Video Modal Lightbox */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
              <h3 className="font-bold text-white flex items-center gap-2 text-sm sm:text-base">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Maa Vaishnobi Healthcare Full Video Tour • Balasore
              </h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
                title="Maa Vaishnobi Healthcare Polyclinic & Medicine Store Balasore"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};



