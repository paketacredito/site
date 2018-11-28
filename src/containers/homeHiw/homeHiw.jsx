import React from 'react'

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
    <h3>Como Funciona?</h3>
    <div className="home-hiw__flux">

      <div className="home-hiw__step">
        <img className="home-hiw__screen" src={Screen1} alt=""/>
        <img className="home-hiw__number" src={Number1} alt="1"/>
        <p>
          O funcionário acessa o aplicativo e realiza o login.
        </p>
      </div>

      <div className="home-hiw__divisor">
        <img src={Next} alt="Próxima etapa"/>
      </div>

      <div className="home-hiw__step">
        <img className="home-hiw__screen" src={Screen2} alt="" />
        <img className="home-hiw__number" src={Number2} alt="2" />
        <p>
          Funcionário simula o valor do empréstimo e a
          quantidade de parcelas.
        </p>
      </div>

      <div className="home-hiw__divisor">
        <img src={Next} alt="Próxima etapa" />
      </div>

      <div className="home-hiw__step">
        <img className="home-hiw__screen" src={Screen3} alt="" />
        <img className="home-hiw__number" src={Number3} alt="3" />
        <p>
          Após aprovação da Paketá e RH, crédito é
          liberado em 24 horas
        </p>
      </div>

    </div>
  </section>
)

export default HomeHowItWorks