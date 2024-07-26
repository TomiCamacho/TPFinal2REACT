// import React from 'react';
import { VacioLados } from '../VacioLados/VacioLados'
import './Hero.css'
import imgPortfolio from '/Imagen Portfolio.png'

const Hero = () => {
  return (
    <section>
      <VacioLados/>
      <div>
        <div class="hero-info-texto">
          <h1 class="hero-info-texto-title">Desarrollador Web FULL STACK <br/> Tomás Camacho</h1>
          <button class="button hero-info-texto-button">Contáctame</button>
        </div>
        <div class="hero-info-img">
          <img src={imgPortfolio} alt="" class="foto-retrato"/>
        </div>
      </div>
      <VacioLados/>
    </section>
    

  )
}

export { Hero }