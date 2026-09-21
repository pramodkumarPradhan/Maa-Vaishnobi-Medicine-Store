import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PhotoGallerySection } from "./components/PhotoGallerySection";
import { QuickActionBar } from "./components/QuickActionBar";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { MedicineStoreFeature } from "./components/MedicineStoreFeature";
import { DoctorConsultationFeature } from "./components/DoctorConsultationFeature";
import { VisitingDoctorsSection } from "./components/VisitingDoctorsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { LocationSection } from "./components/LocationSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { AppointmentModal } from "./components/AppointmentModal";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Disclaimer } from "./pages/Disclaimer";

const HomePage: React.FC<{
  onOpenModal: (doctorId?: string) => void;
}> = ({ onOpenModal }) => {
  return (
    <>
      <Header onOpenAppointmentModal={() => onOpenModal()} />
      <main>
        <Hero onOpenAppointmentModal={() => onOpenModal()} />
        <PhotoGallerySection onOpenAppointmentModal={() => onOpenModal()} />
        <QuickActionBar onOpenAppointmentModal={() => onOpenModal()} />
        <About />
        <Services onOpenAppointmentModal={() => onOpenModal()} />
        <DoctorConsultationFeature onOpenAppointmentModal={() => onOpenModal()} />
        <VisitingDoctorsSection
          onSelectDoctorToBook={(doctorId) => onOpenModal(doctorId)}
        />
        <MedicineStoreFeature />
        <ReviewsSection />
        <LocationSection />
        <FinalCTA onOpenAppointmentModal={() => onOpenModal()} />
      </main>
      <Footer />
      <MobileStickyBar onOpenAppointmentModal={() => onOpenModal()} />
    </>
  );
};

export const App: React.FC = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] =
    useState<boolean>(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);

  const handleOpenModal = (doctorId?: string) => {
    setSelectedDoctorId(doctorId || null);
    setIsAppointmentModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAppointmentModalOpen(false);
    setSelectedDoctorId(null);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-body bg-[#fcfdfd] text-[#0f172a]">
        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenModal={handleOpenModal} />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>

        <AppointmentModal
          isOpen={isAppointmentModalOpen}
          initialDoctorId={selectedDoctorId}
          onClose={handleCloseModal}
        />
      </div>
    </Router>
  );
};

export default App;
