import React, { useState } from "react";
import Header from "./components/Header";
import VideoBackground from "./components/VideoBackground";
import ModalApplyNow from "./components/ModalApplyNow";
import ProgramsSection from "./components/ProgramsSection";
import Rank from "./components/Rank";
import Whymit from "./components/Whymit";
import Footer from "./components/Footer";

function App() {
  const [showModal, setShowModal] = useState(true);

  // ✅ Add the missing function to open the modal
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header onEnquireClick={handleOpenModal} />
      <div className="main-content">
        <VideoBackground isBlurred={showModal} isModalOpen={showModal} />

        {showModal && <ModalApplyNow onClose={handleCloseModal} />}

        {!showModal && (
          <>
            <ProgramsSection />
            <Rank />
            <Whymit onEnquireClick={handleOpenModal} />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
