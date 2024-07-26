// import React from 'react';
import { useState } from 'react'
import { VacioLados } from '../VacioLados/VacioLados'
import './Contacto.css'

const Contacto = () => {

  let [datos,setDatos]=useState({
    nombre:'',
    email:'',
    tel:'',
    msj:''
  })

  function manejarEnvioForm(e){
    e.preventDefault()
  }

  return (
    <section>
      <VacioLados/>
      <div class="contacto-info">
                <div class="contacto-info-texto">
                    <h2 class="contacto-titulo">¿Estás interesado en trabajar conmigo?</h2>
                    <p class="contacto-p">Transformaré tu idea en un increíble diseño</p>
                </div>
                <div class="contacto-formulario-contenedor">
                    <form onSubmit={manejarEnvioForm} class="contacto-formulario">
                        <label class="formulario-label">Nombre</label>
                        <input type="text" placeholder="Ingrese su nombre*" value={datos.nombre} onChange={(e) => setDatos({ ...datos, nombre: e.target.value })} required class="formulario-input"/>
                        <label class="formulario-label">Ingrese su correo electrónico</label>
                        <input type="email" placeholder="Ingrese su correo electrónico*" value={datos.email} onChange={(e) => setDatos({ ...datos, email: e.target.value })} required class="formulario-input"/>
                        <label class="formulario-label">Teléfono de contacto</label>
                        <input type="text" placeholder="Ingrese su número de teléfono*" value={datos.tel} onChange={(e) => setDatos({ ...datos, tel: e.target.value })} required class="formulario-input"/>
                        <label class="formulario-label">Déjame un mensaje (opcional)</label>
                        <textarea rows="4" cols="50" value={datos.msj} onChange={(e) => setDatos({ ...datos, msj: e.target.value })} class="formulario-input formulario-mensaje"></textarea>
                        <button type='submit' class="contacto-button">Enviar</button>
                    </form>
                </div>
      </div>
      <VacioLados/>  
    </section>
  )
}

export { Contacto }