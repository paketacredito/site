import React from 'react'
import Navbar from '../navbar/navbar'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Fade from 'react-reveal/Fade'


import './headerHome.css'

const HeaderHome = () => (
  <div className="header--home">
    <Navbar />
      <div className="header__text">
        <Fade left>
        <h2>Crédito consignado rápido e descomplicado</h2>
        <p>Pelo nosso aplicativo você pode solicitar
          crédito de forma simples e eficiente.
          Realize os seus sonhos!
        </p>
        <div className="cta-button">
          <AnchorLink href="#credit">
            Saiba mais
          </AnchorLink>
        </div>
      </Fade>
    </div>
    
  </div>
)

export default HeaderHome