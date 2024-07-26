// import React from 'react';
import './Headerredes.css'

const Headerredes = ({nombre,img}) => {
  return (
        <div class="header-redes">
            <div class="redes">
                    <div>
                        <a href=""><img src={img} alt="" className="icon-redes"/></a>
                    </div>
                    
                    <div>
                        <a href="" class="nombre-redes">{nombre}</a>
                    </div>
                    
            </div>
        </div>
  )
}

export { Headerredes }