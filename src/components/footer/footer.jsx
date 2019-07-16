import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import ChatBot from '../chat/chatBot'
import Logo from '../../images/icon-paketa.svg'
import AppStore from '../../images/play-store-branco.svg'
import GooglePlay from '../../images/google-play-branco.svg'

import './footer.css'

const Footer = () => (
  <footer>
    <div className="footer__nav">
      <Link to="/">
        <img src={Logo} alt="Paketa"/>
      </Link>

      <div className="footer__link">
        <div className="footer__section">
          <p className="footer__title">Baixe o app</p>
          <div className="footer__badge">
            <a href="https://play.google.com/store/apps/details?id=br.com.paketa">
              <img src={GooglePlay} alt="Google Play" />
            </a>
            <a href="https://apps.apple.com/br/app/paketá-crédito/id1466106554">
              <img src={AppStore} alt="App Store" />
            </a>
          </div>
        </div>

        <div className="footer__section">
          <p className="footer__title">Sobre</p>
          <ul>
            <li><Link to="/quem-somos">Quem Somos</Link></li>
            <li><Link to="/como-funciona">Como Funciona</Link></li>
            <li><Link to="/privacidade">Política de privacidade</Link></li>
            
          </ul>
        </div>

        <div className="footer__section">
          <p className="footer__title">Ajuda</p>
          <ul>
            <li>
              <a href="mailto:contato@paketa.com.br">
                contato@paketa.com.br
              </a>
            </li>
            <li>
              <a href="https://wa.me/551135001566">
                (11) 3500-1566
              </a>
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
            <li>
              <a target="_blank" className="" href="https://wa.me/551135001566"  title="Este número também é nosso WhatsApp, entre em contato!">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            
          </ul>
        </div>

      </div>
    </div>

    <div className="footer__address">
      <p>
        Copyright © 2019 - Rua Pitu, 72 - 12º andar, Cidade Monções,
        São Paulo - Brasil
      </p>
    </div>
    <ChatBot/>

  </footer>
)

export default Footer