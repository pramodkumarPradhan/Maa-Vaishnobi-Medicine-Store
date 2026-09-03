import React from "react";
import { Link } from "react-router-dom";
import { BUSINESS_INFO } from "../data/businessInfo";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-md border border-slate-200 space-y-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-primary flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500">
              {BUSINESS_INFO.name} • Effective Date: September 2026
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <p>
            At <strong>{BUSINESS_INFO.name}</strong>, accessible from{" "}
            {BUSINESS_INFO.address.fullFormatted}, we prioritize patient and visitor privacy. This Privacy Policy document outlines the types of information collected and how it is used.
          </p>

          <h2 className="font-bold text-base text-slate-900 pt-2">
            1. Information We Collect
          </h2>
          <p>
            When you use our appointment request modal or contact form, we collect information that you voluntarily provide to us, including your full name, phone number, age, gender, reason for visit, and additional notes.
          </p>

          <h2 className="font-bold text-base text-slate-900 pt-2">
            2. How We Use Your Information
          </h2>
          <p>
            The information you submit is used solely to coordinate OPD doctor consultations, confirm appointment slots via WhatsApp or phone call, answer pharmacy enquiries, and improve our healthcare service delivery.
          </p>

          <h2 className="font-bold text-base text-slate-900 pt-2">
            3. Data Sharing &amp; Third-Party Messaging
          </h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. Appointment requests routed through WhatsApp use Meta's end-to-end encrypted messaging infrastructure according to WhatsApp's standard terms of service.
          </p>

          <h2 className="font-bold text-base text-slate-900 pt-2">
            4. Contact Us
          </h2>
          <p>
            If you have questions regarding this Privacy Policy, you may contact our front desk desk at:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Phone: {BUSINESS_INFO.phoneDisplay}</li>
            <li>Address: {BUSINESS_INFO.address.fullFormatted}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
