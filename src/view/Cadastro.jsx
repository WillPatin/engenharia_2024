import React, { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import styles from "./Cadastro.module.css";

const Cadastro = () => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = () => {
    console.log("Cadastro realizado com sucesso!");
    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha); // Apenas para teste, evite imprimir senhas em produção!
  };

  return (
    <div className={styles.cadastroContainer}>
      <h1>Pacato Cidadão</h1>
      <div className={styles.cadastroForm}>
        <h2>Cadastro</h2>

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
    </div>
  );
};

export default Cadastro;
