import React from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Calendar, MessageCircle } from "lucide-react";

interface FinalCTAProps {
  onOpenAppointmentModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onOpenAppointmentModal,
}) => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-sky-900 via-[#0B192C] to-[#12233e] text-white">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Need Medicines or a Doctor Consultation?
        </h2>

        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Visit our store on Jail Road or send a quick WhatsApp message for instant medicine checks and clinic appointment slots.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenAppointmentModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-sky-500 text-white font-headline text-sm font-bold tracking-wide uppercase transition-all shadow-lg active:scale-95"
          >
            <Calendar className="w-5 h-5" />
            <span>BOOK APPOINTMENT</span>
          </button>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-headline text-sm font-bold tracking-wide uppercase transition-all shadow-lg active:scale-95"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WHATSAPP US</span>
          </a>
        </div>

        <div className="text-sm text-slate-300 pt-2">
          Direct Desk:{" "}
          <a
            href={BUSINESS_INFO.phoneTel}
            className="text-sky-300 font-bold hover:underline"
          >
            +91 {BUSINESS_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
};
