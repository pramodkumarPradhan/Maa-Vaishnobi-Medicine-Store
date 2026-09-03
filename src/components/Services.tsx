import React from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Pill, Stethoscope, Headphones, ArrowRight, Phone, MessageCircle } from "lucide-react";

interface ServicesProps {
  onOpenAppointmentModal: () => void;
}

export const Services: React.FC<ServicesProps> = ({
  onOpenAppointmentModal,
}) => {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-[#f8fafc] border-y border-slate-200/80"
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-headline">
              COMPREHENSIVE CAPABILITIES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-slate-900 mt-2 tracking-tight">
              Everything You Need, In One Place.
            </h2>
          </div>
          <p className="text-slate-600 text-base max-w-md">
            Combining in-stock medicine essentials with dedicated outpatient doctor consultation support.
          </p>
        </div>

        {/* Rich Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. MEDICINE STORE */}
          <div className="md:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-primary flex items-center justify-center mb-6">
                <Pill className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                PHARMACY COUNTER
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-3">
                Medicine Store
              </h3>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Everyday medicines, general healthcare essentials, and prompt availability verification handled with courteous counter assistance.
              </p>
              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  "Hello Maa Vaishnobi Medicine Store, I want to check medicine availability"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-headline font-bold text-sm tracking-wide group-hover:text-primary-dark"
              >
                <span>Enquire on WhatsApp</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-sky-50 to-transparent rounded-full pointer-events-none transform translate-x-12 translate-y-12"></div>
          </div>

          {/* 2. DOCTOR CONSULTATION */}
          <div className="md:col-span-5 bg-[#0B192C] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-sky-600/30 text-sky-300 flex items-center justify-center mb-6 border border-sky-400/30">
                <Stethoscope className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                OPD CLINIC
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 mb-3">
                Doctor Consultation
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Connect with visiting doctors and specialists across general medicine, child wellness, and outpatient clinical care.
              </p>
            </div>
            <div className="relative z-10 pt-4 border-t border-slate-800">
              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-2 text-sky-300 font-headline font-bold text-sm tracking-wide group-hover:text-white transition-colors"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* 3. PATIENT SUPPORT & ENQUIRIES */}
          <div className="md:col-span-12 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-8">
                <div className="w-11 h-11 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  COMMUNICATION
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
                  Patient Support &amp; Enquiries
                </h3>
              </div>

              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                    Direct Telephone Support Desk
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Call our front desk for quick stock verification, consultation timing details, and store directions.
                  </p>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="inline-flex items-center gap-1.5 text-primary font-bold text-sm hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Dial {BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                    Instant WhatsApp Assistance &amp; Walk-ins
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Convenient walk-in support on Jail Road and direct messaging via WhatsApp.
                  </p>
                  <a
                    href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                      "Hello Maa Vaishnobi Team"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-sm hover:underline"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Chat</span>
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
