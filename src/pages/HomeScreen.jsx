import { useState } from "react";
import PropTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import Objet3D from "../components/Objet3D/Objet3D"; // chemin correct
import backgroundVideoJayce from "../assets/medias/videos/jayce_w_gem.mp4";
import confirmationVideoJayce from "../assets/medias/videos/jayce_w_gem_arc.mp4";
import backgroundVideoJinx from "../assets/medias/videos/Jinx_Fond.mp4";
import confirmationVideoJinx from "../assets/medias/videos/Jinx_effect_01.mp4";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./HomeScreen.css"; // Importation du fichier CSS combiné

const SearchBar = ({ setSubmit }) => {
  const handleKeyDown = (event) => {
    const letters = ["j", "i", "n", "x"];
    if (event.key === "Enter" || letters.includes(event.key.toLowerCase())) {
      setSubmit(true);
    }
  };

  const handleSearch = () => {
    setSubmit(true);
  };

  return (
    <div className="search-container">
      <select>
        <option value="euw">EUW</option>
        <option value="eun">EUN</option>
        <option value="jp">JP</option>
      </select>
      <input type="text" placeholder="Summoner + #" onKeyDown={handleKeyDown} />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  setSubmit: PropTypes.func.isRequired,
};

export const HomeScreen = () => {
  const [bgMode, setBgMode] = useState("jayce");
  const [submit, setSubmit] = useState(false);

  const backgroundValue =
    bgMode === "jayce" ? backgroundVideoJayce : backgroundVideoJinx;
  const backgroundValueClicked =
    bgMode === "jayce" ? confirmationVideoJayce : confirmationVideoJinx;

  const objectPosition = [-2.6, 3.5, -4];

  return (
    <>
      <div className="backgroundImage"></div>
      <div className="video-container">
        <video key={bgMode} autoPlay loop muted className="backgroundVideo">
          <source src={backgroundValue} type="video/mp4" />
        </video>
        {submit && (
          <video
            key={bgMode}
            autoPlay
            onEnded={() => setSubmit(false)}
            className="confirmationVideo"
          >
            <source src={backgroundValueClicked} type="video/mp4" />
          </video>
        )}
        <Canvas className="canvas">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Objet3D position={objectPosition} />
        </Canvas>
          <SearchBar setSubmit={setSubmit} />
        <div className="content">
          <Header setBgMode={setBgMode} />
          <Footer />
        </div>
      </div>
    </>
  );
};
