import React from "react";
import Map from "../components/Map";
import styles from "../styles/Fisica.module.css";
import logo from "../images/Logo_pacato_verde.png";

const Esporte = () => {
  return (
    <div className={styles.fisicaContainer}>
      <img src={logo} alt="Logo Pacato Cidadão" className={styles.logo} />

      <div className={styles.mapContainer}>
        <h2>Mapa do Pacato Cidadão</h2>
        <Map />
      </div>
    </div>
  );
};

export default Esporte;
