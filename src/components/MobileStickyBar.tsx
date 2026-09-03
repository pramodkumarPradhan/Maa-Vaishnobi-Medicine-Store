import React from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Phone, MessageCircle, Calendar } from "lucide-react";

interface MobileStickyBarProps {
  onOpenAppointmentModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenAppointmentModal,
}) => {
  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="fixed bottom-0 inset-x-0 z-40 flex sm:hidden items-center justify-around px-4 py-2 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl"
    >
      <a
        href={BUSINESS_INFO.phoneTel}
        className="flex flex-1 flex-col items-center justify-center text-slate-700 active:scale-95"
      >
        <Phone className="w-5 h-5 text-primary" />
        <span className="text-[11px] font-bold mt-0.5">CALL</span>
      </a>

      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center justify-center text-slate-700 active:scale-95"
      >
        <MessageCircle className="w-5 h-5 text-[#059669]" />
        <span className="text-[11px] font-bold mt-0.5">WHATSAPP</span>
      </a>

      <button
        onClick={onOpenAppointmentModal}
        className="flex flex-1 flex-col items-center justify-center py-1.5 px-3 rounded-xl bg-primary text-white active:scale-95"
      >
        <Calendar className="w-5 h-5" />
        <span className="text-[11px] font-bold mt-0.5">BOOK</span>
      </button>
    </aside>
  );
};
