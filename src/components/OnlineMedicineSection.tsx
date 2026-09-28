import React from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { ShoppingBag, Truck, CheckCircle2, MessageCircle, ArrowRight, Zap } from "lucide-react";

interface OnlineMedicineSectionProps {
  onOpenOrderModal: () => void;
}

export const OnlineMedicineSection: React.FC<OnlineMedicineSectionProps> = ({
  onOpenOrderModal,
}) => {
  return (
    <section
      id="order-medicine-5km"
      className="-mt-10 sm:-mt-14 pt-14 sm:pt-20 pb-6 sm:pb-10 bg-slate-950 text-white relative overflow-hidden border-b border-emerald-900/50 z-10"
    >
      {/* Background Decorative Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Glassmorphism Highlight Card */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900/95 via-emerald-950/90 to-slate-900/95 border-2 border-emerald-500/40 p-5 sm:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Left Content */}
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider animate-pulse">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>5 KM Radius Local Delivery</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700">
                  <Truck className="w-3.5 h-3.5 text-teal-400" />
                  <span>Express &lt; 2 Hours Delivery</span>
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Order Medicine Online <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">(Within 5 KM Radius)</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                100% genuine certified medicines delivered directly to your doorstep from our Jail Road counter in Balasore. Fast, simple &amp; hassle-free!
              </p>

              {/* Quick Feature Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-slate-200">
                <span className="flex items-center gap-1.5 bg-slate-950/70 px-3 py-1.5 rounded-xl border border-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Jail Road, Manikhamb, Balasore</span>
                </span>
                <span className="flex items-center gap-1.5 bg-slate-950/70 px-3 py-1.5 rounded-xl border border-slate-800 font-medium">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Send prescription photo via WhatsApp</span>
                </span>
              </div>
            </div>

            {/* Right Action CTAs */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 pt-2 md:pt-0">
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/25 active:scale-95 transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4.5 h-4.5 text-slate-950" />
                <span>ORDER MEDICINE ONLINE (5 KM)</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <a
                href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                  "Hello Maa Vaishnobi Medicine Store, I would like to order medicines online within 5 km radius in Balasore."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider border border-emerald-500/40 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Order</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
