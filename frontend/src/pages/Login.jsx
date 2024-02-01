import { useState } from "react";
import { Link } from "react-router-dom";
import instance from "../services/axios";
import { useUser } from "../contexts/UserContext";

import { success, error } from "../services/toasts/toasts";

function Login() {
  const { setUser } = useUser();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  console.info(login);

  const hChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const hSubmit = (e) => {
    e.preventDefault();

    instance
      .post("/login", login, { withCredentials: true })
      .then((res) => {
        console.info(res.data.user);
        setUser(res.data.user);
        success("Vous êtes bien loggé", {
          onClose: () => {
            setTimeout(() => {
              window.location.href = "/volontaires";
            }, 3000);
          },
        });
      })
      .catch((err) => {
        console.error(err);
        error(err.response.data.error);
      });
  };

  return (
    <section className="login">
      <h1>Login</h1>
      <form onSubmit={hSubmit}>
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={hChange}
          value={login.email}
        />
        <label htmlFor="password">Mot de passe :</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={hChange}
          value={login.password}
        />
        <button type="submit" className="connect">
          Se connecter
        </button>
      </form>
      <Link to="/">retour </Link>
    </section>
  );
}

export default Login;
