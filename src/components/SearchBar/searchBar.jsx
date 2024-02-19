import PropTypes from "prop-types";

import "./searchBar.css";

// keep in mind a searchbar is just a searchbar and its purpose is not to be a background home screen
const SearchBar = ({ setSubmit }) => {
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
