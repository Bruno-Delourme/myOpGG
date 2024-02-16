import { useState } from "react";
import "./App.css";
import backgroundVideo from "./JAYCE_AND_GEM.mp4";
import confirmationVideo from "./JAYCE_ARC_SOUND.mp4";

function Navbar() {
  return <nav>{/*boutons */}</nav>;
}

function SearchBar() {
  const [searchConfirmed, setSearchConfirmed] = useState(false);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      setSearchConfirmed(true);
    }
  };

  return (
    <div className="search-bar">
      <select name="region" id="region-select">
        <option value="euw">Europe West</option>
        <option value="euw">Europe East</option>
        <option value="euw">Japan</option>
        {/* POUR PLUS TARD => les autres potentielles régions à ajouter*/}
      </select>
      <input
        type="text"
        placeholder="Game Name + #EUW"
        onKeyDown={handleSearch}
      />
      <button type="submit" onClick={() => setSearchConfirmed(true)}>
        Search
      </button>

      {searchConfirmed && <ConfirmationVideo />}
    </div>
  );
}

function ConfirmationVideo() {
  return (
    <div className="confirmationVideo">
      <video autoPlay>
        <source src={confirmationVideo} type="video/mp4" />
      </video>
    </div>
  );
}

function App() {
  
  return (
    <div className="App">
      <div className="backgroundVideo">
        <video autoPlay loop>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <Navbar />
      <SearchBar />
    </div>
  );
}

export default App;
