import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Logo from '../../images/icon-paketa.svg'

import './footer.css'

const Footer = () => (
  <footer>
    <div className="footer__nav">
      <Link to="/">
        <img src={Logo} alt="Paketa"/>
      </Link>

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
          <ul className="footer__social">
            <li>
              <a target="_blank" href="https://www.facebook.com/Paketa-Credito-240640256610606">
                <FontAwesomeIcon icon={faFacebook}/>
              </a>
            </li>
            <li>
              <a target="_blank" className="" href="https://www.instagram.com/paketacredito/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a target="_blank" className="" href="https://www.linkedin.com/company/paketa-credito/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
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