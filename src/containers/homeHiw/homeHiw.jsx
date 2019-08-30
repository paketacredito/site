import React from 'react'
import Fade from 'react-reveal/Fade'

import Colaborador from '../../images/img_para_colaborador01-3x.png'
import Screen1 from '../../images/paketa-app-login.png'
import Screen2 from '../../images/pakets-app-configuracoes.png'
import Screen3 from '../../images/paketa-app-aprovado.png'
import Number1 from '../../images/01.png'
import Number2 from '../../images/02.png'
import Number3 from '../../images/03.png'
import Next from '../../images/next.svg'

import './homeHiw.css'

const HomeHowItWorks = () => (
  <section className="home-hiw">
    <div className="home-colab">
      <Fade clear>
        <div className="home-colab-image-shadow"></div>
        <img
          name="colaborador"
          className="home-colab-image"
          src={Colaborador}
          alt="colaborador"
        />
      </Fade>
      <div className="homecolab-info">
        <h3 className="home-colab-title">Para o Colaborador</h3>
        <span className="homecolab-desc">
          Ambiente virtual, descontraído e amigavel, com acesso a conteúdo de
          educação financeira simulação e contratação de crédito consignado.
        </span>
      </div>
    </div>

    <h3>Como Funciona?</h3>
    <div className="home-hiw__flux">
      <Fade left>
        <div className="home-hiw__step">
          <img className="home-hiw__screen" src={Screen1} alt="" />
          <img className="home-hiw__number" src={Number1} alt="1" />
          <p>O funcionário acessa o aplicativo e realiza o login.</p>
        </div>
      </Fade>

      <div className="home-hiw__divisor">
        <img src={Next} alt="Próxima etapa" />
      </div>

      <Fade left>
        <div className="home-hiw__step">
          <img className="home-hiw__screen" src={Screen2} alt="" />
          <img className="home-hiw__number" src={Number2} alt="2" />
          <p>
            Funcionário simula o valor do empréstimo e a quantidade de parcelas.
          </p>
        </div>
      </Fade>

      <div className="home-hiw__divisor">
        <img src={Next} alt="Próxima etapa" />
      </div>

      <Fade left>
        <div className="home-hiw__step">
          <img className="home-hiw__screen" src={Screen3} alt="" />
          <img className="home-hiw__number" src={Number3} alt="3" />
          <p>Após aprovação da Paketá e RH, crédito é liberado em 24 horas</p>
        </div>
      </Fade>
    </div>
  </section>
)

export default HomeHowItWorks
