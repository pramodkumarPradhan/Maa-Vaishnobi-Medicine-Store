import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, Stethoscope, ShoppingBag, ShieldCheck } from "lucide-react";
import { BUSINESS_INFO } from "../data/businessInfo";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "Which is the best medicine store in Balasore for 100% genuine prescription medicines?",
    answer:
      "Maa Vaishnobi Medicine Store & Clinic located on Jail Road, Manikhamb, Balasore is recognized as Balasore's premier pharmacy counter. We guarantee 100% genuine prescription medicines sourced directly from authorized pharmaceutical distributors, temperature-controlled insulin storage, OTC healthcare products, and surgical supplies.",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
  },
  {
    question: "What doctor OPD consultation services are available at Maa Vaishnobi Clinic Balasore?",
    answer:
      "Maa Vaishnobi Clinic provides OPD doctor consultations with experienced visiting specialist doctors in Balasore across General Medicine, Pediatrics (Child Specialist), Cardiology, Orthopedics, Gynecology, and Dermatology. Patients can book appointments online or call directly to confirm visiting schedules.",
    icon: <Stethoscope className="w-5 h-5 text-teal-400" />,
  },
  {
    question: "Can I order medicines online for local home delivery in Balasore?",
    answer:
      "Yes! Maa Vaishnobi Medicine Store offers local express medicine delivery within a 5 KM radius in Balasore. You can upload or send your prescription via WhatsApp (+91 98274 39139 / +91 78478 39139) or place an order directly on our website.",
    icon: <ShoppingBag className="w-5 h-5 text-sky-400" />,
  },
  {
    question: "What are the opening hours and contact numbers for Maa Vaishnobi Medicine Store & Clinic?",
    answer:
      "Our pharmacy counter is open 7 days a week from 7:30 AM to 10:00 PM. Specialist doctor OPD consultations are held daily according to doctor schedules. You can call or WhatsApp our desk at 9827439139 or 7847839139.",
    icon: <Phone className="w-5 h-5 text-amber-400" />,
  },
];

export const FaqSection: React.FC<{
  onOpenAppointmentModal: () => void;
  onOpenOrderMedicineModal: () => void;
}> = ({ onOpenAppointmentModal, onOpenOrderMedicineModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>Frequently Asked Questions • Balasore</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Everything You Need to Know About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-sky-300">
              Maa Vaishnobi Medicine Store & Clinic
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Find answers to common questions regarding 100% genuine medicine purchases, specialist OPD doctor appointments, and express home delivery in Balasore.
          </p>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-950/90 border-emerald-500/50 shadow-xl shadow-emerald-500/5"
                    : "bg-slate-950/50 border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 shrink-0">
                      {faq.icon}
                    </div>
                    <h3 className="font-bold text-white text-base sm:text-lg leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 animate-fadeIn">
                    <p>{faq.answer}</p>
                    
                    {idx === 0 && (
                      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-3">
                        <button
                          onClick={onOpenOrderMedicineModal}
                          className="text-xs font-bold text-emerald-400 hover:underline inline-flex items-center gap-1"
                        >
                          Order Genuine Medicine Now &rarr;
                        </button>
                      </div>
                    )}
                    {idx === 1 && (
                      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-3">
                        <button
                          onClick={onOpenAppointmentModal}
                          className="text-xs font-bold text-teal-400 hover:underline inline-flex items-center gap-1"
                        >
                          Book OPD Doctor Consultation &rarr;
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Local Address & Emergency Footer Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-950 to-sky-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-white text-base">Visit Us Today in Balasore</h4>
            <p className="text-xs text-slate-400 mt-1">
              {BUSINESS_INFO.address.fullFormatted} • Call: {BUSINESS_INFO.phoneDisplay}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAppointmentModal}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer"
            >
              Book OPD
            </button>
            <button
              onClick={onOpenOrderMedicineModal}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-300 border border-slate-700 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              Order Medicine
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
