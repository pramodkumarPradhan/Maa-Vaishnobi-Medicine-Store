import React from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Phone, MessageCircle, X, PhoneCall, ShieldCheck } from "lucide-react";

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-900 space-y-6 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-sky-100 text-primary flex items-center justify-center mx-auto shadow-inner">
            <PhoneCall className="w-7 h-7" />
          </div>
          <h3 className="font-headline font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
            Call Reception Desk
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Select a phone line to place your call directly:
          </p>
        </div>

        {/* Phone Line Options */}
        <div className="space-y-3">
          {/* Option 1: Line 1 */}
          <a
            href={BUSINESS_INFO.phone1Tel}
            onClick={onClose}
            className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-sky-50 border-2 border-slate-200 hover:border-primary transition-all shadow-sm active:scale-98"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-primary text-white flex items-center justify-center font-bold shadow-md shadow-sky-600/20 group-hover:scale-105 transition-transform shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] font-extrabold text-sky-700 uppercase tracking-wider">
                  Line 1 (Primary)
                </span>
                <span className="block text-base font-extrabold text-slate-900 font-mono">
                  +91 {BUSINESS_INFO.phone1}
                </span>
              </div>
            </div>
            <span className="px-3.5 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-sm group-hover:bg-primary-dark transition-colors shrink-0">
              Call Now &rarr;
            </span>
          </a>

          {/* Option 2: Line 2 */}
          <a
            href={BUSINESS_INFO.phone2Tel}
            onClick={onClose}
            className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 border-2 border-slate-200 hover:border-emerald-500 transition-all shadow-sm active:scale-98"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-[11px] font-extrabold text-emerald-700 uppercase tracking-wider">
                  Line 2 (Secondary)
                </span>
                <span className="block text-base font-extrabold text-slate-900 font-mono">
                  +91 {BUSINESS_INFO.phone2}
                </span>
              </div>
            </div>
            <span className="px-3.5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-sm group-hover:bg-emerald-700 transition-colors shrink-0">
              Call Now &rarr;
            </span>
          </a>
        </div>

        {/* WhatsApp Alternative */}
        <div className="pt-3 border-t border-slate-100 text-center space-y-2">
          <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Prefer WhatsApp messaging?</span>
          </div>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors active:scale-98"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
