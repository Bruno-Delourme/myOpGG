import { useState } from "react";
import "./searchBar.css";
import backgroundVideo from "../../assets/medias/videos/JAYCE_AND_GEM.mp4";
import confirmationVideo from "../../assets/medias/videos/JAYCE_ARC_SOUND.mp4";

function SearchBar() {
  const [submit, setSubmit] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSubmit(true);
    }
  };

  const handleSearch = () => {
    setSubmit(true);
  };

  return (
    <div className="video-container">
      <video autoPlay loop muted className="backgroundVideo">
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      {submit && (
        <video
          autoPlay
          onEnded={() => setSubmit(false)}
          className="confirmationVideo"
        >
          <source src={confirmationVideo} type="video/mp4" />
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
}

export default SearchBar;
