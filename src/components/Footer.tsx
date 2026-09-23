import React from "react";
import { Link } from "react-router-dom";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Phone, MessageCircle, MapPin, ExternalLink, Star } from "lucide-react";

interface FooterProps {
  onOpenCallModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCallModal }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Brand & Info */}
          <div className="lg:col-span-7 space-y-4">
            <a className="inline-flex items-center gap-3 group" href="#hero">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt={BUSINESS_INFO.name}
                className="w-10 h-10 object-contain rounded-xl bg-white p-1 shadow-md"
              />
              <span className="text-xl font-extrabold text-white tracking-tight font-headline group-hover:text-sky-300 transition-colors">
                {BUSINESS_INFO.name}
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Delivering 100% genuine medicine store services and structured specialist doctor OPD consultation support for residents of Balasore, Gopalgoan, and neighboring Odisha communities.
            </p>
            <div className="space-y-1.5 text-sm pt-1">
              <p className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-sky-400" />
                <a href={BUSINESS_INFO.phone1Tel} className="hover:text-white font-medium">
                  +91 {BUSINESS_INFO.phone1}
                </a>
                <span>•</span>
                <a href={BUSINESS_INFO.phone2Tel} className="hover:text-white font-medium">
                  +91 {BUSINESS_INFO.phone2}
                </a>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp Medicine Desk
                </a>
              </p>
              <p className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{BUSINESS_INFO.address.fullFormatted}</span>
              </p>
            </div>
          </div>

          {/* External & Verification Links */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white font-headline">
              Quick Connect
            </h4>
            <p className="text-xs text-slate-400">
              Read verified reviews on Google or connect directly with our clinic counter.
            </p>
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.googleRating.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-white hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-gold fill-amber-gold" />
                  <span>
                    Google Reviews ({BUSINESS_INFO.googleRating.score} ★ • {BUSINESS_INFO.googleRating.reviewsCount} Reviews)
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-amber-gold" />
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-white hover:border-slate-700 transition-colors"
              >
                <span>WhatsApp Direct Desk</span>
                <MessageCircle className="w-4 h-4 text-emerald-400" />
              </a>

              <button
                onClick={onOpenCallModal}
                className="w-full inline-flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-white hover:border-slate-700 transition-colors text-left cursor-pointer"
              >
                <span>Telephone Helpline ({BUSINESS_INFO.phoneDisplay})</span>
                <Phone className="w-4 h-4 text-sky-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal Notices & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. {BUSINESS_INFO.address.fullFormatted}.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/disclaimer" className="hover:underline">
              Disclaimer
            </Link>
          </div>

          <p className="max-w-md text-center md:text-right">
            Disclaimer: Information provided is for store enquiries and outpatient consultation scheduling. In medical emergencies, please visit the nearest hospital emergency room.
          </p>
        </div>
      </div>
    </footer>
  );
};
