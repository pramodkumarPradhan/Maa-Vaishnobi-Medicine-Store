import React from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Store, MessageCircle, Phone } from "lucide-react";

export const MedicineStoreFeature: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#ffffff]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B192C] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge text-sky-300 text-xs font-bold uppercase tracking-wider border border-sky-400/20">
                <Store className="w-4 h-4" />
                <span>PHARMACEUTICAL CARE COUNTER</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Your Local Medicine Store in Balasore
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Need to check medicine availability or have a pharmacy enquiry? Reach our team directly by phone or WhatsApp. We stock essential medicines and wellness supplies to meet the daily healthcare needs of our community.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    "Hello Maa Vaishnobi Pharmacy, I would like to check availability for a medicine"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-headline text-sm font-bold tracking-wide uppercase transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WHATSAPP ENQUIRY</span>
                </a>

                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-sky-500 text-white font-headline text-sm font-bold tracking-wide uppercase transition-all shadow-md active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>CALL NOW</span>
                </a>
              </div>

              <p className="text-xs text-slate-400 pt-2 italic border-t border-slate-800">
                Walk-in counter operating at {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.locality}, {BUSINESS_INFO.address.city}.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-700/60">
                <img
                  src="/images/pharmacy_interior.jpg"
                  alt="Maa Vaishnobi medicine store counter in Balasore"
                  className="w-full h-80 lg:h-96 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
