

const TestimoniosBloques = ({title,msj,img,nombre,ocupacion}) => {
  return (
    <div class="testimonios-carrusel-bloques">
        <h4 class="carrusel-bloques-title">{title}</h4>
        <p class="carrusel-bloques-msj">{msj}</p>
        <div class="carrusel-bloques-persona">
            <img src={img}/>
            <h4 class="carrusel-bloques-persona-nombre">{nombre}</h4>
            <p class="carrusel-bloques-persona-ocupacion">{ocupacion}</p>
        </div>
    </div>
  )
}

export { TestimoniosBloques }