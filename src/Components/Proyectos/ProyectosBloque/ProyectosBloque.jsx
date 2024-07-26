// import React from 'react';
import './ProyectosBloque.css'
import nextIcon from '/next.png'

const ProyectosBloque = ({img,p}) => {
  return (
    <div class="proyectos-bloque">
        <a href="" class="proyectos-bloque-img-a"><img src={img} alt="" class="proyectos-img"/></a>
        <p class="proyectos-bloque-p">{p}</p>
        <a href="" class="proyectos-bloque-a">Ver proyecto</a>
        <a href=""><img src={nextIcon} alt="" class="proyectos-flechas"/></a>
    </div>
  )
}

export { ProyectosBloque }