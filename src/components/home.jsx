import React from 'react'
import Responsive from './carrusel/slider';
import Navbar from './Navbar/Navbar';
import Fooder from './footer/fooder';
import ModuloParallax from './banner/ModuloParallax';
import Slider2 from './carrusel/slider2';

function Home() {
  return (
    <>
    <Navbar/>
    <ModuloParallax/>
    <Responsive/>
    <Slider2/>
    <Fooder/>
  </>
  )
}

export default Home