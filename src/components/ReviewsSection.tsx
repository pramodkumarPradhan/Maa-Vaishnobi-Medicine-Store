import React from "react";
import { useGoogleReviews } from "../hooks/useGoogleReviews";
import {
  Star,
  ExternalLink,
  MessageSquarePlus,
  CheckCircle2,
  Quote,
  ThumbsUp,
  BadgeCheck,
  MapPin,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  tag: string;
  avatarBg: string;
  avatarInitials: string;
}

const FEATURED_REVIEWS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Ramesh Chandra Das",
    location: "Jail Road, Balasore",
    rating: 5,
    date: "1 week ago",
    comment:
      "Extremely reliable medicine store in Jail Road. Got my prescribed medicines immediately. Very polite behavior by counter staff and fast home delivery service!",
    tag: "Verified Medicine Buyer",
    avatarBg: "from-sky-500 to-blue-600",
    avatarInitials: "RD",
  },
  {
    id: "rev-2",
    name: "Debashish Mohapatra",
    location: "Manikhamb, Balasore",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Dr. Lopita Nayak ma'am skin consultation was super effective! The clinic team arranged the appointment smoothly without long waiting times.",
    tag: "Dermatology OPD Patient",
    avatarBg: "from-rose-500 to-pink-600",
    avatarInitials: "DM",
  },
  {
    id: "rev-3",
    name: "Priyanka Senapati",
    location: "Gopalgoan, Balasore",
    rating: 5,
    date: "3 weeks ago",
    comment:
      "Best child clinic support in Balasore. Dr. Arun Kumar Giri sir is very gentle with kids. Store has all pediatric medicines under one roof.",
    tag: "Pediatric Patient Parent",
    avatarBg: "from-emerald-500 to-teal-600",
    avatarInitials: "PS",
  },
];

export const ReviewsSection: React.FC = () => {
  const { score, reviewsCount, reviewsUrl, handlePostReview } =
    useGoogleReviews();

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-slate-950 text-white border-t border-slate-800/80 relative overflow-hidden"
    >
      {/* Background Glow Overlay */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-headline font-extrabold uppercase tracking-widest shadow-sm mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>OFFICIAL 5-STAR GOOGLE REVIEWS</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Trusted by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400">Balasore Community</span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed max-w-2xl mx-auto font-medium">
            Authentic feedback and patient appreciation from residents across Manikhamb, Gopalgoan, Jail Road, and neighboring Balasore localities.
          </p>
        </div>

        {/* Top Summary Banner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          
          {/* Main Google Score Box */}
          <div className="md:col-span-2 p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400 drop-shadow-md" />
                ))}
              </div>
              <div className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">
                {score.toFixed(1)} <span className="text-amber-400 font-headline text-3xl">/ 5.0</span>
              </div>
              <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-2 pt-1">
                <BadgeCheck className="w-4 h-4 text-emerald-400 inline" />
                <span>{reviewsCount} Verified Google Reviews</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 w-full sm:w-auto shrink-0">
              <button
                onClick={handlePostReview}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-headline text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all cursor-pointer"
              >
                <MessageSquarePlus className="w-4 h-4 text-slate-950" />
                <span>WRITE A GOOGLE REVIEW</span>
              </button>

              <a
                href={reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-white font-headline text-xs font-extrabold uppercase tracking-wider border border-slate-700 flex items-center justify-center gap-1.5 active:scale-95 transition-all"
              >
                <span>VIEW GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Genuine Medicine Guarantee (Hidden on Mobile) */}
          <div className="hidden md:flex p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex-col justify-between space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-white font-headline">100% Genuine</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">Certified Pharmacy</div>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                Direct batch supply from certified pharmaceutical distributors in Odisha.
              </p>
            </div>
          </div>

          {/* OPD Satisfaction Box (Hidden on Mobile) */}
          <div className="hidden md:flex p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex-col justify-between space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-white font-headline">99.4% Positive</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-0.5">Patient Satisfaction</div>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                Friendly counter assistance &amp; organized doctor consultation schedules.
              </p>
            </div>
          </div>

        </div>

        {/* Patient Testimonial Cards Grid (3 Featured Reviews) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Header: Avatar, Name & Verified Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${rev.avatarBg} text-white font-black text-sm flex items-center justify-center shadow-md shrink-0`}
                    >
                      {rev.avatarInitials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-headline group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                        <span>{rev.name}</span>
                        <BadgeCheck className="w-4 h-4 text-sky-400 shrink-0" />
                      </h4>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5 font-medium">
                        <MapPin className="w-3 h-3 text-emerald-400" />
                        <span>{rev.location}</span>
                      </div>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-slate-700 group-hover:text-amber-400/30 transition-colors shrink-0" />
                </div>

                {/* Rating Stars & Tag */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                    {rev.tag}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  "{rev.comment}"
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Google Review
                </span>
                <span className="text-slate-400 font-medium">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

