/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import imagenes from "../../img/imagenes";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./fooder.css";

function fooder() {
    return (
      <div>
          <footer className="pie-pagina">
          <div className="grupo1">
            <div className="box">
              <div className="imgc">
                <img src={imagenes[0].practice_logo} alt=""/> 
              </div>
            </div>
            <div className="box">
              <h2>SOBRE NOSOTROS</h2>
              <p> 
                  Somos un equipo de desarrollo, interesados en mostrar una nueva
                  propuesta para captar la atencion de entusiastas tecnologicos y auto didactas. 
          
              </p>
              
            </div>
            <div className="box">
              <h2> SIGUENOS </h2>
              <div class="red-social">
                <a href="/#" > 
                  <FacebookIcon/>
                </a>
                <a href="/#"> 
                  <InstagramIcon/> 
                </a>
                <a href="/#">
                   <TwitterIcon/> 
                </a>
                <a href="/#">
                  <WhatsAppIcon/> 
                </a>
              </div>
            </div>
          </div>
          <div className="grupo2">
            <small>&copy; 2022 <b>Practice to perfect</b> -Todos los derechos reservados.</small>
          </div>
        </footer>
      </div>
    );
  }
  export default fooder;