import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import backgroundVideoJayce from "../assets/medias/videos/JAYCE_AND_GEM.mp4";
import confirmationVideoJayce from "../assets/medias/videos/JAYCE_ARC_SOUND.mp4";
import backgroundVideoJinx from "../assets/medias/videos/Jinx.mp4";
import confirmationVideoJinx from "../assets/medias/videos/Jinx_appears_VO2.mp4";
import confirmationVideoJinxII from "../assets/medias/videos/Jinx_appears.mp4";

export const HomeScreen = () => {
  // by default bgMode is set to jayce
  const [bgMode, setBgMode] = useState("jayce");
  const [submit, setSubmit] = useState(false);

  // conditioning the video depending on mode
  const backgroundValue =
    bgMode === "jayce" ? backgroundVideoJayce : backgroundVideoJinx;
  const backgroundValueClicked =
    bgMode === "jayce" ? confirmationVideoJayce : confirmationVideoJinx;

  return (
    <div className="video-container">
      {/* @todo: your mission: making a VideoBackground component */}
      <video key={bgMode} autoPlay loop muted className="backgroundVideo">
        <source src={backgroundValue} type="video/mp4" />
      </video>
      {submit && (
        <video
          // the key on video triggers rerender when value is changing
          key={bgMode}
          autoPlay
          onEnded={() => setSubmit(false)}
          className="confirmationVideo"
        >
          <source src={backgroundValueClicked} type="video/mp4" />
        </video>
      )}
      {/* passing the setState from submit to searchBar we need the submit value here because we use it here */}
      <SearchBar setSubmit={setSubmit} />
      {/* passing the set function to header as its the trigger of the changing mode is */}
      <Header setBgMode={setBgMode} />
      <Footer />
    </div>
  );
};
