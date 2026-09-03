import React from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Pill, ArrowRight, MapPin, ShieldCheck } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Organic Framed Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100">
              <img
                src="/images/pharmacy_interior.jpg"
                alt="Maa Vaishnobi medicine store interior and patient assistance counter in Balasore"
                className="w-full h-[460px] sm:h-[520px] object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/60 to-transparent text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                  MEDICINE STORE &amp; CLINIC
                </span>
                <p className="font-display text-lg font-medium text-slate-100 mt-1">
                  Dependable medicine counter, healthcare essentials, and helpful local guidance.
                </p>
              </div>
            </div>

            {/* Local Care Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-slate-500">
                  Community Healthcare
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Serving Balasore Families
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Copy & Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-primary text-xs font-bold uppercase tracking-wider border border-sky-200/60">
              <Pill className="w-4 h-4" />
              <span>ABOUT MAA VAISHNOBI</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.2]">
              Healthcare support that's closer to home.
            </h2>

            <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
              Established along Jail Road in Manikhamb,{" "}
              <strong className="text-slate-800 font-semibold">
                {BUSINESS_INFO.name}
              </strong>{" "}
              provides everyday pharmaceutical supplies and outpatient doctor consultation support for the residents of Balasore.
            </p>

            <p className="font-body text-slate-600 text-base leading-relaxed">
              Our counter team assists you with medicine availability, doctor appointment coordination, and patient support in a friendly, respectful setting. We work to make healthcare access prompt, straightforward, and reliable for you and your loved ones.
            </p>

            <div className="pt-4 border-t border-slate-200 flex items-center gap-6">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-primary font-headline text-base font-bold hover:text-primary-dark group"
              >
                <span>Discover Our Services</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-slate-300">|</span>
              <a
                href="#location"
                className="inline-flex items-center gap-1.5 text-slate-600 font-semibold text-sm hover:text-slate-900"
              >
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>Find Location</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
