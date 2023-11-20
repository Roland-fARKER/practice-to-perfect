import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import "./stilo.css";
import Slider from "react-slick";
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { dataCursos2 } from './data2';
import { Link } from "react-router-dom";
import PinchIcon from '@mui/icons-material/Pinch';

function Slider2() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="fondo">
            <div className="contenedor">
                <h2 className="titulo">Explora nuestros cursos</h2>
                <Slider {...settings}>
                    {dataCursos2.map((item) => (
                        <div className="card">
                            <div className="card-top">
                                <img src={item.imagen} alt={item.title} className="imagen_curso"/>
                                <h1>{item.title}</h1>
                            </div>
                            <div className="card-bottom">
                                <h3>{item.Precio}</h3>
                                <p>{item.nivel}</p>
                                <div className="calificacion">
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarHalfIcon/>
                                </div>
                                <Link to={`/Reproductor/${ encodeURIComponent(JSON.stringify(item)) }`} >
                                  <button><p><PinchIcon/> ir</p></button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
  )
}

export default Slider2