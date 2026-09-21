import React from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Pill, ArrowRight, MapPin, ShieldCheck, Zap, Stethoscope, HeartHandshake } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Photo with Floating Visual Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group">
              <img
                src="/images/pharmacy_interior.jpg"
                alt="Maa Vaishnobi Healthcare pharmacy interior in Balasore"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>
              
              {/* Image Bottom Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-white">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed Healthcare Desk</span>
                </div>
                <p className="text-sm font-semibold text-slate-200 mt-1">
                  100% Genuine Medicines &amp; Specialist OPD Consultations on Jail Road, Balasore.
                </p>
              </div>
            </div>

            {/* Floating Counter Badge */}
            <div className="hidden sm:flex absolute -bottom-5 -right-5 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shrink-0">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider font-extrabold text-emerald-800">
                  Community Healthcare
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Trusted by 5,000+ Balasore Families
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: MINIMAL TEXT with Visual Highlights */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
              <Pill className="w-4 h-4 text-emerald-600" />
              <span>ABOUT MAA VAISHNOBI HEALTHCARE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Healthcare Made Simple, <br />
              <span className="text-emerald-600">Right When You Need It.</span>
            </h2>

            {/* Visual Feature Grid - NO PARAGRAPH WALLS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold mb-2">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Instant Pharmacy Counter</h4>
                <p className="text-xs text-slate-600 mt-1">Quick prescription fulfillment &amp; medicine availability check.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold mb-2">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">6+ Specialist Doctor OPDs</h4>
                <p className="text-xs text-slate-600 mt-1">Skin, Pediatrics, Neuro, O&amp;G, Oncology &amp; Urology.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">100% Genuine Medicines</h4>
                <p className="text-xs text-slate-600 mt-1">Guaranteed original brands with printed bill.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold mb-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Jail Road, Balasore</h4>
                <p className="text-xs text-slate-600 mt-1">Central location with easy parking &amp; walk-in desk.</p>
              </div>

            </div>

            {/* Quick Link Bar */}
            <div className="pt-2 border-t border-slate-100 flex items-center gap-6">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm hover:text-emerald-800 group"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="#location"
                className="inline-flex items-center gap-1.5 text-slate-600 font-bold text-xs hover:text-slate-900"
              >
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Get Directions to Shop</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

