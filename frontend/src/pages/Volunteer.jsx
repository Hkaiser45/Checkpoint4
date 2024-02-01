import { useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Volunteer() {
  const [updateData, setUpdateData] = useState(false);
  const vol = useLoaderData().volunteer;
  const [insertId, setInsertId] = useState(null);
  const [list, setList] = useState([]);
  const [pract, setPract] = useState({
    practice: "",
  });
  console.info(pract);
  const handlePractice = (e) => {
    setPract({ ...pract, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/practices`)
      .then((res) => setList(res.data))
      .catch((err) => console.error(err));
  }, [insertId, updateData]);
  const handlePract = async (e) => {
    e.preventDefault();

    try {
      const post = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/practices`,
        {
          name: pract.practice,
        },
        { withCredentials: true }
      );
      const newInsertId = post.data.insertId;
      setInsertId(newInsertId);
    } catch (error) {
      console.error(error);
    }
  };
  console.info(insertId);
  const hdDelete = async (id) => {
    try {
      console.info(id);
      await axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/practices/delete`,
          {
            id,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          console.info(res.data);
          if (res.status === 200) {
            setUpdateData(!updateData);
          }
        });
    } catch (err) {
      console.error(err);
    }
  };

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
            <button type="button">Add</button>
          </li>
        ))}
      </ul>
      <div className="practiceAdd">
        <form action="">
          <input
            id="practice"
            type="text"
            name="practice"
            placeholder="Rajouter une competence"
            value={pract.practice}
            onChange={handlePractice}
          />
        </form>
        <button type="submit" onClick={handlePract}>
          Rajouter la competence
        </button>
        <div className="list">
          {list.map((liste) => (
            <li key={liste.id}>
              {liste.name}
              <button type="button" onClick={() => hdDelete(liste.id)}>
                delete
              </button>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
