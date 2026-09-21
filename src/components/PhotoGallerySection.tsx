import React, { useState } from "react";
import { Camera, CheckCircle2, ChevronRight, Expand, Stethoscope, Pill, Building2, UserCheck } from "lucide-react";

interface PhotoGalleryProps {
  onOpenAppointmentModal: () => void;
}

export const PhotoGallerySection: React.FC<PhotoGalleryProps> = ({ onOpenAppointmentModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "opd" | "pharmacy" | "reception">("all");
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: "Polyclinic & Patient Reception",
      category: "reception",
      image: "/images/clinic_reception.jpg",
      tag: "Welcoming & Clean Desk",
      badgeIcon: Building2,
      desc: "Instant patient registration & comfortable waiting lounge at Jail Road, Balasore.",
    },
    {
      id: 2,
      title: "Specialist Doctor OPD Room",
      category: "opd",
      image: "/images/doctor_opd_room.jpg",
      tag: "6+ Specialist OPDs",
      badgeIcon: Stethoscope,
      desc: "Sanitized private consultation chambers for expert diagnosis & care.",
    },
    {
      id: 3,
      title: "100% Genuine Medicine Counter",
      category: "pharmacy",
      image: "/images/pharmacy_counter.jpg",
      tag: "Prescription Medicines",
      badgeIcon: Pill,
      desc: "Licensed pharmacy offering original medicines with bill at affordable prices.",
    },
    {
      id: 4,
      title: "Doctor Patient Consultation",
      category: "opd",
      image: "/images/doctor_consultation.jpg",
      tag: "Compassionate Care",
      badgeIcon: UserCheck,
      desc: "Dedicated medical specialists taking time to understand your healthcare needs.",
    },
    {
      id: 5,
      title: "Medicine Store Interior",
      category: "pharmacy",
      image: "/images/pharmacy_interior.jpg",
      tag: "Full Medicine Range",
      badgeIcon: Pill,
      desc: "All routine, chronic, and emergency healthcare products under one roof.",
    },
  ];

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-12 lg:py-16 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Real Photo Gallery</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              See Inside Maa Vaishnobi Healthcare
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-xl">
              Take a visual tour of our clean clinic, doctor OPD chambers, and full-fledged medicine store.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "all"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              All Photos ({galleryItems.length})
            </button>
            <button
              onClick={() => setSelectedCategory("opd")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "opd"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Doctor OPDs
            </button>
            <button
              onClick={() => setSelectedCategory("pharmacy")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "pharmacy"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Pharmacy Store
            </button>
            <button
              onClick={() => setSelectedCategory("reception")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === "reception"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              Reception &amp; Waiting
            </button>
          </div>
        </div>

        {/* Multi-Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const Icon = item.badgeIcon;
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Floating Tag */}
                  <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 text-white text-xs font-bold backdrop-blur-md border border-slate-700">
                    <Icon className="w-3.5 h-3.5 text-emerald-400" />
                    {item.tag}
                  </span>

                  {/* Expand Zoom Button */}
                  <button
                    onClick={() => setActiveImageModal(item.image)}
                    className="absolute bottom-4 right-4 z-10 p-2.5 rounded-full bg-white/90 text-slate-900 hover:bg-white shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity active:scale-95"
                    title="View Fullscreen"
                  >
                    <Expand className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Bottom Description */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-lg group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Verified Balasore Facility
                    </span>
                    <button
                      onClick={onOpenAppointmentModal}
                      className="inline-flex items-center gap-1 text-slate-900 font-bold hover:text-emerald-600 transition-colors"
                    >
                      <span>Book OPD</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Image Modal */}
      {activeImageModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveImageModal(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <img
              src={activeImageModal}
              alt="Maa Vaishnobi Healthcare Full Facility"
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-slate-800"
            />
            <p className="text-slate-300 text-xs sm:text-sm mt-3 font-semibold">
              Click anywhere to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
