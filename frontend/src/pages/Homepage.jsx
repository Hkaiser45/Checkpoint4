import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="home">
      <p className="slogan">
        "Vous vous sentez inutile ici bas?vous etes au bon endroit, entraidez
        vous pour divers objectifs. Le monde a besoin de vous...j'ai besoin de
        vous."
      </p>
      <Link to="/famille">
        <button type="button" className="firstbutton">
          Rejoignez nous
        </button>
      </Link>
    </div>
  );
}

export default Homepage;
