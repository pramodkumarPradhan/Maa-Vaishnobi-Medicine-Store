import React, { useState, useEffect, useRef } from "react";
import { BUSINESS_INFO } from "../data/businessInfo";
import { Home, UserCheck, Calendar, MessageCircle, Phone } from "lucide-react";

interface MobileStickyBarProps {
  onOpenAppointmentModal: () => void;
  onOpenCallModal?: () => void;
}

type TabId = "home" | "clinic" | "book" | "chat" | "call";

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenAppointmentModal,
  onOpenCallModal,
}) => {
  const [activeTab, setActiveTab] = useState<TabId>("home");
  const isNavigatingRef = useRef(false);
  const navTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTabClick = (tab: TabId) => {
    setActiveTab(tab);
    isNavigatingRef.current = true;
    if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
    navTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 900);
  };

  // Auto detect active section on scroll when not manually clicking
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (isNavigatingRef.current) return;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const clinicSection = document.getElementById("clinic");
          if (clinicSection) {
            const rect = clinicSection.getBoundingClientRect();
            if (rect.top <= 350 && rect.bottom >= 200) {
              setActiveTab("clinic");
              ticking = false;
              return;
            }
          }

          const heroSection = document.getElementById("hero");
          if (heroSection) {
            const rect = heroSection.getBoundingClientRect();
            if (rect.bottom >= 200) {
              setActiveTab("home");
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (navTimeoutRef.current) clearTimeout(navTimeoutRef.current);
    };
  }, []);

  const getTabClass = (id: TabId) => {
    const isSelected = activeTab === id;
    if (isSelected) {
      return "flex flex-1 flex-col items-center justify-center py-1 px-1.5 rounded-xl bg-primary text-white shadow-md shadow-sky-900/25 active:scale-95 transition-all duration-150 ease-out";
    }
    return "flex flex-1 flex-col items-center justify-center py-1 text-slate-600 hover:text-slate-900 active:scale-95 transition-all duration-150 ease-out";
  };

  const getIconClass = (id: TabId) => {
    return activeTab === id ? "w-4 h-4 text-white" : "w-4 h-4 text-slate-600";
  };

  return (
    <aside
      aria-label="Quick Mobile Actions"
      className="fixed bottom-0 inset-x-0 z-40 flex sm:hidden items-center justify-between px-2 py-2 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] select-none"
    >
      <a
        href="#hero"
        onClick={() => handleTabClick("home")}
        className={getTabClass("home")}
      >
        <Home className={getIconClass("home")} />
        <span className="text-[10px] font-bold mt-0.5 tracking-tight">Home</span>
      </a>

      <a
        href="#clinic"
        onClick={() => handleTabClick("clinic")}
        className={getTabClass("clinic")}
      >
        <UserCheck className={getIconClass("clinic")} />
        <span className="text-[10px] font-bold mt-0.5 tracking-tight">Clinic</span>
      </a>

      <button
        onClick={() => {
          handleTabClick("book");
          onOpenAppointmentModal();
        }}
        className={getTabClass("book")}
      >
        <Calendar className={getIconClass("book")} />
        <span className="text-[10px] font-extrabold mt-0.5 tracking-wider uppercase">Book</span>
      </button>

      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleTabClick("chat")}
        className={getTabClass("chat")}
      >
        <MessageCircle className={getIconClass("chat")} />
        <span className="text-[10px] font-bold mt-0.5 tracking-tight">Chat</span>
      </a>

      <button
        onClick={() => {
          handleTabClick("call");
          if (onOpenCallModal) onOpenCallModal();
        }}
        className={getTabClass("call")}
      >
        <Phone className={getIconClass("call")} />
        <span className="text-[10px] font-bold mt-0.5 tracking-tight">Call</span>
      </button>
    </aside>
  );
};
