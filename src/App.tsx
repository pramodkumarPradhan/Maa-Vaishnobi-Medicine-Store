import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { OnlineMedicineSection } from "./components/OnlineMedicineSection";
import { QuickActionBar } from "./components/QuickActionBar";
import { Services } from "./components/Services";
import { MedicineStoreFeature } from "./components/MedicineStoreFeature";
import { VisitingDoctorsSection } from "./components/VisitingDoctorsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { LocationSection } from "./components/LocationSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { AppointmentModal } from "./components/AppointmentModal";
import { CallModal } from "./components/CallModal";
import { OnlineMedicineOrderModal } from "./components/OnlineMedicineOrderModal";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { Disclaimer } from "./pages/Disclaimer";

const HomePage: React.FC<{
  onOpenModal: (doctorId?: string) => void;
  onOpenCallModal: () => void;
  onOpenOrderMedicineModal: () => void;
}> = ({ onOpenModal, onOpenCallModal, onOpenOrderMedicineModal }) => {
  return (
    <>
      <Header
        onOpenAppointmentModal={() => onOpenModal()}
        onOpenCallModal={onOpenCallModal}
        onOpenOrderMedicineModal={onOpenOrderMedicineModal}
      />
      <main>
        <Hero
          onOpenAppointmentModal={() => onOpenModal()}
          onOpenCallModal={onOpenCallModal}
          onOpenOrderMedicineModal={onOpenOrderMedicineModal}
        />


        {/* Quick Action Cards - Primary: Book OPD Appointment */}
        <QuickActionBar
          onOpenAppointmentModal={() => onOpenModal()}
          onOpenCallModal={onOpenCallModal}
          onOpenOrderMedicineModal={onOpenOrderMedicineModal}
        />
        {/* Compact Online Medicine 5 KM Radius Section */}
        <OnlineMedicineSection onOpenOrderModal={onOpenOrderMedicineModal} />

        {/* TOP FOCUS: OPD Doctor Consultation & Visiting Specialist Doctors */}
        {/* <DoctorConsultationFeature onOpenAppointmentModal={() => onOpenModal()} />   */}

          <VisitingDoctorsSection
            onSelectDoctorToBook={(doctorId) => onOpenModal(doctorId)}
            onOpenCallModal={onOpenCallModal}
          />


        {/* <PhotoGallerySection
          onOpenAppointmentModal={() => onOpenModal()}
          onOpenCallModal={onOpenCallModal}
        /> */}

        {/* <About /> */}

        <Services
          onOpenAppointmentModal={() => onOpenModal()}
          onOpenCallModal={onOpenCallModal}
        />

        <MedicineStoreFeature
          onOpenCallModal={onOpenCallModal}
          onOpenOrderMedicineModal={onOpenOrderMedicineModal}
        />
        <ReviewsSection />
        
        {/* FAQ Section - Rich Snippets & Local SEO Search Boost */}
        {/* <FaqSection
          onOpenAppointmentModal={() => onOpenModal()}
          onOpenOrderMedicineModal={onOpenOrderMedicineModal}
        /> */}

        <LocationSection onOpenCallModal={onOpenCallModal} />
        <FinalCTA
          onOpenAppointmentModal={() => onOpenModal()}
          onOpenCallModal={onOpenCallModal}
        />
      </main>
      <Footer onOpenCallModal={onOpenCallModal} />
      <MobileStickyBar
        onOpenAppointmentModal={() => onOpenModal()}
        onOpenCallModal={onOpenCallModal}
        onOpenOrderMedicineModal={onOpenOrderMedicineModal}
      />
    </>
  );
};

export const App: React.FC = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState<boolean>(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState<boolean>(false);
  const [isOrderMedicineModalOpen, setIsOrderMedicineModalOpen] = useState<boolean>(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);

  const handleOpenModal = (doctorId?: string) => {
    setSelectedDoctorId(doctorId || null);
    setIsAppointmentModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAppointmentModalOpen(false);
    setSelectedDoctorId(null);
  };

  const handleOpenCallModal = () => {
    setIsCallModalOpen(true);
  };

  const handleCloseCallModal = () => {
    setIsCallModalOpen(false);
  };

  const handleOpenOrderMedicineModal = () => {
    setIsOrderMedicineModalOpen(true);
  };

  const handleCloseOrderMedicineModal = () => {
    setIsOrderMedicineModalOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-body bg-[#fcfdfd] text-[#0f172a]">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenModal={handleOpenModal}
                onOpenCallModal={handleOpenCallModal}
                onOpenOrderMedicineModal={handleOpenOrderMedicineModal}
              />
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>

        <AppointmentModal
          isOpen={isAppointmentModalOpen}
          initialDoctorId={selectedDoctorId}
          onClose={handleCloseModal}
        />

        <CallModal
          isOpen={isCallModalOpen}
          onClose={handleCloseCallModal}
        />

        <OnlineMedicineOrderModal
          isOpen={isOrderMedicineModalOpen}
          onClose={handleCloseOrderMedicineModal}
        />
      </div>
    </Router>
  );
};

export default App;
