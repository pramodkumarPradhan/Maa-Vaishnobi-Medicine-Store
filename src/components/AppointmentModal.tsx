import React, { useState, useEffect } from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import {
  HEALTH_CONCERNS,
  SPECIALTIES,
  TIME_SLOTS,
  type HealthConcern,
} from "../data/appointmentData";
import {
  X,
  Search,
  CheckCircle2,
  Clock,
  Phone,
  MessageCircle,
  ArrowLeft,
  ArrowRight,
  Stethoscope,
  Info,
  Thermometer,
  Activity,
  HeartPulse,
  Sparkles,
  UtensilsCrossed,
  Baby,
  UserCheck,
  Accessibility,
  Eye,
  Ear,
  MoreHorizontal,
  Sun,
  Sunset,
  Moon,
} from "lucide-react";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedConcern, setSelectedConcern] = useState<HealthConcern>(
    HEALTH_CONCERNS[0]
  );
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>(
    HEALTH_CONCERNS[0].defaultSpecialty
  );
  const [preferredDate, setPreferredDate] = useState<string>("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(
    "Morning (09:30 AM - 12:30 PM)"
  );

  // Form State
  const [patientName, setPatientName] = useState<string>("");
  const [patientPhone, setPatientPhone] = useState<string>("");
  const [patientAge, setPatientAge] = useState<string>("");
  const [patientGender, setPatientGender] = useState<string>("Male");
  const [visitReason, setVisitReason] = useState<string>("");
  const [additionalNotes, setAdditionalNotes] = useState<string>("");

  // Validation Errors
  const [nameError, setNameError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);

  // Initialize date picker on load
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedTomorrow = tomorrow.toISOString().split("T")[0];
    setPreferredDate(formattedTomorrow);
  }, []);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Thermometer":
        return <Thermometer className="w-5 h-5" />;
      case "Activity":
        return <Activity className="w-5 h-5" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
      case "UtensilsCrossed":
        return <UtensilsCrossed className="w-5 h-5" />;
      case "Baby":
        return <Baby className="w-5 h-5" />;
      case "UserCheck":
        return <UserCheck className="w-5 h-5" />;
      case "Accessibility":
        return <Accessibility className="w-5 h-5" />;
      case "Eye":
        return <Eye className="w-5 h-5" />;
      case "Ear":
        return <Ear className="w-5 h-5" />;
      case "MoreHorizontal":
        return <MoreHorizontal className="w-5 h-5" />;
      default:
        return <Stethoscope className="w-5 h-5" />;
    }
  };

  const getTimeIcon = (iconName: string) => {
    switch (iconName) {
      case "Sun":
        return <Sun className="w-4 h-4" />;
      case "Sunset":
        return <Sunset className="w-4 h-4" />;
      case "Moon":
        return <Moon className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  // Filtered health concerns
  const filteredConcerns = HEALTH_CONCERNS.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  const handleSelectConcern = (concern: HealthConcern) => {
    setSelectedConcern(concern);
    setSelectedSpecialty(concern.defaultSpecialty);
  };

  const handleNextStep = () => {
    if (step === 4) {
      let hasError = false;
      if (!patientName.trim()) {
        setNameError(true);
        hasError = true;
      } else {
        setNameError(false);
      }
      if (!patientPhone.trim()) {
        setPhoneError(true);
        hasError = true;
      } else {
        setPhoneError(false);
      }
      if (hasError) return;
    }

    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSendWhatsApp = () => {
    const dateFormatted = preferredDate || "To be confirmed";
    const reasonText = visitReason.trim() || "General Consultation";
    const notesText = additionalNotes.trim() || "None";

    const messageText = `Hello Maa Vaishnobi Medicine Store & Clinic,\nI would like to request a doctor consultation.\n\nPatient Name: ${patientName.trim()}\nPhone: ${patientPhone.trim()}\nHealth Concern: ${selectedConcern.name}\nDoctor/Specialty: ${selectedSpecialty}\nPreferred Date: ${dateFormatted}\nPreferred Time: ${selectedTimeSlot}\nReason: ${reasonText}\nAdditional Message: ${notesText}\n\nPlease confirm availability.\nThank you.`;

    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `${BUSINESS_INFO.whatsappUrl}?text=${encoded}`;

    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 modal-backdrop transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-5 sm:p-7 z-10 max-h-[92vh] flex flex-col border border-slate-200">
        {/* Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 shrink-0">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              Request a Doctor Consultation
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {BUSINESS_INFO.shortName} Medicine Store &amp; Clinic • Balasore
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="pt-3 pb-2 shrink-0">
          <div className="flex items-center justify-between text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            <span>
              {step === 1 && "01 Health Concern"}
              {step === 2 && "02 Doctor / Specialty"}
              {step === 3 && "03 Date & Time"}
              {step === 4 && "04 Your Details"}
              {step === 5 && "05 WhatsApp Request"}
            </span>
            <span className="text-primary font-bold">Step {step} of 5</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-300 rounded-full"
              style={{ width: `${step * 20}%` }}
            ></div>
          </div>
        </div>

        {/* Notice Banner */}
        <div className="my-2 p-2.5 rounded-xl bg-sky-50 border border-sky-200 flex items-start gap-2 text-xs text-sky-900 font-medium shrink-0">
          <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <span>
            This is an appointment request. Our clinic team will verify visiting doctor schedules and confirm availability via WhatsApp.
          </span>
        </div>

        {/* Step Content Body (Scrollable) */}
        <div className="custom-scrollbar overflow-y-auto flex-grow pr-1 py-2">
          {/* STEP 1: HEALTH CONCERN */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                  What do you need help with?
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Select the health concern you'd like to discuss.
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search health concern (e.g. fever, diabetes, skin, child)..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-slate-400"
                />
              </div>

              {/* Concerns Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {filteredConcerns.map((concern) => {
                  const isSelected = selectedConcern.id === concern.id;
                  return (
                    <button
                      key={concern.id}
                      onClick={() => handleSelectConcern(concern)}
                      className={`group p-3 rounded-2xl border text-left transition-all duration-150 flex flex-col justify-between ${
                        isSelected
                          ? "border-primary bg-sky-50 ring-2 ring-primary/40"
                          : "border-slate-200 bg-white hover:border-primary hover:bg-sky-50/50"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 group-hover:scale-105 transition-transform ${concern.badgeColor}`}
                      >
                        {getIcon(concern.iconName)}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900">
                          {concern.name}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                          {concern.subtitle}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {filteredConcerns.length === 0 && (
                <div className="p-6 text-center text-slate-500 text-sm">
                  No matching health concerns found. Try another search term or choose "Other Concerns".
                </div>
              )}
            </div>
          )}

          {/* STEP 2: DOCTOR / SPECIALTY MATCHING */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                  Recommended Consultation
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Based on:{" "}
                  <span className="font-bold text-primary">
                    {selectedConcern.name}
                  </span>
                </p>
              </div>

              {/* Matched Specialty Card */}
              <div className="p-4 rounded-2xl bg-sky-50/70 border-2 border-primary/30 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-bold shrink-0">
                      <Stethoscope className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-primary text-white">
                        Recommended Match
                      </span>
                      <h5 className="font-display text-base font-bold text-slate-900 mt-1">
                        {selectedSpecialty}
                      </h5>
                      <p className="text-xs text-slate-600">
                        Visiting OPD Consultant • Maa Vaishnobi Clinic
                      </p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                </div>
                <p className="text-xs text-slate-600 pt-2 border-t border-sky-100">
                  Doctor timings and visiting slots will be matched with you upon review of your request.
                </p>
              </div>

              {/* Department Selector */}
              <div className="pt-2">
                <label
                  htmlFor="specialtySelect"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                >
                  Or Choose Another Department
                </label>
                <select
                  id="specialtySelect"
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:border-primary bg-white"
                >
                  {SPECIALTIES.map((spec) => (
                    <option key={spec.id} value={spec.name}>
                      {spec.displayName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Fast Fallback Box */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div>
                  <span className="font-bold text-slate-800">
                    Unsure about which doctor to pick?
                  </span>
                  <p className="text-slate-500 text-[11px]">
                    Chat with our dispensary team directly for instant direction.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                      "Hello Maa Vaishnobi Clinic, I need help choosing a doctor specialty"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-bold inline-flex items-center gap-1 hover:bg-emerald-700 active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.phoneTel}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-white font-bold inline-flex items-center gap-1 hover:bg-slate-900 active:scale-95"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: PREFERRED DATE & TIME */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                  Choose Your Preferred Date &amp; Time
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Select when you would prefer your outpatient visit.
                </p>
              </div>

              {/* Date Input */}
              <div>
                <label
                  htmlFor="preferredDateInput"
                  className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                >
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="preferredDateInput"
                  type="date"
                  value={preferredDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Preferred Time <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {TIME_SLOTS.map((slot) => {
                    const fullSlotName = `${slot.label} (${slot.timeRange})`;
                    const isSelected = selectedTimeSlot === fullSlotName;
                    return (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setSelectedTimeSlot(fullSlotName)}
                        className={`p-3 rounded-xl border text-left font-medium transition-all ${
                          isSelected
                            ? "border-primary bg-sky-50 text-slate-900"
                            : "border-slate-200 bg-white text-slate-900 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                          {getTimeIcon(slot.iconName)}
                          <span>{slot.label}</span>
                        </div>
                        <div className="text-[11px] text-slate-600 mt-1">
                          {slot.timeRange}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="text-xs text-slate-500 italic bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                Note: Consultation timings are subject to visiting doctor schedule confirmation.
              </p>
            </div>
          )}

          {/* STEP 4: PATIENT DETAILS */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                  Your Details
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Please provide patient information for appointment registration.
                </p>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="patientName"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="patientName"
                      type="text"
                      value={patientName}
                      onChange={(e) => {
                        setPatientName(e.target.value);
                        if (e.target.value.trim()) setNameError(false);
                      }}
                      placeholder="e.g. Ramesh Chandra Das"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:ring-2 focus:ring-primary ${
                        nameError
                          ? "border-red-500 ring-2 ring-red-200"
                          : "border-slate-300 focus:border-primary"
                      }`}
                      required
                    />
                    {nameError && (
                      <span className="text-[11px] text-red-500 font-medium">
                        Full Name is required
                      </span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="patientPhone"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="patientPhone"
                      type="tel"
                      value={patientPhone}
                      onChange={(e) => {
                        setPatientPhone(e.target.value);
                        if (e.target.value.trim()) setPhoneError(false);
                      }}
                      placeholder="e.g. 09853608262"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm focus:ring-2 focus:ring-primary ${
                        phoneError
                          ? "border-red-500 ring-2 ring-red-200"
                          : "border-slate-300 focus:border-primary"
                      }`}
                      required
                    />
                    {phoneError && (
                      <span className="text-[11px] text-red-500 font-medium">
                        Phone Number is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Age */}
                  <div>
                    <label
                      htmlFor="patientAge"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      Age (Years)
                    </label>
                    <input
                      id="patientAge"
                      type="number"
                      min="1"
                      max="120"
                      value={patientAge}
                      onChange={(e) => setPatientAge(e.target.value)}
                      placeholder="e.g. 34"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Gender
                    </label>
                    <div className="flex items-center gap-3 pt-2">
                      {["Male", "Female", "Other"].map((g) => (
                        <label
                          key={g}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-700 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="patientGender"
                            value={g}
                            checked={patientGender === g}
                            onChange={() => setPatientGender(g)}
                            className="text-primary focus:ring-primary"
                          />
                          <span>{g}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Reason for Visit */}
                <div>
                  <label
                    htmlFor="visitReason"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Reason for Visit
                  </label>
                  <input
                    id="visitReason"
                    type="text"
                    value={visitReason}
                    onChange={(e) => setVisitReason(e.target.value)}
                    placeholder="e.g. Ongoing fever, prescription review, general health check"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                {/* Additional Notes */}
                <div>
                  <label
                    htmlFor="additionalNotes"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                  >
                    Additional Message / Notes
                  </label>
                  <textarea
                    id="additionalNotes"
                    rows={2}
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    placeholder="Any previous treatment notes or special requirements..."
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:ring-2 focus:ring-primary focus:border-primary"
                  ></textarea>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: PREVIEW & SUBMISSION */}
          {step === 5 && (
            <div className="space-y-4">
              <div>
                <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                  Request Preview
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Please review your consultation request before sending via WhatsApp.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-2.5">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Patient Name:</span>
                  <span className="font-bold text-slate-900">
                    {patientName || "-"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Phone Number:</span>
                  <span className="font-bold text-slate-900">
                    {patientPhone || "-"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Health Concern:</span>
                  <span className="font-bold text-slate-900">
                    {selectedConcern.name}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Doctor / Specialty:</span>
                  <span className="font-bold text-primary">
                    {selectedSpecialty}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Preferred Date &amp; Time:</span>
                  <span className="font-bold text-slate-900">
                    {preferredDate || "To be confirmed"} ({selectedTimeSlot})
                  </span>
                </div>
                {visitReason && (
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Reason:</span>
                    <span className="font-medium text-slate-800 text-right max-w-[240px]">
                      {visitReason}
                    </span>
                  </div>
                )}
                {additionalNotes && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Additional Message:</span>
                    <span className="font-medium text-slate-800 text-right max-w-[240px]">
                      {additionalNotes}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs">
                <div className="font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Ready to Send</span>
                </div>
                <p className="mt-1">
                  Clicking below opens WhatsApp with all your consultation details formatted for our front desk reception.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          {step > 1 ? (
            <button
              onClick={handlePrevStep}
              type="button"
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-bold hover:bg-slate-50 active:scale-95 transition-all inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : (
            <div></div>
          )}

          {step < 5 ? (
            <button
              onClick={handleNextStep}
              type="button"
              className="px-6 py-2.5 rounded-xl bg-primary hover:bg-sky-600 text-white text-xs sm:text-sm font-bold shadow-md active:scale-95 transition-all inline-flex items-center gap-1.5 ml-auto"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleSendWhatsApp}
              type="button"
              className="px-6 py-2.5 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs sm:text-sm font-bold shadow-md active:scale-95 transition-all inline-flex items-center gap-1.5 ml-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>SEND APPOINTMENT REQUEST ON WHATSAPP</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
