import React from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Star, ExternalLink } from "lucide-react";

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-[#0B192C] text-white border-t border-slate-800"
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400 font-headline">
            COMMUNITY REPUTATION
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-white mt-2 tracking-tight">
            Trusted by the Balasore Community
          </h2>
          <p className="text-slate-300 text-base mt-3">
            Authentic feedback and community appreciation from patients across Manikhamb, Gopalgoan, and surrounding Balasore localities.
          </p>
        </div>

        {/* Central Stat Box */}
        <div className="max-w-3xl mx-auto bg-[#12233e] rounded-3xl p-8 sm:p-12 border border-slate-700/80 shadow-2xl text-center space-y-6">
          {/* Stars */}
          <div className="flex items-center justify-center gap-1.5 text-amber-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-amber-gold" />
            ))}
          </div>

          <div className="space-y-1">
            <div className="font-display text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
              {BUSINESS_INFO.googleRating.score}{" "}
              <span className="text-amber-gold text-4xl sm:text-5xl">★</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-slate-200">
              {BUSINESS_INFO.googleRating.reviewsCount} Google Reviews
            </div>
            <p className="text-slate-400 text-sm max-w-md mx-auto pt-1">
              Recognized locally for supportive care, dependable counter assistance, and organized doctor consultation hours.
            </p>
          </div>

          {/* Button: VIEW GOOGLE REVIEWS */}
          <div className="pt-4">
            <a
              href={BUSINESS_INFO.googleRating.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-headline text-sm font-extrabold tracking-wide uppercase transition-all shadow-lg active:scale-95"
            >
              <span>VIEW GOOGLE REVIEWS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
