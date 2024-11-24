import React, { useState } from "react";
import Map from "../components/Map";
import styles from "../styles/Views.module.css";
import logo from "../images/Logo_pacato_verde.png";
import { Link } from "react-router-dom";

const atividades = [
  {
    titulo: "Colégio Evangélico Divino Mestre",
    descricao: "Colégio de ensino fundamental",
    coordenadas: { lat: -29.728886941534316, lng: -51.15368051840073 },
  },
  {
    titulo: "Instituto Estadual de Educação Professor Pedro Schneider",
    descricao: "Colégio de ensino fundamental e médio",
    coordenadas: { lat: -29.770557002658556, lng: -51.14788619204664 },
  },
];

const Educacao = () => {
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

export default Educacao;
