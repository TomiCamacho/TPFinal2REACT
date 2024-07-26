// import React from 'react';
import { VacioLados } from '../VacioLados/VacioLados'
import './Header.css'
import { Headerredes } from './Headerredes/Headerredes'
// import logo

const Header = () => {

    let redes = [
        {
            "nombre": "Dribbble",
            "logo": "/dribbble.png",
        },
        {
            "nombre": "Behance",
            "logo": "/behance.png",
        },
        {
            "nombre": "Instagram",
            "logo": "/instagram.png",
        }
    ]

  return (
    <section>
        <VacioLados/>
        
        <div className="header-info">
            <div className="header-marca">
                <a href="" className="header-marca-letra">Tomás Camacho</a>
            </div>
            <div>
                {redes.map(elemento=><Headerredes nombre={elemento.nombre} img={elemento.logo}/>)}
            </div>
            <div class="header-menu">
              <a href=""><img src="/menu.png" alt="" class="icon-menu"/></a>
            </div>
        </div>

        <VacioLados/>
    </section>
  )
}

export { Header }