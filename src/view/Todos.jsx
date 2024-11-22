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

const Todos = () => {
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

export default Todos;
