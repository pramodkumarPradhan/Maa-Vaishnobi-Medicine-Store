import React, { useState } from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { X, ShoppingBag, MapPin, Truck, ShieldCheck, CheckCircle2, MessageCircle } from "lucide-react";

interface OnlineMedicineOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnlineMedicineOrderModal: React.FC<OnlineMedicineOrderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [medicineList, setMedicineList] = useState("");
  const [selectedRadius] = useState("Within 5 KM (Local Balasore)");
  const [urgentDelivery, setUrgentDelivery] = useState(true);

  if (!isOpen) return null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim() || !customerPhone.trim() || !deliveryAddress.trim()) {
      alert("Please enter your name, phone number, and delivery address.");
      return;
    }

    const orderText = `Hello Maa Vaishnobi Medicine Store & Clinic
[ONLINE MEDICINE ORDER - 5 KM RADIUS DELIVERY]
Customer Name: ${customerName.trim()}
Phone: ${customerPhone.trim()}
Delivery Location: ${deliveryAddress.trim()} (${selectedRadius})
Delivery Priority: ${urgentDelivery ? "Express Urgent (< 2 Hours)" : "Standard Same Day"}
Medicines List: ${medicineList.trim() || "Prescription order via WhatsApp"}

Please confirm medicine stock & delivery details.
Thank you!`;

    const whatsappUrl = `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 modal-backdrop transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-xl w-full p-5 sm:p-7 z-10 max-h-[92vh] flex flex-col border border-emerald-100">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                <Truck className="w-3 h-3 text-emerald-600" />
                Within 5 KM Radius Delivery
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight mt-0.5">
                Order Online Medicine
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmitOrder} className="space-y-4 pt-4 overflow-y-auto pr-1">
          
          {/* Highlight Badge */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-sky-500/10 border border-emerald-300/40 flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              <strong>Local Balasore Express Service:</strong> Quick home delivery & counter pickup reservation within <strong>5 KM radius</strong> from Jail Road, Manikhamb, Balasore.
            </p>
          </div>

          {/* Customer Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Customer Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Pramod Kumar"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-sm text-slate-900 font-medium"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              WhatsApp / Phone Number <span className="text-rose-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. 9827439139"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-sm text-slate-900 font-medium"
            />
          </div>

          {/* Delivery Location within 5 KM */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Delivery Address &amp; Landmark (Within 5 km radius) <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Jail Road, near Manikhamb circle, Balasore"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-sm text-slate-900 font-medium"
            />
          </div>

          {/* Distance Radius Badge */}
          <div className="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs">
            <span className="font-semibold text-slate-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Coverage Distance:
            </span>
            <span className="font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-lg">
              Within 5.0 KM Radius
            </span>
          </div>

          {/* Medicine List input */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              List Required Medicines / OTC Items
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Paracetamol 500mg - 1 strip, Volini spray - 1 bottle, Pantop 40mg - 1 strip"
              value={medicineList}
              onChange={(e) => setMedicineList(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none text-sm text-slate-900 font-medium"
            ></textarea>
          </div>

          {/* Prescription Photo via WhatsApp */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200/90 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Prescription Photo</span>
              </label>
              <span className="text-[10px] font-extrabold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-200">
                Direct WhatsApp
              </span>
            </div>

            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              If you have a prescription, you can send your prescription photo directly to our WhatsApp pharmacy counter:
            </p>

            <a
              href={`${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(
                "Hello Maa Vaishnobi Medicine Store, I would like to send my prescription photo for medicine order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm active:scale-95 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Send Prescription Photo to WhatsApp</span>
            </a>
          </div>

          {/* Priority Checkbox */}
          <div className="flex items-center gap-2.5 pt-1">
            <input
              type="checkbox"
              id="urgentDelivery"
              checked={urgentDelivery}
              onChange={(e) => setUrgentDelivery(e.target.checked)}
              className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 cursor-pointer"
            />
            <label htmlFor="urgentDelivery" className="text-xs text-slate-800 font-semibold cursor-pointer">
              ⚡ Request Express Delivery (&lt; 2 Hours Delivery within 5 km)
            </label>
          </div>

          {/* Submit CTA */}
          <div className="pt-2 pb-1">
            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-headline text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/25 active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
              <span>Confirm &amp; Order Medicine via WhatsApp</span>
            </button>
            <p className="text-[11px] text-center text-slate-500 mt-2">
              <ShieldCheck className="w-3.5 h-3.5 inline text-emerald-600 mr-1" />
              100% Genuine Certified Medicines • Local Dispensary Counter Desk
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
