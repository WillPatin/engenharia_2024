import React from "react";
import Button from "../components/button";
import styles from "../styles/Home.module.css";
import logo from "../images/Logo_pacato_verde.png";
import { Link } from "react-router-dom";

import {
  FaDumbbell,
  FaFutbol,
  FaHospital,
  FaBook,
  FaUser,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";

const Fisica = () => {
  const handleClick = (servico) => {
    console.log("Voce apertou no botão");
  };
  return (
    <div className={styles.homeContainer}>
      <img src={logo} alt="Logo Pacato cidadão" className={styles.logo}></img>
      <div className={styles.iconContainer}>
        <Link to="/fisica">
          <button className={styles.iconButton} onClick={() => handleClick()}>
            <div className={styles.iconHome}>
              <FaDumbbell size={40} />{" "}
            </div>
          </button>
        </Link>

        <button className={styles.iconButton} onClick={() => handleClick()}>
          <div className={styles.iconHome}>
            <FaFutbol size={40} />
          </div>
        </button>

        <button className={styles.iconButton} onClick={() => handleClick()}>
          <div className={styles.iconHome}>
            <FaBook size={40} />{" "}
          </div>
        </button>

        <button className={styles.iconButton} onClick={() => handleClick()}>
          <div className={styles.iconHome}>
            <FaUser size={40} />{" "}
          </div>
        </button>

        <button className={styles.iconButton} onClick={() => handleClick()}>
          <div className={styles.iconHome}>
            <FaMapMarkerAlt size={40} />{" "}
          </div>
        </button>

        <div className={styles.iconHome}>
          <Button>
            {" "}
            <FaHeart size={40} />{" "}
          </Button>
        </div>

        <div className={styles.buttonContainer}>
          <Link to="/todos">
            <Button label="VER TODOS OS SERVIÇOS" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fisica;
