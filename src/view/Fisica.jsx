import React, { useState } from "react";
import Map from "../components/Map"; // Certifique-se que o caminho está correto
import styles from "../styles/Fisica.module.css";
import logo from "../images/Logo_pacato_verde.png";

const atividades = [
  {
    titulo: "Ginástica para idosos",
    descricao: "Todas as Segundas & Quartas-feiras das 8:30 às 11:30",
    coordenadas: { lat: -23.5475, lng: -46.6361 },
  },
  {
    titulo: "Pilates",
    descricao: "Quartas-Feiras das 13h às 17h",
  },
  {
    titulo: "Ritmos",
    descricao: "Terças-Feiras das 13h às 17h",
  },
];

const Fisica = () => {
  const [selectLocation, setSelectLocation] = useState(null);

  const handleAtividadeClick = (coordenadas) => {
    setSelectLocation(coordenadas);
  };
  return (
    <div className={styles.fisicaContainer}>
      <img src={logo} alt="Logo Bem-Estar Cidadão" className={styles.logo} />

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
