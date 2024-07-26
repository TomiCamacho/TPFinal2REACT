// import React from 'react';
import { VacioLados } from '../VacioLados/VacioLados'
import './Servicios.css'
import servicioWebDesign from '/web-design.png'
import servicioGestionDeDatos from '/gestiondedatos.png'
import servicioUxui from '/uxui.png'

const Servicios = () => {
  return (
    <section>
        <VacioLados/>
        <div class="servicios-info-info">
            <p class="seccion servicios-info-info-seccion">Servicios</p>
            <h3 class="servicios-info-info-texto">Puedo ayudarte con:</h3>
            <div class="servicios-info-info-contenedora">
                <button class="servicios-bloques">
                    <h4 class="servicios-bloques-nombre">Diseño Web</h4>
                    <img src={servicioWebDesign} alt="" class="servicios-bloques-logo logo-disenioweb"/>
                    <p class="servicios-button button-disenioweb">Leer más</p>
                </button>
                <button class="servicios-bloques bloque-gestiondedatos">
                    <h4 class="servicios-bloques-nombre nombre-gestion">Gestión de Datos</h4>
                    <img src={servicioGestionDeDatos} alt="" class="servicios-bloques-logo logo-gestion"/>
                    <p class="servicios-button button-gestiondedatos">Leer más</p>
                </button>
                <button class="servicios-bloques">
                    <h4 class="servicios-bloques-nombre">Diseño UX/UI</h4>
                    <img src={servicioUxui} alt="" class="servicios-bloques-logo logo-uxui"/>
                    <p class="servicios-button button-uxui">Leer más</p>
                </button>
            </div>
        </div>
        <VacioLados/>
    </section>
  )
}

export { Servicios }