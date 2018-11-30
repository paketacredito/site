import React from 'react'
import { Link } from 'gatsby'

import Logo from '../../images/icon-paketa.svg'

import './footer.css'

const Footer = () => (
  <footer>
    <div className="footer__nav">
      <img src={Logo} alt="Paketa"/>

      <div className="footer__link">
        <div className="footer__section">
          <p className="footer__title">Sobre</p>
          <ul>
            <li><Link to="/quem-somos">Quem Somos</Link></li>
            <li><Link to="/como-funciona">Como Funciona</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <p className="footer__title">Ajuda</p>
          <ul>
            <li>
              <Link to="mailto:contato@paketa.com.br">
                contato@paketa.com.br
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__section">
          <p className="footer__title">Redes Sociais</p>
          <Link to=""></Link>
          <Link to=""></Link>
        </div>

      </div>
    </div>

    <div className="footer__address">
      <p>
        Copyright © 2019 - Paketá Crédito - Av. das
        Nações Unidas 12.901, 25º Andar, Torre Norte,
        São Paulo - Brasil
      </p>
    </div>
  </footer>
)

export default Footer