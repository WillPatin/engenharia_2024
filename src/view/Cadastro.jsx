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
  const [showPopup, setShowPopup] = useState(false);
  const [senhaValida, setSenhaValida] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupSuccess, setPopupSuccess] = useState(false);

  const validarSenha = (senha) => {
    const tem8Caracteres = senha.length >= 8;
    const temCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
    return tem8Caracteres && temCaracterEspecial;
  };

  const handleSenha = (e) => {
    const novaSenha = e.target.value;
    setSenha(novaSenha);
    setSenhaValida(validarSenha(novaSenha));
  };

  const handleCadastro = () => {
    if (!senhaValida) {
      setPopupMessage("Senha invalida!");
      setPopupSuccess(false);
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return;
    }

    setPopupMessage("Cadastro realizado!");
    setPopupSuccess(true);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Senha:", senha);

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
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
          onChange={handleSenha}
        />

        <div className={styles.criteriosSenha}>
          <p className={senha.length >= 8 ? styles.valido : styles.invalido}>
            ✔ Pelo menos 8 caracteres
          </p>
          <p
            className={
              /[!@#$%^&*(),.?":{}|<>]/.test(senha)
                ? styles.valido
                : styles.invalido
            }
          >
            ✔ Pelo menos 1 caractere especial
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <Link to="/cadastro">
            <Button label="Cadastrar" onClick={handleCadastro} />
          </Link>
        </div>
      </div>
      <div className={styles.linkLogin}>
        Já possui cadastro? <Link to="/">Faça o login</Link>
      </div>

      {showPopup && (
        <div
          className={`${styles.popup} ${
            popupSuccess ? styles.popupSuccess : styles.popupError
          }`}
        >
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default Cadastro;
