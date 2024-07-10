import React, { useState } from "react";
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
    event.stopPropagation(); // Empêche la propagation de l'événement de clic
    const letters = ["j", "i", "n", "x"];
    if (event.key === "Enter" || letters.includes(event.key.toLowerCase())) {
      setSubmit(true);
    }
  };

  const handleSearch = (event) => {
    event.stopPropagation(); // Empêche la propagation de l'événement de clic
    setSubmit(true);
  };

  const handleContainerClick = (event) => {
    event.stopPropagation(); // Empêche la propagation de l'événement de clic
  };

  return (
    <div className="search-container" onClick={handleContainerClick}>
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
  const [show3DObject, setShow3DObject] = useState(true);

  const handleScreenClick = () => {
    if (bgMode === "jayce") {
      setBgMode("jinx");
      setShow3DObject(false);
    } else {
      setBgMode("jayce");
      setShow3DObject(true);
    }
  };

  const backgroundValue =
    bgMode === "jayce" ? backgroundVideoJayce : backgroundVideoJinx;
  const backgroundValueClicked =
    bgMode === "jayce" ? confirmationVideoJayce : confirmationVideoJinx;

  const objectPosition = [-4, 2.5, -6];

  return (
    <>
      <div className="backgroundImage"></div>
      <div className="video-container" onClick={handleScreenClick}>
        <video key={bgMode} autoPlay loop muted className="backgroundVideo">
          <source src={backgroundValue} type="video/mp4" />
        </video>
        {submit && (
          <video
            key={bgMode + "_confirmation"}
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
          {show3DObject && (
            <Objet3D
              position={objectPosition}
              bloomIntensity={20.0} // Modifiez cette valeur
              bloomThreshold={-1} // Modifiez cette valeur
              bloomSmoothing={1} // Modifiez cette valeur
            />
          )}
        </Canvas>
        <SearchBar setSubmit={() => setSubmit(true)} />
        <div className="content">
          <Header setBgMode={setBgMode} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
