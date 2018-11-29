import React from 'react'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import CtaSection from '../components/ctaSection/ctaSection'

import HrTeam from '../images/img-paketa-rh.svg'
import Employer from '../images/app-paketa-ajuste-valor.png'

import './quem-somos.css'

const About = () => (
  <div className="about">
    <Header
      headline="Crédito consignado feito de uma forma diferente. Praticidade e eficiência para a sua empresa." 
    />

    <section className="about__hr">
      <div className="about-hr__text">
        <h3>Para a sua equipe de RH</h3>
        <p>Um meio para te ajudar a conhecer melhor os
          sonhos e necessidades de seus colaboradores e
          viabilizá-los, tornando a empresa
          reconhecidamente preocupada com a vida e
          interesses pessoais de sua equipe.
        </p>
      </div>

      <img src={HrTeam} alt="Time de RH"/>
    </section>

    <CtaSection
      title="Você tem alguma dúvida?"
      text="Fale conosco que podemos ajudá-lo"
      cta="Entrar em contato"
      url="/contato"
    />

    <Footer />
  </div>
)

export default About