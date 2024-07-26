// import React from 'react';
import { VacioLados } from '../VacioLados/VacioLados'
import './Aboutme.css'
import imgAboutme from '/aboutme.png'

const Aboutme = () => {
  return (
    <div>
        <VacioLados/>
        <div>
        <img src={imgAboutme} alt="" class="aboutme-info-img"/>
            <div class="aboutme-info-texto">
            <div class="seccion aboutme-info-texto-seccion"><p>Sobre mí</p></div>
            <h3 class="aboutme-info-texto-h3">Por qué elegirme para tu próximo proyecto</h3>
            <p class="aboutme-info-texto-p">Soy un apasionado Desarrollador Web Full Stack con experiencia en la creación de interfaces atractivas y funcionales. Mi enfoque se centra en el diseño limpio, la usabilidad y la optimización para una experiencia de usuario excepcional. Me encanta explorar nuevas tecnologías y estar al día con las últimas tendencias en desarrollo web.</p>
            <a href="files/cv.pdf" download><button class="aboutme-info-texto-button">Descargar CV</button></a>
            </div>
        </div>
        <VacioLados/>
    </div>
  )
}

export { Aboutme }