import React from "react";
import { useGoogleReviews } from "../hooks/useGoogleReviews";
import { Star, ExternalLink, MessageSquarePlus, CheckCircle2 } from "lucide-react";

export const ReviewsSection: React.FC = () => {
  const { score, reviewsCount, reviewsUrl, handlePostReview } = useGoogleReviews();

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-[#0B192C] text-white border-t border-slate-800 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest font-headline mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>OFFICIAL 5-STAR GOOGLE REVIEWS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold text-white mt-2 tracking-tight">
            Trusted by the Balasore Community
          </h2>
          <p className="text-slate-300 text-base mt-3">
            Authentic feedback and community appreciation from patients across Manikhamb, Gopalgoan, and surrounding Balasore localities.
          </p>
        </div>

        {/* Central Stat Box */}
        <div className="max-w-3xl mx-auto bg-[#12233e] rounded-3xl p-8 sm:p-12 border border-slate-700/80 shadow-2xl text-center space-y-6 relative">
          
          {/* 5 Stars */}
          <div className="flex items-center justify-center gap-2 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-9 h-9 fill-amber-400 text-amber-400 drop-shadow-md" />
            ))}
          </div>

          <div className="space-y-2">
            <div className="font-display text-5xl sm:text-6xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
              <span>{score.toFixed(1)}</span>
              <span className="text-amber-400 text-4xl sm:text-5xl">★</span>
            </div>

            <div className="text-xl sm:text-2xl font-extrabold text-amber-300 tracking-wide flex items-center justify-center gap-2">
              <span>{reviewsCount} Verified Google Reviews</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Live Google Count"></span>
            </div>

            <p className="text-slate-300 text-sm max-w-md mx-auto pt-1 font-medium">
              Recognized locally for supportive care, dependable counter assistance, and organized doctor consultation hours.
            </p>
          </div>

          {/* Action Buttons: Write Google Review & View All */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handlePostReview}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-headline text-sm font-extrabold tracking-wide uppercase transition-all shadow-lg shadow-amber-500/20 active:scale-95 cursor-pointer"
            >
              <MessageSquarePlus className="w-5 h-5 text-slate-950" />
              <span>POST A GOOGLE REVIEW</span>
            </button>

            <a
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-headline text-sm font-extrabold tracking-wide uppercase border border-slate-700 transition-all active:scale-95"
            >
              <span>VIEW ALL GOOGLE REVIEWS</span>
              <ExternalLink className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          <p className="text-[11px] text-slate-400 pt-2 flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Posting a review automatically updates our community rating total on Google</span>
          </p>
        </div>
      </div>
    </section>
  );
};
