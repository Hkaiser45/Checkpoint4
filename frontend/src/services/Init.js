import { useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import axios from "./axios";

function Init() {
  const { setUser, setLoading } = useUser();
  useEffect(() => {
    axios
      .get("/refresh")
      .then((response) => {
        console.info("Token rafraîchi avec succès", response.data.user);
        setUser(response.data.user);
      })
      .catch((error) => {
        console.error("Erreur lors du rafraîchissement du token :", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Ce composant ne rend rien
  return null;
}

export default Init;
