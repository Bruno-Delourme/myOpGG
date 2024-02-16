import {React} from 'react';
import lolLogo from "../Img/lolWhiteLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";


function Header({ toggleTheme, darkMode }) {
    return (
      <div className={`header ${darkMode ? 'dark-mode' : ''}`}> {}
        <div className="logo">
          <img src={lolLogo} alt="LoL Logo" /> {}
        </div>
        <div className="theme-switcher" onClick={toggleTheme}>
          {darkMode ? (
            <FontAwesomeIcon icon={faCircleHalfStroke} rotation={180} />
          ) : (
            <FontAwesomeIcon icon={faCircleHalfStroke} />
          )}
          {darkMode ? " Light Mode" : " Dark Mode"}
        </div>
      </div>
    );
  }
  
  export default Header;