import React from "react";
import { UserCheck, Stethoscope, Calendar, ArrowRight, CheckCircle2, MessageCircle, FileText, Sparkles } from "lucide-react";

interface DoctorConsultationFeatureProps {
  onOpenAppointmentModal: () => void;
}

export const DoctorConsultationFeature: React.FC<
  DoctorConsultationFeatureProps
> = ({ onOpenAppointmentModal }) => {
  return (
    <section
      id="clinic"
      className="py-12 sm:py-16 bg-white border-t border-slate-200/80"
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clean Doctor Consultation Card */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group relative">
              <img
                src="/images/dr_lopita_nayak.jpg"
                alt="Dr. Lopita Nayak Skin & VD Specialist consultation at Maa Vaishnobi Medicine Store & Polyclinic Balasore"
                className="w-full h-[360px] sm:h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent"></div>

              {/* Top Doctor Badge */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-slate-900/90 backdrop-blur-md p-2.5 pr-4 rounded-2xl border border-slate-700 shadow-xl flex items-center gap-3">
                <img
                  src="/images/dr_lopita_nayak.jpg"
                  alt="Dr. Lopita Nayak"
                  className="w-11 h-11 rounded-xl object-cover border-2 border-emerald-400 shrink-0 shadow-md"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[10px] font-extrabold text-emerald-300 uppercase tracking-wider">
                      VISITING SPECIALIST OPD
                    </span>
                  </div>
                  <div className="text-xs font-extrabold text-white">Dr. Lopita Nayak</div>
                  <div className="text-[10px] font-medium text-slate-300">Skin &amp; VD Specialist • Balasore</div>
                </div>
              </div>

              {/* Bottom Schedule Pill Inside Container */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 flex items-center gap-3 shadow-lg">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    <span>Daily OPD Schedule (6+ Visiting Specialists)</span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 mt-0.5">
                    Skin &amp; VD • Pediatrics • Neuro Psychiatry • O&amp;G • Oncology
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Crisp White 3-Step Process */}
          <div className="lg:col-span-6 space-y-5">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>SIMPLE 3-STEP APPOINTMENT</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Need to See a Specialist? <br />
                <span className="text-emerald-600">Book in 3 Easy Steps</span>
              </h2>
            </div>

            {/* 3 Crisp White Step Cards */}
            <div className="space-y-2.5">
              
              {/* Step 01 */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-emerald-500/50 hover:bg-emerald-50/40 transition-colors flex items-center gap-3.5 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
                  01
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Select Doctor Specialty</span>
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-0.5 truncate">Skin, Pediatrics, Neuro, O&amp;G, Oncology or Urology</p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-emerald-500/50 hover:bg-emerald-50/40 transition-colors flex items-center gap-3.5 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
                  02
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Send Quick WhatsApp Request</span>
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-0.5 truncate">Routes directly to our front desk for instant processing</p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-emerald-500/50 hover:bg-emerald-50/40 transition-colors flex items-center gap-3.5 shadow-xs">
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                  03
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Get Token &amp; Slot Confirmation</span>
                  </h4>
                  <p className="text-[11px] text-slate-600 mt-0.5 truncate">Reception verifies timing &amp; reserves your token number</p>
                </div>
              </div>

            </div>

            {/* Crisp CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/20 active:scale-95 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>BOOK SPECIALIST DOCTOR APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
