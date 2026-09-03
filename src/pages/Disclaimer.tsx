import React from "react";
import { Link } from "react-router-dom";
import { BUSINESS_INFO } from "../data/businessInfo";
import { ArrowLeft, AlertTriangle, ShieldAlert, FileText, Scale, PhoneCall } from "lucide-react";

export const Disclaimer: React.FC = () => {
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
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Medical &amp; Legal Disclaimer
            </h1>
            <p className="text-xs text-slate-500">
              {BUSINESS_INFO.name} • Effective Date: {BUSINESS_INFO.effectiveDate}
            </p>
          </div>
        </div>

        <div className="space-y-5 text-sm text-slate-700 leading-relaxed">
          <p>
            The information provided on this website by <strong>{BUSINESS_INFO.name}</strong> is intended for general informational, pharmaceutical stock enquiry, and outpatient appointment scheduling assistance only.
          </p>

          {/* Emergency Warning */}
          <div className="p-5 rounded-2xl bg-red-50 border-2 border-red-200 text-red-950 space-y-2">
            <div className="flex items-center gap-2 font-bold text-red-900 text-base">
              <ShieldAlert className="w-5 h-5 text-red-600 shrink-0" />
              <span>1. NO EMERGENCY MEDICAL CARE (CRITICAL WARNING)</span>
            </div>
            <p className="font-medium text-xs sm:text-sm text-red-900">
              THIS WEBSITE AND APPOINTMENT REQUEST SYSTEM IS NOT FOR MEDICAL EMERGENCIES. If you or someone you know is experiencing a life-threatening condition, acute trauma, chest pain, stroke symptoms, or severe distress, please visit the nearest hospital emergency department or contact emergency services immediately:
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="tel:108"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 text-white font-bold text-xs hover:bg-red-700"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Dial 108 (Ambulance)</span>
              </a>
              <a
                href="tel:112"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-slate-800"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Dial 112 (National Emergency)</span>
              </a>
            </div>
          </div>

          {/* Prescription & Pharmacy Dispensing Clause */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center gap-2 font-bold text-base text-slate-900">
              <FileText className="w-5 h-5 text-primary shrink-0" />
              <span>2. Pharmacy Counter &amp; Prescription Compliance</span>
            </div>
            <p>
              Maa Vaishnobi Medicine Store is a licensed physical retail pharmacy operating under the <em>Drugs and Cosmetics Act, 1940</em> in Balasore, Odisha.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>
                <strong>Prescription Requirement:</strong> All Schedule H and Schedule H1 drugs (including antibiotics, chronic disease medications, and specialized treatments) will be dispensed strictly upon presentation of a valid physical prescription issued by a Registered Medical Practitioner (RMP).
              </li>
              <li>
                <strong>No Online Mail-Order E-Commerce:</strong> This website does not sell, mail, or ship prescription medicines online. All pharmaceutical dispensing occurs in-person at our physical counter at Jail Road, Manikhamb, Balasore.
              </li>
            </ul>
          </div>

          {/* Appointment Request Non-Binding Clause */}
          <div className="space-y-2 pt-2">
            <h2 className="font-bold text-base text-slate-900">
              3. Appointment Requests vs. Guaranteed Confirmation
            </h2>
            <p>
              Submitting a doctor consultation request via this site or WhatsApp does NOT constitute a confirmed clinical appointment. All visiting doctor availability, consultation hours, and token numbers are subject to manual verification and written/verbal confirmation by our clinic reception desk.
            </p>
          </div>

          {/* Health Concern Matcher Disclaimer */}
          <div className="space-y-2 pt-2">
            <h2 className="font-bold text-base text-slate-900">
              4. Health Concern Matching Tool (Non-Diagnostic)
            </h2>
            <p>
              The disease/health concern selector within our appointment wizard is provided solely to assist patients in routing their enquiry to the appropriate visiting doctor department. It does NOT provide automated medical diagnoses, clinical triage, or medical treatment plans.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="space-y-2 pt-2">
            <h2 className="font-bold text-base text-slate-900">
              5. Limitation of Liability &amp; Third-Party Services
            </h2>
            <p>
              To the fullest extent permitted by applicable law, {BUSINESS_INFO.name}, its management, and staff shall not be liable for any direct, indirect, incidental, or consequential damages resulting from:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Delays, outages, or delivery failures in WhatsApp or telecommunication network services.</li>
              <li>Reliance placed on general informational content published on this website.</li>
              <li>Inability to secure a visiting doctor consultation slot due to sudden schedule changes.</li>
            </ul>
          </div>

          {/* Governing Law & Jurisdiction */}
          <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-slate-800 space-y-1 pt-3">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Scale className="w-4 h-4 text-slate-700" />
              <span>6. Governing Law &amp; Jurisdiction</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600">
              This Disclaimer and all website interactions are governed by the laws of India. Any legal dispute, claim, or proceedings arising out of or related to this website or our pharmacy/clinic services shall be subject to the exclusive jurisdiction of the competent courts in <strong>Balasore, Odisha, India</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
