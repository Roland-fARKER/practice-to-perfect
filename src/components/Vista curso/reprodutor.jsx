import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./reproductor.css";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import ArticleIcon from "@mui/icons-material/Article";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Fooder from "../footer/fooder";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

function Reprodutor() {
  const { itemSerializado } = useParams();
  const item = JSON.parse(decodeURIComponent(itemSerializado));

  return (
    <>
      <Navbar />
      <div className="banner">
        <h2>Bienvenido a {item.title}</h2>
        <img className="log1" alt={item.title} src={item.imagen} />
      </div>
      <div className="cont1">
        <div className="cont2">
          <iframe
            width="740"
            height="460"
            src={`https://www.youtube.com/embed/${item.link1.split("v=")[1]}`}
            title={item.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="cont3">
          <h3>{item.descripcion}</h3>
          <p>
            <ArticleIcon /> {item.nivel}
          </p>
          <p>
            <ContactPageIcon /> Instructor: {item.instructor}
          </p>
          <p>
            <QueryBuilderIcon /> Duración: {item.horas} horas
          </p>
          <h3>¿Qué aprenderás?</h3>
          <p>- {item.tema1}</p>
          <p>- {item.tema2}</p>
          <p>- {item.tema3}</p>
          <p>Y mucho más...</p>
          <h4>precio del curso completo {item.Precio}</h4>
          <button>
            <p className="pb">
              <MonetizationOnIcon /> Comprar curso completo
            </p>
          </button>
        </div>
      </div>
      <Fooder />
    </>
  );
}

export default Reprodutor;
