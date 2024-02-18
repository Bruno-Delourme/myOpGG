import './header.css'; 
import '../Fonts/BeaufortforLOL-Bold.ttf';
import logo from '../Img/lolWhiteLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke, faMusic } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <img src={logo} alt="Logo" className="header-logo" />
        <h1>LoL.Searcher</h1>
        <div className="icons-container">
          <FontAwesomeIcon icon={faCircleHalfStroke} className="header-icon" />
          <FontAwesomeIcon icon={faMusic} className="header-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
