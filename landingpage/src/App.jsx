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

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header onEnquireClick={handleOpenModal} />

      <div id="blur-container" className={showModal ? "blurred" : ""}>
        <VideoBackground />
        {!showModal && (
          <>
            <ProgramsSection />
            <Rank />
            <Whymit onEnquireClick={handleOpenModal} />
            <Footer />
          </>
        )}
      </div>

      {showModal && <ModalApplyNow onClose={handleCloseModal} />}
    </>
  );
}

export default App;
