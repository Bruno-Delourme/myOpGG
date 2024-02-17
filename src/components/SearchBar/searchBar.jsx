import React, { useState } from "react";
import "./searchBar.css";
import backgroundVideo from "../Vidéos/JAYCE_AND_GEM.mp4";
import confirmationVideo from "../Vidéos/JAYCE_ARC_SOUND.mp4";

function searchBar() {
  const [submit, setSubmit] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSubmit(true);
    }
  };

  return (
    <div className="video-container">
      <video autoPlay loop muted className="backgroundVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      {submit && (
        <video
          autoPlay
          muted
          onEnded={() => setSubmit(false)}
          className="confirmationVideo"
        >
          <source src={confirmationVideo} type="video/mp4" />
        </video>
      )}

      <div className="search-container">
        <input type="text" placeholder="summoner" onKeyDown={handleKeyDown} />
        <select>
          <option value="euw">EUW</option>
          <option value="eun">EUN</option>
          <option value="jp">JP</option>
        </select>
      </div>
    </div>
  );
}

export default searchBar;
