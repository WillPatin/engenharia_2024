import React from "react";
import styles from "../styles/Home.module.css";
import logo from "../images/Logo_pacato_verde.png";
import { Link } from "react-router-dom";
import { FaDumbbell, FaFutbol, FaHospital, FaBook } from "react-icons/fa";

const Home = () => {
  const handleClick = (servico) => {
    console.log("Você apertou no botão");
  };

  return (
    <div className={styles.homeContainer}>
      <img src={logo} alt="Logo Pacato cidadão" className={styles.logo} />

      <div className={styles.iconContainer}>
        <Link to="/fisica">
          <button
            className={styles.iconButton}
            onClick={() => handleClick("Exercício")}
          >
            <FaDumbbell size={40} />
          </button>
        </Link>

        <Link to="/esporte">
          <button
            className={styles.iconButton}
            onClick={() => handleClick("Esporte")}
          >
            <FaFutbol size={40} />
          </button>
        </Link>

        <Link to="/saude">
          <button
            className={styles.iconButton}
            onClick={() => handleClick("Saúde")}
          >
            <FaHospital size={40} />
          </button>
        </Link>

        <Link to="/educacao">
          <button
            className={styles.iconButton}
            onClick={() => handleClick("Educação")}
          >
            <FaBook size={40} />
          </button>
        </Link>
      </div>

      <div className={styles.buttonContainer}>
        <Link to="/todos">
          <button className={styles.button}>VER TODOS OS SERVIÇOS</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
