import  { useState, useRef } from 'react';
import "./header.css";
import "../Fonts/BeaufortforLOL-Bold.ttf";
import logo from "../Img/lolWhiteLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faMusic } from "@fortawesome/free-solid-svg-icons";
import song from "../Vidéos/ambiance.mp4";


const Header = () => {
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
      
      <video ref={audioRef} src={song} style={{ display: 'none' }}></video>
    </header>
  );
};

export default Header;
