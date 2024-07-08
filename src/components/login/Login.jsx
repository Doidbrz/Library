import React from "react";
import { useState } from "react";
import style from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Envio");

    alert("Enviando dados. Por favor aguarde");
  };

  return (
    <div className={style["container"]}>
      <form onSubmit={handleSubmit}>
        <h1>Acesso ao sitema</h1>
        <div className={style["input"]}>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style["input"]}>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className={style["btn"]} onClick={() => { }}>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
