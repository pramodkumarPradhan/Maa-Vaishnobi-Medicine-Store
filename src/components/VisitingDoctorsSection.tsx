import React, { useState } from "react";
import { VISITING_DOCTORS_REGISTRY } from "../data/appointmentData";
import { BUSINESS_INFO } from "../data/businessInfo";
import {
  Stethoscope,
  Sparkles,
  Baby,
  UserCheck,
  HeartPulse,
  Activity,
  Phone,
  Calendar,
  Clock,
  Award,
  MessageCircle,
  Search,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

interface VisitingDoctorsSectionProps {
  onSelectDoctorToBook: (doctorId: string) => void;
}

export const VisitingDoctorsSection: React.FC<VisitingDoctorsSectionProps> = ({
  onSelectDoctorToBook,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const getDoctorIcon = (iconName?: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-3.5 h-3.5 text-rose-400" />;
      case "Baby":
        return <Baby className="w-3.5 h-3.5 text-sky-400" />;
      case "UserCheck":
        return <UserCheck className="w-3.5 h-3.5 text-purple-400" />;
      case "HeartPulse":
        return <HeartPulse className="w-3.5 h-3.5 text-pink-400" />;
      case "Activity":
        return <Activity className="w-3.5 h-3.5 text-amber-400" />;
      default:
        return <Stethoscope className="w-3.5 h-3.5 text-emerald-400" />;
    }
  };

  const filteredDoctors = VISITING_DOCTORS_REGISTRY.filter((doc) => {
    const matchesFilter =
      activeFilter === "all" || doc.specialtyId === activeFilter;
    const matchesQuery =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      doc.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      doc.department.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      (doc.qualifications &&
        doc.qualifications.toLowerCase().includes(searchQuery.toLowerCase().trim()));
    return matchesFilter && matchesQuery;
  });

  return (
    <section
      id="doctors"
      className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>VISITING OPD SPECIALISTS</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Frequently Visiting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">Doctors</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-body">
            Connect with senior specialists at Maa Vaishnobi Medicine Store &amp; Polyclinic, Jail Road, Balasore. Reserve your OPD token number easily.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-3 bg-slate-800/60 p-3 rounded-2xl border border-slate-700/60 backdrop-blur-md">
          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search doctor or specialty..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>

          {/* Specialty Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all ${
                activeFilter === "all"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              All Doctors ({VISITING_DOCTORS_REGISTRY.length})
            </button>
            <button
              onClick={() => setActiveFilter("dermatology")}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all ${
                activeFilter === "dermatology"
                  ? "bg-rose-600 text-white shadow-sm"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Skin &amp; VD
            </button>
            <button
              onClick={() => setActiveFilter("pediatrics")}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all ${
                activeFilter === "pediatrics"
                  ? "bg-sky-600 text-white shadow-sm"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Pediatrics
            </button>
            <button
              onClick={() => setActiveFilter("psychiatry")}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all ${
                activeFilter === "psychiatry"
                  ? "bg-purple-600 text-white shadow-sm"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Neuro Psychiatry
            </button>
            <button
              onClick={() => setActiveFilter("gynecology")}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all ${
                activeFilter === "gynecology"
                  ? "bg-pink-600 text-white shadow-sm"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              O&amp;G
            </button>
            <button
              onClick={() => setActiveFilter("oncology")}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all ${
                activeFilter === "oncology"
                  ? "bg-amber-600 text-white shadow-sm"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Oncology
            </button>
            <button
              onClick={() => setActiveFilter("urology")}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all ${
                activeFilter === "urology"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Urology
            </button>
          </div>
        </div>

        {/* Clean White Profile Cards on Deep Navy Background */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500" />

              <div>
                {/* Doctor Avatar Header */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                        doc.avatarBg || "from-emerald-600 to-teal-700"
                      } p-0.5 shadow-sm shrink-0 flex items-center justify-center font-bold text-white text-sm`}
                    >
                      <div className="w-full h-full rounded-full bg-slate-900/30 flex items-center justify-center font-extrabold tracking-wider text-white">
                        {doc.avatarInitials || "DR"}
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-600 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white">
                      ✓
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-bold text-emerald-700 truncate">
                      {doc.title}
                    </p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      {getDoctorIcon(doc.iconName)}
                      <span className="inline-block text-[10px] font-semibold text-slate-500">
                        {doc.department}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Qualifications Pill */}
                {doc.qualifications && (
                  <div className="mb-3 px-2.5 py-1 rounded-lg bg-emerald-50/80 border border-emerald-100 text-[11px] font-medium text-emerald-950 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="truncate">{doc.qualifications}</span>
                  </div>
                )}

                {/* Visiting Schedule Note Pill */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-[11px] leading-tight">
                    <span className="font-bold text-slate-900">OPD Schedule: </span>
                    <span className="text-slate-600">{doc.availabilityNote}</span>
                  </div>
                </div>

                {/* Phone contact if available */}
                {doc.phone && doc.phone.length > 0 && (
                  <div className="mt-2 text-[11px] text-slate-600 flex items-center gap-1.5 font-mono">
                    <Phone className="w-3 h-3 text-emerald-600" />
                    <span>OPD Call: {doc.phone.join(" • ")}</span>
                  </div>
                )}
              </div>

              {/* Compact CTA Buttons */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onSelectDoctorToBook(doc.id)}
                  className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-headline text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book OPD</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                    `Hello Maa Vaishnobi Medicine Store Clinic,\nI want to check OPD schedule for ${doc.name} (${doc.title}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 active:scale-95 transition-colors"
                  title="WhatsApp Direct Desk"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-teal-950/80 to-slate-900 border border-emerald-500/30 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold text-white">
                Need token number or doctor visiting confirmation?
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Visit Maa Vaishnobi Medicine Store &amp; Polyclinic, Jail Road, Balasore.
              </p>
            </div>
          </div>
          <a
            href={BUSINESS_INFO.phoneTel}
            className="shrink-0 px-4 py-2 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-headline text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Call Reception: {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
