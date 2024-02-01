import { Link } from "react-router-dom";
import ghostIcon from "../assets/ghostpicture.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <img src={ghostIcon} alt="logo" className="logoHome" />
        </Link>
      </div>
      <div className="option">
        <ul>
          <Link to="/login">
            <li>Admin</li>
          </Link>
          <Link to="/volontaires">
            <li>Liste des volontaires</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
