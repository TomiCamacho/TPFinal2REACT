// import React from 'react';
import { VacioLados } from '../VacioLados/VacioLados'
import './Proyectos.css'
import { ProyectosBloque } from './ProyectosBloque/ProyectosBloque'

const Proyectos = () => {

  let proyectos = [

    {
      "p": "Cryptomonedas | Landing Page",
      "img": "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1b9ae5200110667.665d68f4ae2a2.png"
    },
    {
      "p":"Charge Mate | App Mobile",
      "img":"https://mir-s3-cdn-cf.behance.net/project_modules/1400/6794d2190597951.65bd294b3c0bc.png"
    },
    {
      "p":"Escuela de Manejo | Landing Page",
      "img":"https://mir-s3-cdn-cf.behance.net/project_modules/disp/f7ef00200191825.665e97dac44b1.png"
    },
    {
      "p":"Restaurante | Sitio Web",
      "img":"https://mir-s3-cdn-cf.behance.net/project_modules/1400/d29d1e200024597.665b5d794246b.png"
    },
    {
      "p":"E-Commerce | Sitio Web",
      "img":"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7f0ea197938237.663918cbd2063.png"
    },
    {
      "p":"Portfolio de fotógrafo | Landing Page",
      "img":"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/62a860191746029.65d0bb7cf4120.png"
    }
  ]

  return (
    <section>
        <VacioLados/>
        <div class="proyectos-info">
          {proyectos.map(elemento=><ProyectosBloque p={elemento.p} img={elemento.img}/>)}

            {/* <h2 class="proyectos-info-seccion">Proyectos</h2>
            <h3 class="proyectos-info-titulo">Mis anteriores proyectos</h3>
            <div class="proyectos-info-contenedora">
                <div class="proyectos-bloque">
                    <a href="" class="proyectos-bloque-img-a"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1b9ae5200110667.665d68f4ae2a2.png" alt="" class="proyectos-img"/></a>
                    <p class="proyectos-bloque-p">Cryptomonedas | Landing Page</p>
                    <a href="" class="proyectos-bloque-a">Ver proyecto</a>
                    <a href=""><img src="images/next.png" alt="" class="proyectos-flechas"/></a>
                </div>
                    <div class="proyectos-bloque">
                        <a href="" class="proyectos-bloque-img-a"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/6794d2190597951.65bd294b3c0bc.png" alt="" class="proyectos-img"></a>
                        <p class="proyectos-bloque-p">Charge Mate | App Mobile</p>
                        <a href="" class="proyectos-bloque-a">Ver Proyecto</a>
                        <a href=""><img src="images/next.png" alt="" class="proyectos-flechas"></a>
                    </div>
                    <div class="proyectos-bloque">
                        <a href="" class="proyectos-bloque-img-a"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f7ef00200191825.665e97dac44b1.png" alt="" class="proyectos-img"></a>
                        <p class="proyectos-bloque-p">Escuela de Manejo | Landing Page</p>
                        <a href="" class="proyectos-bloque-a">Ver proyecto</a>
                        <a href=""><img src="images/next.png" alt="" class="proyectos-flechas"></a>
                    </div>
                    <div class="proyectos-bloque">
                        <a href="" class="proyectos-bloque-img-a"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/d29d1e200024597.665b5d794246b.png" alt="" class="proyectos-img"></a>
                        <p class="proyectos-bloque-p">Restaurante | Sitio Web</p>
                        <a href="" class="proyectos-bloque-a">Ver proyecto</a>
                        <a href=""><img src="images/next.png" alt="" class="proyectos-flechas"></a>
                    </div>
                    <div class="proyectos-bloque">
                        <a href="" class="proyectos-bloque-img-a"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c7f0ea197938237.663918cbd2063.png" alt="" class="proyectos-img"></a>
                        <p class="proyectos-bloque-p">E-Commerce | Sitio Web</p>
                        <a href="" class="proyectos-bloque-a">Ver proyecto</a>
                        <a href=""><img src="images/next.png" alt="" class="proyectos-flechas"></a>
                    </div>
                    <div class="proyectos-bloque">
                        <a href="" class="proyectos-bloque-img-a"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/62a860191746029.65d0bb7cf4120.png" alt="" class="proyectos-img"></a>
                        <p class="proyectos-bloque-p">Portfolio de fotógrafo | Landing Page</p>
                        <a href="" class="proyectos-bloque-a">Ver proyecto</a>
                        <a href=""><img src="images/next.png" alt="" class="proyectos-flechas"></a>
                    </div>
                </div> */}
            </div>
        <VacioLados/>
    </section>
  )
}

export { Proyectos }