import PropTypes from "prop-types";
import { useState, useRef } from "react";

//medias import
import logo from "../../assets/medias/image/lolWhiteLogo.png";
import "./header.css";
import "../../assets/fonts/BeaufortforLOL-Bold.ttf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faMusic } from "@fortawesome/free-solid-svg-icons";
import song from "../../assets/medias/videos/ambiance.mp4";

const Header = ({ setBgMode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); // Référence pour la vidéo (utilisée ici uniquement pour le son)

  const toggleSound = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleClick = () => {
    setBgMode((previousMode) => (previousMode === "jayce" ? "jinx" : "jayce"));
  };
  return (
    <header className="header-container">
      <div className="header-content">
        <img src={logo} alt="Logo" className="header-logo" />
        <h1>LoL.Searcher</h1>
        <div className="icons-container">
          <FontAwesomeIcon
            icon={faCircleHalfStroke}
            id="idMode"
            className="header-icon"
            onClick={handleClick}
          />
          {}
          <FontAwesomeIcon
            icon={faMusic}
            id="idMusic"
            className="header-icon"
            onClick={toggleSound}
          />
        </div>
      </div>

      <video ref={audioRef} src={song} style={{ display: "none" }}></video>
    </header>
  );
};

Header.propTypes = {
  setBgMode: PropTypes.func.isRequired,
};

export default Header;
