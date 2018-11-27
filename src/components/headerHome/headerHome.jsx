import React from 'react'
import Navbar from '../navbar/navbar'

import './headerHome.css'

const HeaderHome = () => (
  <div className="header--home">
    <Navbar />
    <div className="header__text">
      <h2>Crédito consignado rápido e descomplicado</h2>
      <p>Pelo nosso aplicativo você pode solicitar
        crédito de forma simples e eficiente.
        Realize os seus sonhos!
      </p>
    </div>
    
  </div>
)

export default HeaderHome