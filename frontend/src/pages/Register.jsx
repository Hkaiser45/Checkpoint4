import { useState } from "react";
import instance from "../services/axios";

import { success, error } from "../services/toasts/toasts";

function Register() {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });

  const hChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const hSubmit = (e) => {
    e.preventDefault();

    instance
      .post("/register", register)
      .then((res) => {
        if (res.status === 200) {
          success("Vous êtes bien enregistré");
        }
      })
      .catch((err) => {
        console.error(err);
        error("Une erreur est survenu");
      });
  };

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={hSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" onChange={hChange} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={hChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={hChange}
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Register;
