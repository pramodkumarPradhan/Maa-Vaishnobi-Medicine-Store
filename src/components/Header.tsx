import React, { useState } from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Phone, MessageCircle, Calendar, Menu, X, ChevronDown } from "lucide-react";

interface HeaderProps {
  onOpenAppointmentModal: () => void;
  onOpenCallModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAppointmentModal,
  onOpenCallModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Visiting Doctors", href: "#doctors" },
    { name: "Clinic OPD", href: "#clinic" },
    { name: "Reviews", href: "#reviews" },
    { name: "Location", href: "#location" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 transition-all duration-300 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
      <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus-visible:outline-none shrink-0"
        >
          <img
            src={BUSINESS_INFO.logoUrl}
            alt={BUSINESS_INFO.name}
            className="w-11 h-11 object-contain rounded-xl shadow-sm group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-headline font-extrabold text-base md:text-lg tracking-tight text-slate-900 group-hover:text-primary transition-colors leading-tight">
              {BUSINESS_INFO.shortName}
            </span>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              Medicine Store &amp; Clinic
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7 lg:gap-8 text-[14px] font-semibold text-slate-700 tracking-tight">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors py-1 relative group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 inset-x-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden sm:flex items-center gap-2.5 lg:gap-3 shrink-0">
          
          {/* Sleek Call Helpline Pill Trigger */}
          <button
            onClick={onOpenCallModal}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100/90 hover:bg-sky-50 text-slate-800 hover:text-primary border border-slate-200/90 hover:border-primary/40 text-xs font-bold tracking-tight whitespace-nowrap active:scale-95 transition-all shadow-2xs group cursor-pointer"
            title="Click to view & dial helpline numbers"
          >
            <div className="w-6 h-6 rounded-lg bg-sky-500/10 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[9px] uppercase tracking-wider font-extrabold text-slate-400 leading-none">Helpline</span>
              <span className="text-xs font-mono font-bold text-slate-800 group-hover:text-primary">9827439139 • 7847839139</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* WhatsApp Direct Action */}
          <a
            href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
              "Hello Maa Vaishnobi Medicine Store & Clinic, I have an enquiry."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold tracking-wide uppercase shadow-sm active:scale-95 transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          {/* Book Appointment CTA */}
          <button
            onClick={onOpenAppointmentModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary hover:bg-primary-dark text-white text-xs font-bold tracking-wide uppercase shadow-md shadow-sky-600/20 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Fast Action & Menu */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={onOpenCallModal}
            aria-label="Call Helpline"
            className="p-2.5 rounded-xl bg-sky-50 text-primary border border-sky-100 active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4" />
          </button>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Chat"
            className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-fade-in">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:bg-sky-50 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenCallModal) onOpenCallModal();
              }}
              className="w-full py-3 rounded-xl bg-slate-50 border border-slate-200 text-center font-bold text-xs text-slate-800 flex items-center justify-center gap-2 active:scale-98 transition-transform"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Call Helpline (9827439139 • 7847839139)</span>
            </button>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#059669] text-center font-bold text-xs text-white flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointmentModal();
              }}
              className="w-full py-3 rounded-xl bg-primary text-center font-bold text-xs text-white flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-transform"
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
