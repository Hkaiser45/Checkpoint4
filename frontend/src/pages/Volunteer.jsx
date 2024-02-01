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
    <div className="chosenOne">
      <ul>
        {vol.map((el) => (
          <li key={el.id}>
            <p className="name">
              {el.firstname} {el.lastname}
            </p>
            /<span className="role">{el.name}</span>{" "}
            <p>contacter: {el.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Volunteer;
