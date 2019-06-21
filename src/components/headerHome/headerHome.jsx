import React from 'react'
import Navbar from '../navbar/navbar'
import Fade from 'react-reveal/Fade'

import GooglePlay from '../../images/badage-google-play.png'
import AppStore from '../../images/badage-app-store.svg'

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
        <div className="header__download">
          <a href="https://apps.apple.com/br/app/paketá-crédito/id1466106554">
            <img src={AppStore} alt="App Store" />
          </a>

          <a href="https://play.google.com/store/apps/details?id=br.com.paketa">
            <img src={GooglePlay} alt="Google Play" />
          </a>
        </div>
      </Fade>
    </div>
    
  </div>
)

export default HeaderHome