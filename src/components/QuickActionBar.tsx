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
    <div className="relative z-20 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 -mt-2 sm:-mt-16 md:-mt-20 mb-8 sm:mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 md:gap-4 bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-900/10 border border-slate-200/80">
        {/* Action 1: Book Appointment */}
        <button
          onClick={onOpenAppointmentModal}
          className="group flex flex-col sm:flex-row items-center sm:items-start p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-sky-50/70 hover:bg-sky-100/70 border border-sky-100/80 transition-all duration-200 text-left active:scale-95 shadow-sm"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-sky-500 to-primary text-white flex items-center justify-center mb-1.5 sm:mb-0 sm:mr-3 shadow-md shadow-sky-500/25 group-hover:scale-105 transition-transform shrink-0">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="text-center sm:text-left">
            <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-700">
              Consultation
            </span>
            <span className="block text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
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
          className="group flex flex-col sm:flex-row items-center sm:items-start p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-100/80 transition-all duration-200 active:scale-95 shadow-sm"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center mb-1.5 sm:mb-0 sm:mr-3 shadow-md shadow-emerald-500/25 group-hover:scale-105 transition-transform shrink-0">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="text-center sm:text-left">
            <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-700">
              {BUSINESS_INFO.whatsappDisplay}
            </span>
            <span className="block text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
              WHATSAPP DESK
            </span>
          </div>
        </a>

        {/* Action 3: Call Now */}
        <a
          href={BUSINESS_INFO.phoneTel}
          className="group flex flex-col sm:flex-row items-center sm:items-start p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-blue-50/70 hover:bg-blue-100/70 border border-blue-100/80 transition-all duration-200 active:scale-95 shadow-sm"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center mb-1.5 sm:mb-0 sm:mr-3 shadow-md shadow-blue-600/25 group-hover:scale-105 transition-transform shrink-0">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="text-center sm:text-left">
            <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-700">
              {BUSINESS_INFO.phoneDisplay}
            </span>
            <span className="block text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
              CALL HELPLINE
            </span>
          </div>
        </a>

        {/* Action 4: Get Directions */}
        <a
          href={BUSINESS_INFO.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col sm:flex-row items-center sm:items-start p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-teal-50/70 hover:bg-teal-100/70 border border-teal-100/80 transition-all duration-200 active:scale-95 shadow-sm"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 text-white flex items-center justify-center mb-1.5 sm:mb-0 sm:mr-3 shadow-md shadow-teal-600/25 group-hover:scale-105 transition-transform shrink-0">
            <Navigation className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="text-center sm:text-left">
            <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-teal-700">
              {BUSINESS_INFO.address.locality}
            </span>
            <span className="block text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
              GET DIRECTIONS
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
