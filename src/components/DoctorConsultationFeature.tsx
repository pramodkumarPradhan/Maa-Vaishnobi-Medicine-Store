import React from "react";
import { UserCheck, Stethoscope, Calendar, ArrowRight, CheckCircle2, MessageCircle, FileText } from "lucide-react";

interface DoctorConsultationFeatureProps {
  onOpenAppointmentModal: () => void;
}

export const DoctorConsultationFeature: React.FC<
  DoctorConsultationFeatureProps
> = ({ onOpenAppointmentModal }) => {
  return (
    <section
      id="clinic"
      className="py-16 md:py-24 bg-slate-100/70 border-t border-slate-200/80"
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Photo with Badge */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-900 group">
              <img
                src="/images/doctor_consultation.jpg"
                alt="Doctor consultation session at Maa Vaishnobi Clinic Balasore"
                className="w-full h-[400px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            </div>

            {/* Bottom Floating OPD Specialty Pill Bar */}
            <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800">
                  Daily OPD Schedule (6+ Visiting Specialists)
                </div>
                <div className="text-xs font-bold text-slate-900 flex flex-wrap gap-1 mt-0.5">
                  <span>Skin &amp; VD</span> • <span>Pediatrics</span> • <span>Neuro Psychiatry</span> • <span>O&amp;G</span> • <span>Oncology</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: MINIMAL TEXT 3-Step Process */}
          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span>SIMPLE 3-STEP APPOINTMENT</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Need to See a Specialist? <br />
              <span className="text-emerald-600">Book in 3 Easy Steps</span>
            </h2>

            {/* 3-Step Visual Cards - NO PARAGRAPH WALLS */}
            <div className="space-y-3 pt-1">
              
              {/* Step 1 */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-4 hover:border-emerald-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                  01
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    Pick Doctor Specialty
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">Select Skin, Pediatrics, Neuro, O&amp;G, Oncology or Urology.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-4 hover:border-emerald-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                  02
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    Send Quick WhatsApp Request
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">Your enquiry routes instantly to our clinic front desk.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-4 hover:border-emerald-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white font-black text-sm flex items-center justify-center shrink-0">
                  03
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Get Token &amp; Slot Confirmation
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">Reception verifies consultation time &amp; reserves your token.</p>
                </div>
              </div>

            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK SPECIALIST DOCTOR APPOINTMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

