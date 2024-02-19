import { useState } from "react";
import PropTypes from "prop-types";

import "./searchBar.css";
import backgroundVideoJayce from "../../assets/medias/videos/JAYCE_AND_GEM.mp4";
import confirmationVideoJayce from "../../assets/medias/videos/JAYCE_ARC_SOUND.mp4";
import backgroundVideoJinx from "../../assets/medias/videos/Shyzo_Jinx_effect.mp4";
import confirmationVideoJinx from "../../assets/medias/videos/Jinx_appears.mp4";

const SearchBar = ({ bgMode }) => {
  const [submit, setSubmit] = useState(false);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSubmit(true);
    }
  };

  const handleSearch = () => {
    setSubmit(true);
  };
  // conditioning the video depending on mode
  const backgroundValue =
    bgMode === "jayce" ? backgroundVideoJayce : backgroundVideoJinx;
  const backgroundValueClicked =
    bgMode === "jayce" ? confirmationVideoJayce : confirmationVideoJinx;

  return (
    <div className="video-container">
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

      <div className="search-container">
        <select>
          <option value="euw">EUW</option>
          <option value="eun">EUN</option>
          <option value="jp">JP</option>
        </select>
        <input
          type="text"
          placeholder="Summoner + #"
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

SearchBar.defaultProps = {
  bgMode: "jayce",
};
SearchBar.propTypes = {
  bgMode: PropTypes.oneOf(["jayce", "jinx"]),
};

export default SearchBar;
