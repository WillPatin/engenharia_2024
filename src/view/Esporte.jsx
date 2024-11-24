import React, { useState } from "react";
import Map from "../components/Map";
import styles from "../styles/Views.module.css";
import logo from "../images/Logo_pacato_verde.png";
import { Link } from "react-router-dom";
const atividades = [
  {
    titulo: "Volei - Escola de volei Bernardinho",
    descricao: "Todas as Terças-Feiras das 8h até 10h",
    coordenadas: { lat: -29.780309711945367, lng: -51.14386280674634 },
  },
  {
    titulo: "Futsal - Sub-15",
    descricao: "Quartas-Feiras das 13h às 17h",
    coordenadas: { lat: -29.759658191304275, lng: -51.14490539565468 },
  },
];

const Esporte = () => {
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

export default Esporte;
