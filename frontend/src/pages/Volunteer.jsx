import { useLoaderData } from "react-router-dom";

function Volunteer() {
  const vol = useLoaderData().volunteer;

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
