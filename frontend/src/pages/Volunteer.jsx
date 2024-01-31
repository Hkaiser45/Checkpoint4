import axios from "axios";
import { useState, useEffect } from "react";

function Volunteer() {
  const [vol, setVol] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/volunteers`)
      .then((res) => setVol(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {vol.map((el) => (
        <li key={el.id}>
          <p>
            {el.firstname} {el.lastname}/{el.name}{" "}
          </p>
          <p>contacter:{el.email}</p>
        </li>
      ))}
      ;
    </div>
  );
}

export default Volunteer;
