// import React from 'react';
import { VacioLados } from '../VacioLados/VacioLados'
import './Testimonios.css'
import { TestimoniosBloques } from './TestimoniosBloques/TestimoniosBloques'

const Testimonios = () => {

  let testimonios = [

    {
      "title":"Experiencia Increíble",
      "msj":"Trabajar con este desarrollador web fue una experiencia increíble. Su habilidad para crear sitios web atractivos y funcionales es impresionante. Desde el diseño hasta la implementación, demostró un enfoque minucioso y creativo. ¡Lo recomiendo encarecidamente!",
      "img":"https://th.bing.com/th/id/R.afb410c09546aee527a813c111e12808?rik=fjYiHHvkW4lX2g&riu=http%3a%2f%2fwww.rdfis.com%2fupload%2fimage%2f20210531%2f20210531144225_83745.jpg&ehk=iwAJY6KbU9hWjq8Xz6hzsb24ZGUD2NyHjUeiza301L4%3d&risl=&pid=ImgRaw&r=0",
      "nombre":"Rodrigo Fernández",
      "ocupacion":"Desarrollador Web"
    },
    {
      "title":"Profesionalismo Excepcional",
      "msj":"Este desarrollador web es altamente profesional. Siempre cumplió con los plazos y superó nuestras expectativas. Además, su comunicación clara y su capacidad para resolver problemas hicieron que trabajar con él fuera una experiencia sin complicaciones. Estamos muy satisfechos con su trabajo.",
      "img":"https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1647446221042-F67JKX7D0PHSJC3IG3LT/Tom+Professional+Business+Headshot.jpg",
      "nombre":"Martín Pino",
      "ocupacion":"Ingeniero en Sistemas"
    },
    {
      "title":"Innovación Impresionante",
      "msj":"Trabajar con este desarrollador web fue una experiencia excepcional. Su enfoque innovador y su habilidad para crear soluciones personalizadas nos dejaron asombrados. Desde la planificación hasta la implementación, demostró un profesionalismo impecable. ¡Lo recomendamos sin dudarlo!",
      "img":"https://cdn.shopify.com/s/files/1/0765/9388/9593/files/testimonial_1.webp?v=1689747789",
      "nombre":"Franco Arce",
      "ocupacion":"Diseñador UXUI"
    },
    {
      "title":"Entrega Eficiente",
      "msj":"Este desarrollador web es altamente profesional. Siempre cumplió con los plazos y superó nuestras expectativas. Además, su comunicación clara y su capacidad para resolver problemas hicieron que trabajar con él fuera una experiencia sin complicaciones. Estamos muy satisfechos con su trabajo.",
      "img":"https://egytainer.com/wp-content/uploads/2022/01/Untitled-1-2.png",
      "nombre":"Vicente Abrego",
      "ocupacion":"Couch deportivo"
    },
    {
      "title":"Diseño Excepcional",
      "msj":"El talento creativo de este desarrollador web es impresionante. Diseñó un sitio web atractivo y funcional que refleja perfectamente nuestra marca. Su atención al detalle y su compromiso con la calidad son insuperables. ¡Estamos encantados con los resultados!",
      "img":"https://th.bing.com/th/id/R.b6b2d3e9665b5bbf9f504c717dbdccbb?rik=LR11UzEONsXYig&riu=http%3a%2f%2fconferences.la.utexas.edu%2ftexaseusummit%2ffiles%2f2023%2f07%2fLeven-2.png&ehk=Poc30k80hUZaZ%2ba7wuSkjAaNBBBhbwiamBLTPBVcppM%3d&risl=&pid=ImgRaw&r=0",
      "nombre":"Daniel Barrea",
      "ocupacion":"Administrador de empresas"
    }
  ]

  return (
    <section>
        <VacioLados/>
        <div class="testimonios-info">
                <div class="testimonios-texto">
                    <h2 class="testimonos-seccion">Testiomonios</h2>
                    <h3 class="testimonios-title">Mira mis clientes satisfechos</h3>
                </div>
                <div class="testimonios-carrusel-botones">
                    <button class="testimonios-carrusel-boton"></button>
                    <button class="testimonios-carrusel-boton"></button>
                </div>
                <section class="testimonios-carrusel">
                    {testimonios.map(elemento=><TestimoniosBloques title={elemento.title} msj={elemento.msj} img={elemento.img} nombre={elemento.nombre} ocupacion={elemento.ocupacion}/>)}
                </section>
            </div>
        <VacioLados/>
    </section>
  )
}

export { Testimonios }