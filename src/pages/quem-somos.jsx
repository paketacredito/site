import React from 'react'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import HrTeam from '../images/img-paketa-rh.svg'

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

    <Footer />
  </div>
)

export default About