import React from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Pill, Stethoscope, Headphones, ArrowRight, Phone, MessageCircle, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface ServicesProps {
  onOpenAppointmentModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  onOpenAppointmentModal,
}) => {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-slate-50 border-y border-slate-200/80"
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
              COMPREHENSIVE HEALTH SERVICES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 mt-2 tracking-tight">
              Everything You Need, In One Place.
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md font-medium">
            Combining authentic in-stock medicine supplies with visiting doctor OPD consultations.
          </p>
        </div>

        {/* Visual Asymmetric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* 1. MEDICINE STORE */}
          <div className="md:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Pill className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                  100% Genuine Pharmacy
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                PHARMACY &amp; MEDICINE DESK
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1 mb-3">
                Full-Service Medicine Store
              </h3>

              {/* Feature Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4">
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Prescription &amp; OTC Medicines
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                  <Zap className="w-4 h-4 text-amber-500" />
                  Instant WhatsApp Stock Check
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  Authentic Brands with GST Bill
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Daily Health &amp; Hygiene Items
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  "Hello Maa Vaishnobi Medicine Store, I want to check medicine availability"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Enquire Medicine Availability</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. DOCTOR CONSULTATION */}
          <div className="md:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 text-white rounded-3xl p-7 sm:p-9 border border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold border border-emerald-500/30">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                  6+ Visiting Doctors
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                SPECIALIST OPD CLINIC
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-3">
                Doctor Consultations
              </h3>

              {/* Visual Specialty Tags */}
              <div className="flex flex-wrap gap-1.5 my-4">
                {["Skin & VD", "Pediatrics", "Neuro Psychiatry", "O&G", "Oncology", "Urology"].map((dept) => (
                  <span
                    key={dept}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-[11px] font-bold text-emerald-300"
                  >
                    {dept}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={onOpenAppointmentModal}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
              >
                <Stethoscope className="w-4 h-4 text-slate-950" />
                <span>Book Doctor Appointment</span>
              </button>
            </div>
          </div>

          {/* 3. QUICK SUPPORT BAR */}
          <div className="md:col-span-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              
              <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0 md:pr-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-extrabold text-slate-900">
                      Need Quick Assistance?
                    </h3>
                    <p className="text-xs text-slate-500">Contact our Jail Road desk directly</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">Direct Hotline</span>
                      <span className="block text-xs font-bold text-slate-900">{BUSINESS_INFO.phoneDisplay}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">Call &rarr;</span>
                </a>

                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    "Hello Maa Vaishnobi Team, I need medical assistance."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/60 border border-slate-200 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">WhatsApp Counter</span>
                      <span className="block text-xs font-bold text-slate-900">Chat Instantly</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">Chat &rarr;</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

