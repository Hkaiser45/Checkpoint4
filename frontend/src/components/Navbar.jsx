import { Link } from "react-router-dom";
import ghostIcon from "../assets/ghostpicture.jpg";

function Navbar() {
  return (
    <>
      <div>
        <Link to="/">
          <img src={ghostIcon} alt="logo" className="logoHome" />
        </Link>
      </div>
      <div>
        <ul>
          <li>connexion</li>
          <Link to="/volontaires">
            <li>liste volontaires</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
