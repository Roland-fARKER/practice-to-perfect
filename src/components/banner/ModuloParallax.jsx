import React from 'react'
import imagenes from '../../img/imagenes'
import { Parallax,Background } from "react-parallax"
import "./parallax.css"

export function ModuloParallax() {
  return (
    <div>
        <Parallax strength={300}
            bgImage={imagenes[1].fondo_de_prueba} 
            >
            <Background className="custom-bg">
            </Background>
            <div className='ParallaxCont'>
                <div className='contenido'>
                    <h1>
                        Aprovechá
                        <p>Certifícate con los mejores</p>
                    </h1>
                    <img src={imagenes[0].practice_logo} alt="" className='dino'/>
                </div>
            </div>
        </Parallax>
    </div>
  )
}

export default ModuloParallax