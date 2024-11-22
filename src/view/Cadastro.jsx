import React, { useState } from "react";
import Button from "../components/button";
import InputField from "../components/InputField";
import styles from "../styles/Cadastro.module.css";
import logo from "../images/Logo_pacato_verde.png";
import { Link } from "react-router-dom";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = () => {
    console.log("Cadastro realizado com sucesso!");
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);
  };

  return (
    <div className={styles.cadastroContainer}>
      <img src={logo} alt="Logo Pacato cidadão" className={styles.logo}></img>

      <div className={styles.cadastroForm}>
        <InputField
          label="Nome: "
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
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
          <Button label="Cadastrar" onClick={handleCadastro} />
        </div>
      </div>
      <div className={styles.linkLogin}>
        Já possui cadastro? <Link to="/">Faça o login</Link>
      </div>
    </div>
  );
};

export default Cadastro;
