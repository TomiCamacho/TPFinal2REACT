// import React from 'react';
import { VacioLados } from '../VacioLados/VacioLados'
import './Header.css'

const Header = () => {
  return (
    <div>
        <VacioLados/>
        <section class="header-info">
            <div class="header-marca">
                <a href="" class="header-marca-letra">Tomás Camacho</a>
            </div>
        
            <div class="header-redes">
                <div class="redes">
                    <div>
                        <a href=""><img src="images/dribbble.png" alt="" class="icon-redes"></a>
                    </div>
                    
                    <div>
                        <a href="" class="nombre-redes">Dribbble</a>
                    </div>
                    
                </div>
                <div class="redes">
                    <div>
                        <a href=""><img src="images/behance.png" alt="" class="icon icon-redes icon-behance"></a>
                    </div>
                    
                    <div>
                        <a href="" class="nombre-redes">Behance</a>
                    </div>
                </div>
                <div class="redes">
                    <div>
                        <a href=""><img src="images/instagram.png" alt="" class="icon icon-redes icon-instagram"></a>
                    </div>
                    <div>
                        <a href="" class="nombre-redes">Instagram</a>
                    </div>
                    
                </div>
            </div>
            <div class="header-menu">
              <a href=""><img src="images/menu.png" alt="" class="icon-menu"></a>
            </div>
        </section>
        <VacioLados/>
    </div>
  )
}

export { Header }