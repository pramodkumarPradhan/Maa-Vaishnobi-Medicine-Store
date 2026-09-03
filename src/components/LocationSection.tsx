import React from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { MapPin, Clock, Phone, Navigation, MessageCircle, Map } from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 md:py-28 bg-[#ffffff]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Address & Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-200">
              <MapPin className="w-4 h-4 text-teal-700" />
              <span>VISIT IN PERSON</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.2]">
              Visit Us in Balasore
            </h2>

            <p className="font-body text-slate-600 text-base leading-relaxed">
              Conveniently situated on Jail Road in the heart of Manikhamb. Our facility provides simple road access, easy street parking, and on-site pharmacy services alongside the OPD clinic.
            </p>

            {/* Address Details Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Address &amp; Landmark
                  </h4>
                  <p className="text-slate-600 text-sm mt-0.5">
                    {BUSINESS_INFO.address.fullFormatted}
                  </p>
                  <span className="block text-xs font-semibold text-primary mt-1">
                    Landmark: {BUSINESS_INFO.address.landmark}
                  </span>
                  <span className="inline-block text-[11px] font-bold text-slate-600 bg-slate-200/80 px-2 py-0.5 rounded-md mt-1">
                    Google Plus Code: {BUSINESS_INFO.address.plusCode}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                <Clock className="w-6 h-6 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Opening Hours
                  </h4>
                  <p className="text-slate-600 text-sm mt-0.5">
                    Medicine Counter: {BUSINESS_INFO.openingHours.pharmacy}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {BUSINESS_INFO.openingHours.clinic}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-200">
                <Phone className="w-6 h-6 text-slate-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Direct Contact Desk
                  </h4>
                  <p className="text-slate-600 text-sm mt-0.5 font-medium">
                    +91 {BUSINESS_INFO.phoneDisplay}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-headline text-sm font-bold tracking-wide uppercase transition-all shadow-md active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-headline text-sm font-bold tracking-wide uppercase transition-all shadow-md active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW</span>
              </a>

              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  "Hello Maa Vaishnobi Clinic, I need location guidance"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-headline text-sm font-bold tracking-wide uppercase transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Map Card */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 p-4 rounded-3xl border border-slate-200 shadow-xl overflow-hidden relative">
              <div className="relative w-full h-[440px] rounded-2xl overflow-hidden bg-slate-900 flex flex-col items-center justify-center text-center p-8 text-white">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B192C] via-[#12233e] to-[#1E3E62] opacity-90"></div>
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(#fff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                ></div>
                <div className="relative z-10 max-w-sm flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-sky-900/60 mb-4 animate-bounce">
                    <MapPin className="w-8 h-8 fill-current" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 mb-6">
                    {BUSINESS_INFO.address.fullFormatted}
                  </p>
                  <a
                    href={BUSINESS_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-headline text-xs font-extrabold uppercase tracking-wider transition-all shadow-md active:scale-95"
                  >
                    <Map className="w-4 h-4 text-primary" />
                    <span>OPEN IN GOOGLE MAPS</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
