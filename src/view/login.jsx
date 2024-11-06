import React, { useState } from "react";
import Button from "../components/button";
import InputField from "../components/InputField";
import styles from "../styles/Login.module.css";
import logo from "../images/Logo_pacato_verde.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Senha:", senha);
  };

  return (
    <div className={styles.loginContainer}>
      <img src={logo} alt="Logo Pacato cidadão" className={styles.logo}></img>

      <div className={styles.loginForm}>
        <InputField
          label="Email: "
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          label="Senha: "
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <div className={styles.buttonContainer}>
          <Link to="/home">
            <Button label="Logar" onClick={handleLogin} />
          </Link>
        </div>
      </div>
      <div className={styles.linkCadastro}>
        Não possui cadastro? <Link to="/cadastro">Faça o cadastro</Link>
      </div>
    </div>
  );
};

export default Login;
