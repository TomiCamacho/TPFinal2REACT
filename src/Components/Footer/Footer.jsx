// import React from 'react';
import { VacioLados } from '../VacioLados/VacioLados'
import facebookLogo from '/facebook.png'
import instagramBlack from '/instagramblack.png'
import behanceBlack from '/behanceblack.png'
import dribbbleBlack from '/dribbbleblack.png'
import phoneCall from '/phone-call.png'
import emailLogo from '/email.png'

const Footer = () => {
  return (
    <section>
        <VacioLados/>
        <div class="footer-info">
                <section class="footer-linea1">
                    <div class="footer-linea1-redes">
                        <p class="footer-linea1-redes-p">Mis redes:</p>
                        <a href=""><img src={facebookLogo} alt=""  class="footer-redes-icon"/></a>
                        <a href=""><img src={instagramBlack} alt=""  class="footer-redes-icon"/></a>
                        <a href=""><img src={behanceBlack} alt=""  class="footer-redes-icon"/></a>
                        <a href=""><img src={dribbbleBlack} alt=""  class="footer-redes-icon"/></a>
                    </div>
                    <div class="footer-linea1-tel">
                        <a href=""><img src={phoneCall} alt="" class="footer-redes-icon"/></a>
                        <p class="footer-linea1-redes-tel">+54 2615993109</p>
                    </div>
                    <div class="footer-linea1-correo">
                        <a href=""><img src={emailLogo} alt="" class="footer-redes-icon"/></a>
                        <p class="footer-linea1-redes-email">tomycamacho3004@gmail.com</p>
                    </div>    
                </section>
                <section class="footer-linea2">
                    <p class="footer-linea2-p">Copyright 2024 Tomás Camacho   |   Todos los derechos reservados.</p>
                </section>
            </div>
        <VacioLados/>
    </section>
  )
}

export { Footer }