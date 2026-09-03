import React from "react";
import { UserCheck, Stethoscope, Calendar } from "lucide-react";

interface DoctorConsultationFeatureProps {
  onOpenAppointmentModal: () => void;
}

export const DoctorConsultationFeature: React.FC<
  DoctorConsultationFeatureProps
> = ({ onOpenAppointmentModal }) => {
  return (
    <section
      id="clinic"
      className="py-20 md:py-28 bg-[#f8fafc] border-t border-slate-200"
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Container */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <img
                src="/images/doctor_consultation.jpg"
                alt="Doctor consultation session at Maa Vaishnobi Clinic Balasore"
                className="w-full h-[460px] sm:h-[500px] object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm bg-white p-5 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-primary flex items-center justify-center shrink-0">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  OPD Sessions
                </div>
                <div className="text-sm font-bold text-slate-900">
                  General Medicine • Pediatrics • Gynaecology
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3-Step Process */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-200">
              <UserCheck className="w-4 h-4" />
              <span>CLINICAL CONSULTATIONS</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight leading-[1.2]">
              Need to See a Doctor?
            </h2>

            <p className="font-body text-slate-600 text-base sm:text-lg leading-relaxed">
              Request a consultation through our simple appointment process. We streamline scheduling so you and your family can connect with visiting doctors conveniently.
            </p>

            {/* 3-Step Numbered Visual Cards */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-2xl font-black text-primary font-headline">
                  01
                </span>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Fill Your Details
                  </h4>
                  <p className="text-slate-600 text-sm mt-0.5">
                    Provide patient name, phone number, and doctor department or health query.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-2xl font-black text-[#059669] font-headline">
                  02
                </span>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Send Request on WhatsApp
                  </h4>
                  <p className="text-slate-600 text-sm mt-0.5">
                    Your enquiry routes immediately to our clinic desk for real-time schedule matching.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="text-2xl font-black text-slate-800 font-headline">
                  03
                </span>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Clinic Confirms Availability
                  </h4>
                  <p className="text-slate-600 text-sm mt-0.5">
                    Our reception verifies the visiting slot, consultation hour, and patient token number.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenAppointmentModal}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-headline text-sm font-bold tracking-wide uppercase shadow-md active:scale-95 transition-all"
              >
                <span>BOOK A DOCTOR APPOINTMENT</span>
                <Calendar className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
