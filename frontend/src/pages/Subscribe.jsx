import axios from "axios";
import { useState, useEffect } from "react";

function Subscribe() {
  const [practice, setPratice] = useState([]);
  const [choose, setChoose] = useState("");
  const [insertId, setInsertId] = useState(null);
  const [succes, setSucces] = useState([
    {
      firstname: "",
      lastname: "",
      email: "",
      practice: "",
    },
  ]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/practices`)
      .then((res) => setPratice(res.data))
      .catch((err) => console.error(err));
  }, []);
  const handleChange = (e) => {
    setSucces({ ...succes, [e.target.name]: e.target.value });
    setChoose(e.target.value);
  };
  console.info(succes, choose, insertId);
  const handlePost = async () => {
    try {
      await axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/volunteers`, {
          firstname: succes.firstname,
          lastname: succes.lastname,
          email: succes.email,
          practice_id: succes.practice,
        })
        .then((response) => {
          const newInsertId = response.data.insertId;
          setInsertId(newInsertId);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Inscrivez votre trace sur terre</h1>
      <form>
        <input
          id="firstname"
          type="text"
          name="firstname"
          placeholder="prenom"
          value={succes.firstname}
          onChange={handleChange}
        />
        <input
          id="lastname"
          type="text"
          name="lastname"
          placeholder="nom"
          value={succes.lastname}
          onChange={handleChange}
        />
        <input
          id="email"
          type="text"
          name="email"
          placeholder="adresse mail"
          value={succes.email}
          onChange={handleChange}
        />
        <label htmlFor="select-practice">
          <select
            id="select-practice"
            name="practice"
            onChange={((e) => setChoose(e.target.value), handleChange)}
          >
            <option value={succes.practice}>votre pratique</option>
            {practice &&
              practice.map((el) => (
                <option key={el.id} value={el.value}>
                  {el.name}
                </option>
              ))}
          </select>
        </label>
      </form>
      <button type="submit" onSubmit={handlePost}>
        Rejoindre
      </button>
    </div>
  );
}

export default Subscribe;
