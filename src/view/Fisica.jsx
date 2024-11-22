import React, { useState } from "react";
import Map from "../components/Map";
import styles from "../styles/Views.module.css";
import logo from "../images/Logo_pacato_verde.png";
import { Link } from "react-router-dom";
const atividades = [
  {
    titulo: "Ginástica para idosos",
    descricao: "Todas as Segundas & Quartas-feiras das 8:30 às 11:30",
    coordenadas: { lat: -29.780309711945367, lng: -51.14386280674634 },
  },
  {
    titulo: "Pilates",
    descricao: "Quartas-Feiras das 13h às 17h",
    coordenadas: { lat: -29.759658191304275, lng: -51.14490539565468 },
  },
  {
    titulo: "Ritmos",
    descricao: "Terças-Feiras das 13h às 17h",
    coordenadas: { lat: -29.780309711945367, lng: -51.14386280674634 },
  },
];

const Fisica = () => {
  const [selectLocation, setSelectLocation] = useState(null);

  const handleAtividadeClick = (coordenadas) => {
    setSelectLocation(coordenadas);
  };
  return (
    <div className={styles.fisicaContainer}>
      <Link to="/home">
        <img src={logo} alt="Logo Bem-Estar Cidadão" className={styles.logo} />
      </Link>
      <div className={styles.atividadesList}>
        {atividades.map((atividade, index) => (
          <div
            key={index}
            className={styles.atividadeCard}
            onClick={() => handleAtividadeClick(atividade.coordenadas)}
          >
            <h2>{atividade.titulo}</h2>
            <p>{atividade.descricao}</p>
          </div>
        ))}
      </div>
      <div className={styles.mapContainer}>
        <h2>Mapa do Pacato Cidadão</h2>
        <Map location={selectLocation} />
      </div>
    </div>
  );
};

export default Fisica;
