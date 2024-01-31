import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <p>
        Bonjour! personne ne veux de vous? moi j'ai besoin de vous! venez pour
        un monde meilleur{" "}
      </p>
      <Link to="/famille">
        <button type="button">rejoignez moi</button>
      </Link>
    </div>
  );
}

export default Homepage;
