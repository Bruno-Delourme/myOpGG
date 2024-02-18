import './header.css'; 
import logo from '../Img/lolWhiteLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header-banner">
      <div className="header-content">
      <img src={logo} alt="Logo" className="header-logo" />
      <h1>LoL.Searcher</h1>
      <FontAwesomeIcon icon={faCircleHalfStroke} className="header-icon" />
      </div>
    </header>
  );
}

export default Header;
