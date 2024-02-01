import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="home">
      <p className="slogan">
        "Vous vous sentez inutile, vous ne trouvez pas d'endroit où exploiter
        vos qualités personnelles?Vous etes au bon endroit!
        <span>Faire du volontariat et etre remunéré.</span>
        <br />A l'aide de vos competences personnelles, entraidez vous pour un
        objectif commun: rendre notre monde meilleur.
        <br />
        Les autres ont besoin de vous, j'ai besoin de vous...
        <span>le monde a besoin de vous</span>...."
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
