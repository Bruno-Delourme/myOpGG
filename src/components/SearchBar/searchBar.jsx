import PropTypes from "prop-types";

import "./searchBar.css";

const SearchBar = ({ setSubmit }) => {
  const handleKeyDown = (event) => {
    const letters = ["j", "i","n","x"];
    if (event.key === "Enter" || letters.includes(event.key.toLowerCase())) {
      setSubmit(true);
    }
  };
  
  

  const handleSearch = () => {
    setSubmit(true);
  };

  return (
    <div className="video-container">
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

SearchBar.propTypes = {
  setSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
