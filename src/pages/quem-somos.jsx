import React from 'react'
import Helmet from 'react-helmet'
import Fade from 'react-reveal/Fade'
import ReactGA from 'react-ga'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import CtaSection from '../components/ctaSection/ctaSection'

import HrTeam from '../images/img-paketa-rh.svg'
import Employer from '../images/app-paketa-ajuste-valor.png'
import Thumbnail from '../images/thumbnail.jpg'

import './quem-somos.css'
import '../components/layout.css'

ReactGA.initialize('UA-130200057-1')
ReactGA.pageview('/quem-somos')


const About = () => (
  <div className="about">
    <Helmet
      title="Paketá - Crédito online, simples e descomplicado."
      meta={[
        {
          name: "description",
          content: "Contratação de crédito consignado totalmente digital. Processo simplificado com acordo direto com o RH da sua empresa. Viabilize os sonhos da sua equipe de funcionários."
        },
        {
          property: 'og:url',
          content: 'https://paketa.com.br/quem-somos',
        },
        {
          property: 'og:image',
          content: Thumbnail,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },

        {
          property: 'og:image:height',
          content: '628',
        },
      ]}
    />
    <Header
      headline="Crédito consignado feito de uma forma diferente. Praticidade e eficiência para a sua empresa." 
    />

    <section className="about__hr">
      <div className="about-hr__text">
        <h3>Para a equipe de RH</h3>
        <p>Uma ferramenta simples e funcional que facilita o trabalho do RH
          na gestão do benefício de crédito consignado. Com alguns cliques, o
          gestor mantém a rotina em dia e assegura foco em suas atividades chaves.
        </p>
      </div>

      <Fade right>
        <img src={HrTeam} alt="Time de RH"/>
      </Fade>
    </section>

    <section className="about__employer">
      <Fade clear>
        <img src={Employer} alt="App Paketá" />
      </Fade>
      <div className="about-employer__text">
        <h3>Para o Colaborador</h3>
        <p>
          Ambiente virtual, descontraído e amigável,
           com acesso a conteúdos de educação financeira,
           simulação e contratação de crédito consignado.
         </p>
      </div>
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