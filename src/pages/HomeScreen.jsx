import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import backgroundVideoJayce from "../assets/medias/videos/JAYCE_AND_GEM.mp4";
import confirmationVideoJayce from "../assets/medias/videos/JAYCE_ARC_SOUND.mp4";
import backgroundVideoJinx from "../assets/medias/videos/Jinx_Fond.mp4";
import confirmationVideoJinx from "../assets/medias/videos/Jinx_effect_01.mp4";
import { Canvas } from '@react-three/fiber';
import Objet3D from "../components/Objet3D/Objet3D"; //chemin correct

export const HomeScreen = () => {
  // par défaut bgMode
  const [bgMode, setBgMode] = useState("jayce");
  const [submit, setSubmit] = useState(false);

  // on conditionne le background
  const backgroundValue =
    bgMode === "jayce" ? backgroundVideoJayce : backgroundVideoJinx;
  const backgroundValueClicked =
    bgMode === "jayce" ? confirmationVideoJayce : confirmationVideoJinx;

  return (
    <div className="video-container">
      {/* créer un composant background */}
      <video key={bgMode} autoPlay loop muted className="backgroundVideo">
        <source src={backgroundValue} type="video/mp4" />
      </video>
      {submit && (
        <video
          // la clé de vidéo est enclenchée et rerend quand la value change
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
        <Objet3D />
      </Canvas>

      {/* on passe  de l'état submit à searchbar car on a besoin de la value submit ici parce qu'on l'utilise */}
      <SearchBar setSubmit={setSubmit} />
      {/* on passe la set function au header pour que ça trigger le changement de mode */}
      <Header setBgMode={setBgMode} />
      <Footer />
    </div>
  );
};
