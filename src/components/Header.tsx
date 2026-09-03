import React, { useState } from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Phone, MessageCircle, Calendar, Menu, X, Plus } from "lucide-react";

interface HeaderProps {
  onOpenAppointmentModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAppointmentModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clinic", href: "#clinic" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 transition-all duration-300 glass-nav border-b border-slate-200/70 shadow-sm">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 group focus-visible:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Plus className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-extrabold text-base md:text-lg tracking-tight text-slate-900 group-hover:text-primary transition-colors leading-tight">
              {BUSINESS_INFO.shortName}
            </span>
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Medicine Store &amp; Clinic
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[14.5px] font-semibold text-slate-700 tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={BUSINESS_INFO.phoneTel}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 text-[13.5px] font-semibold text-slate-700 hover:text-primary hover:border-primary/40 hover:bg-slate-50 transition-all active:scale-95"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
              "Hello Maa Vaishnobi Medicine Store & Clinic, I have an enquiry."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#059669] text-white hover:bg-[#047857] text-[13.5px] font-semibold shadow-sm transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenAppointmentModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-white hover:bg-primary-dark text-[13.5px] font-semibold shadow-sm transition-all active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Hamburger & Fast Action */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href={BUSINESS_INFO.phoneTel}
            aria-label="Call Now"
            className="p-2 rounded-xl bg-sky-50 text-primary border border-sky-200"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={onOpenAppointmentModal}
            aria-label="Book Appointment"
            className="px-3 py-2 rounded-xl bg-primary text-white text-xs font-bold"
          >
            Book
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-sky-50 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="w-full py-2.5 rounded-xl border border-slate-300 text-center font-bold text-xs text-slate-800 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#059669] text-center font-bold text-xs text-white flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointmentModal();
              }}
              className="w-full py-2.5 rounded-xl bg-primary text-center font-bold text-xs text-white flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
