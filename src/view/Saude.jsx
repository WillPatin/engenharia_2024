import React, { useState } from "react";
import Map from "../components/Map";
import styles from "../styles/Views.module.css";
import logo from "../images/Logo_pacato_verde.png";
import { Link } from "react-router-dom";
const atividades = [
  {
    titulo: "UBS - Scharlau",
    descricao: "Segunda-Feira a Sexta-Feira: 8h às 12h e 13h às 17h ",
    coordenadas: { lat: -29.73104579150268, lng: -51.15096484723637 },
  },
  {
    titulo: "Centro de Saúde do Idoso",
    descricao: "Atendimento 24h",
    coordenadas: { lat: -29.776250858524097, lng: -51.14754329883161 },
  },
];

const Saude = () => {
  const [selectLocation, setSelectLocation] = useState(null);

  const handleAtividadeClick = (coordenadas) => {
    setSelectLocation(coordenadas);
  };
  return (
    <div className={styles.fisicaContainer}>
      <Link to="/home">
        <img src={logo} alt="Logo Pacato Cidadão" className={styles.logo} />
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

export default Saude;
