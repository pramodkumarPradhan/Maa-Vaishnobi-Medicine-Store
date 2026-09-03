import React from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Calendar, MessageCircle, Phone, Navigation } from "lucide-react";

interface QuickActionBarProps {
  onOpenAppointmentModal: () => void;
}

export const QuickActionBar: React.FC<QuickActionBarProps> = ({
  onOpenAppointmentModal,
}) => {
  return (
    <div className="relative z-20 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-20 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-3xl shadow-xl shadow-slate-900/10 border border-slate-200/80">
        {/* Action 1: Book Appointment */}
        <button
          onClick={onOpenAppointmentModal}
          className="group flex flex-col sm:flex-row items-center sm:items-start p-4 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-slate-100 hover:border-sky-200 transition-all duration-200 text-left"
        >
          <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 shadow-md group-hover:scale-105 transition-transform shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div className="text-center sm:text-left">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-primary">
              Consultation
            </span>
            <span className="block text-sm font-extrabold text-slate-900">
              BOOK APPOINTMENT
            </span>
          </div>
        </button>

        {/* Action 2: WhatsApp Us */}
        <a
          href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
            "Hello Maa Vaishnobi Medicine Store & Clinic"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col sm:flex-row items-center sm:items-start p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 transition-all duration-200"
        >
          <div className="w-11 h-11 rounded-xl bg-[#059669] text-white flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 shadow-md group-hover:scale-105 transition-transform shrink-0">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div className="text-center sm:text-left">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-emerald-700">
              {BUSINESS_INFO.whatsappDisplay}
            </span>
            <span className="block text-sm font-extrabold text-slate-900">
              WHATSAPP
            </span>
          </div>
        </a>

        {/* Action 3: Call Now */}
        <a
          href={BUSINESS_INFO.phoneTel}
          className="group flex flex-col sm:flex-row items-center sm:items-start p-4 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-slate-100 hover:border-sky-200 transition-all duration-200"
        >
          <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 shadow-md group-hover:scale-105 transition-transform shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div className="text-center sm:text-left">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-primary">
              {BUSINESS_INFO.phoneDisplay}
            </span>
            <span className="block text-sm font-extrabold text-slate-900">
              CALL NOW
            </span>
          </div>
        </a>

        {/* Action 4: Get Directions */}
        <a
          href={BUSINESS_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col sm:flex-row items-center sm:items-start p-4 rounded-2xl bg-slate-50 hover:bg-teal-50 border border-slate-100 hover:border-teal-200 transition-all duration-200"
        >
          <div className="w-11 h-11 rounded-xl bg-teal-700 text-white flex items-center justify-center mb-2 sm:mb-0 sm:mr-3 shadow-md group-hover:scale-105 transition-transform shrink-0">
            <Navigation className="w-5 h-5" />
          </div>
          <div className="text-center sm:text-left">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-teal-800">
              {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.locality}
            </span>
            <span className="block text-sm font-extrabold text-slate-900">
              GET DIRECTIONS
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
