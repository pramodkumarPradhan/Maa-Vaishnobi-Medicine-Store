import React, { useState, useEffect, useCallback } from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import {
  Camera,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Expand,
  Stethoscope,
  Pill,
  Building2,
  UserCheck,
  X,
  Phone,
  Clock,
  MapPin,
  Volume2,
  VolumeX,
  Calendar,
  Sparkles,
  Maximize2
} from "lucide-react";

interface PhotoGalleryProps {
  onOpenAppointmentModal: () => void;
  onOpenCallModal?: () => void;
}

interface GalleryItem {
  id: number;
  title: string;
  category: "opd" | "pharmacy";
  image: string;
  tag: string;
  badgeIcon: React.ElementType;
  desc: string;
  location: string;
  timing: string;
  highlights: string[];
  imagePosition?: string;
}

// Subtle Web Audio API sound effect for photo click/navigation
const playCameraSound = (isMuted: boolean) => {
  if (isMuted) return;
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(750, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1100, ctx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.07);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.07);
  } catch {
    // Suppress audio restrictions if user hasn't interacted yet
  }
};

export const PhotoGallerySection: React.FC<PhotoGalleryProps> = ({
  onOpenAppointmentModal,
  onOpenCallModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "opd" | "pharmacy">("all");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Maa Vaishnobi Medicine Store & Clinic Front",
      category: "pharmacy",
      image: "/images/storefront_main.jpg",
      tag: "Main Store Entrance",
      badgeIcon: Building2,
      desc: "Original storefront banner & customer service counter located at Jail Road, Manikhamb, Balasore.",
      location: "Jail Road, Manikhamb, Balasore",
      timing: "Open Daily: 7:30 AM – 10:30 PM",
      highlights: [
        "Prominent Blue Signboard (Chemist & Druggist)",
        "Instant Prescription Medicine Dispatch",
        "Direct Contact: 9827439139, 7847839139"
      ]
    },
    {
      id: 3,
      title: "Pharmacist Desk & Service Counter",
      category: "pharmacy",
      image: "/images/pharmacist_counter.jpg",
      tag: "Licensed Pharmacists",
      badgeIcon: UserCheck,
      desc: "Prompt prescription billing, customer support, and computerized medicine availability search.",
      location: "Main Counter, Pharmacy Section",
      timing: "7:30 AM – 10:30 PM",
      imagePosition: "object-[center_15%]", // Elevate head & torso position higher up in frame
      highlights: [
        "Expert Consultation on Dosage & Usage",
        "Computerized Prescription Billing",
        "Accepts UPI, Cards & Cash Payments"
      ]
    },
    {
      id: 4,
      title: "Comprehensive Medicine Racks",
      category: "pharmacy",
      image: "/images/medicine_inventory_rack.jpg",
      tag: "100% Genuine Stock",
      badgeIcon: Pill,
      desc: "Extensive selection of chronic care, acute prescription, and emergency life-saving medicines.",
      location: "Central Pharmacy Storage",
      timing: "Restocked Daily",
      highlights: [
        "100% Authentic Pharmaceutical Brands",
        "Cold Storage Maintenance for Vaccines & Insulin",
        "Discounts on Monthly Chronic Care Medicines"
      ]
    },
    {
      id: 5,
      title: "Organized Prescription Inventory",
      category: "pharmacy",
      image: "/images/medicine_shelves_detail.jpg",
      tag: "Full Range Medicines",
      badgeIcon: Pill,
      desc: "Systematically categorized inventory ensuring quick prescription dispatch and minimum wait time.",
      location: "Pharmacy Inventory Racks",
      timing: "24/7 Availability Support",
      highlights: [
        "Systematic Batch & Expiry Date Management",
        "Specialist Medicines: Cardio, Neuro, Ortho & Gynaec",
        "Child Healthcare & Surgical Supplies"
      ]
    },
    {
      id: 6,
      title: "Specialist Doctor OPD Room (Dr. Arun Kumar Giri)",
      category: "opd",
      image: "/images/arun sir.jpeg",
      tag: "Child Specialist OPD",
      badgeIcon: Stethoscope,
      desc: "Real consultation room of Dr. Arun Kumar Giri (Pediatrician / Child Specialist) at Maa Vaishnobi Healthcare, Jail Road, Balasore.",
      location: "OPD Chamber, Jail Road, Balasore",
      timing: "Consultations: 8:30 AM – 8:30 PM",
      highlights: [
        "Dr. Arun Kumar Giri (Child Specialist)",
        "Sanitized Private Consultation Chamber",
        "Daily OPD Token Booking Available"
      ]
    },
    {
      id: 7,
      title: "Doctor Patient Consultation Chamber (Dr. Lopita Nayak)",
      category: "opd",
      image: "/images/dr_lopita_nayak.jpg",
      tag: "Skin & VD Specialist",
      badgeIcon: UserCheck,
      desc: "Consultation desk of Dr. Lopita Nayak (Dermatologist / Skin Specialist) conducting patient diagnosis and care.",
      location: "OPD Chamber, Jail Road, Balasore",
      timing: "Prior Token Booking Recommended",
      highlights: [
        "Dr. Lopita Nayak (Skin & VD Specialist)",
        "Comprehensive Patient Diagnosis",
        "Specialist Prescriptions & Medical Guidance"
      ]
    }
  ];

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const openModalAtIndex = (index: number) => {
    setActiveImageIndex(index);
    setIsZoomed(false);
    playCameraSound(isMuted);
  };

  const closeModal = () => {
    setActiveImageIndex(null);
    setIsZoomed(false);
  };

  const nextImage = useCallback(() => {
    if (activeImageIndex === null) return;
    const nextIdx = (activeImageIndex + 1) % filteredItems.length;
    setActiveImageIndex(nextIdx);
    setIsZoomed(false);
    playCameraSound(isMuted);
  }, [activeImageIndex, filteredItems.length, isMuted]);

  const prevImage = useCallback(() => {
    if (activeImageIndex === null) return;
    const prevIdx = (activeImageIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveImageIndex(prevIdx);
    setIsZoomed(false);
    playCameraSound(isMuted);
  }, [activeImageIndex, filteredItems.length, isMuted]);

  // Keyboard navigation for Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, nextImage, prevImage]);

  const activeItem = activeImageIndex !== null ? filteredItems[activeImageIndex] : null;

  return (
    <section id="gallery" className="py-14 lg:py-20 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <Camera className="w-3.5 h-3.5 text-emerald-700" />
              <span>Verified Facility Photo Gallery</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              See Inside Maa Vaishnobi Healthcare
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1.5 max-w-2xl leading-relaxed">
              Take a visual tour of our clean clinic exterior, specialist doctor OPD chambers, and medicine inventory.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-slate-200/90 shadow-sm">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedCategory === "all"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
            >
              All Photos ({galleryItems.length})
            </button>
            <button
              onClick={() => setSelectedCategory("pharmacy")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedCategory === "pharmacy"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
            >
              Pharmacy Store
            </button>
            <button
              onClick={() => setSelectedCategory("opd")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedCategory === "opd"
                ? "bg-emerald-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
            >
              Doctor OPDs
            </button>
          </div>
        </div>

        {/* Standard Light-Theme Photo Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const Icon = item.badgeIcon;
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Clean Light Image Container */}
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-100 cursor-pointer"
                  onClick={() => openModalAtIndex(index)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${item.imagePosition || "object-center"}`}
                    loading="lazy"
                  />

                  {/* Subtle Light Gradient Overlay for Top Badge Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/20 opacity-75 group-hover:opacity-50 transition-opacity" />

                  {/* Clean Floating Badge */}
                  <span className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-slate-900 text-xs font-extrabold shadow-md border border-slate-200/80 backdrop-blur-md">
                    <Icon className="w-3.5 h-3.5 text-emerald-600" />
                    {item.tag}
                  </span>

                  {/* Expand Preview Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModalAtIndex(index);
                    }}
                    className="absolute bottom-3.5 right-3.5 z-10 p-2.5 rounded-full bg-white/95 text-emerald-700 hover:bg-emerald-600 hover:text-white shadow-lg backdrop-blur-md opacity-90 group-hover:opacity-100 transition-all duration-200 active:scale-95 border border-slate-200/60"
                    title="Expand Photo Details"
                  >
                    <Expand className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Information */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold text-emerald-700 mb-1.5">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-emerald-600" />
                        {item.location.split(",")[0]}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-500 font-medium">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {item.timing.split(":")[0]}
                      </span>
                    </div>

                    <h3
                      onClick={() => openModalAtIndex(index)}
                      className="font-display font-bold text-slate-900 text-lg group-hover:text-emerald-700 transition-colors cursor-pointer leading-snug"
                    >
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                    <span className="flex items-center gap-1 text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Balasore Facility
                    </span>
                    <button
                      onClick={() => openModalAtIndex(index)}
                      className="inline-flex items-center gap-1 text-slate-900 font-bold hover:text-emerald-600 transition-colors"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Feature-Rich Interactive Photo Viewer Modal */}
      {activeItem && activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[92vh] my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg leading-tight">
                    {activeItem.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Photo {activeImageIndex + 1} of {filteredItems.length} • {activeItem.tag}
                  </p>
                </div>
              </div>

              {/* Header Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`p-2 rounded-full border transition-colors ${isMuted
                    ? "bg-slate-100 border-slate-200 text-slate-400"
                    : "bg-emerald-50 border-emerald-200 text-emerald-700"
                    }`}
                  title={isMuted ? "Unmute Photo Audio Sound" : "Mute Sound"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-colors"
                  title="Close Modal (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Split Image Preview & Detailed Info */}
            <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-0">

              {/* Image Preview Canvas */}
              <div className="lg:col-span-7 bg-slate-950 relative flex items-center justify-center min-h-[280px] sm:min-h-[380px] p-4 select-none">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className={`transition-transform duration-300 ${isZoomed
                    ? "max-h-[85vh] object-contain scale-125 cursor-zoom-out"
                    : "max-h-[60vh] lg:max-h-[70vh] object-contain rounded-xl shadow-lg cursor-zoom-in"
                    }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />

                {/* Left Arrow Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white backdrop-blur-md border border-slate-700 shadow-xl transition-all active:scale-95"
                  title="Previous Photo (←)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-emerald-600 text-white backdrop-blur-md border border-slate-700 shadow-xl transition-all active:scale-95"
                  title="Next Photo (→)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Zoom Toggle Overlay Button */}
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-white text-xs font-semibold backdrop-blur-md border border-slate-700 flex items-center gap-1.5 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isZoomed ? "Reset Zoom" : "Full Zoom"}</span>
                </button>
              </div>

              {/* Details & Action Panel */}
              <div className="lg:col-span-5 p-6 flex flex-col justify-between bg-white border-l border-slate-100">
                <div className="space-y-4">
                  {/* Category Pill & Location Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                      {activeItem.tag}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      {activeItem.location.split(",")[0]}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-display text-xl font-bold text-slate-900 leading-tight">
                      {activeItem.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      {activeItem.desc}
                    </p>
                  </div>

                  {/* Location & Timing Info Boxes */}
                  <div className="space-y-2 pt-2">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">Exact Location</div>
                        <div className="text-xs text-slate-600 mt-0.5">{activeItem.location}</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-slate-900">Operating Hours</div>
                        <div className="text-xs text-slate-600 mt-0.5">{activeItem.timing}</div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="pt-2">
                    <h5 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      Facility Highlights
                    </h5>
                    <ul className="space-y-1.5">
                      {activeItem.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Modal Action Buttons */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5">
                  <button
                    onClick={() => {
                      closeModal();
                      if (onOpenCallModal) onOpenCallModal();
                    }}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors active:scale-98 cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Pharmacy ({BUSINESS_INFO.phoneDisplay})</span>
                  </button>
                  <button
                    onClick={() => {
                      closeModal();
                      onOpenAppointmentModal();
                    }}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-colors active:scale-98"
                  >
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>Book Doctor OPD</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Thumbnail Carousel Navigation Bar at Bottom */}
            <div className="p-3 bg-slate-900 border-t border-slate-800 overflow-x-auto">
              <div className="flex items-center gap-2 max-w-full mx-auto justify-start sm:justify-center">
                {filteredItems.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => openModalAtIndex(idx)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 transition-all ${idx === activeImageIndex
                      ? "ring-2 ring-emerald-500 scale-105 opacity-100"
                      : "opacity-50 hover:opacity-90"
                      }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallerySection;

