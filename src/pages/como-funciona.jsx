import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Card from '../components/card/card'

import ContactRh from '../images/paketa-contato-rh.svg'
import Convenio from '../images/paketa-convenio-divulgacao.svg'
import Simulation from '../images/paketa-simulacao-funcionario.svg'
import Order from '../images/paketa-aprovacao-pedido.svg'
import Credit from '../images/paketa-credito-liberado.svg'
import Connector from '../images/linha.svg'
import Check from '../images/check.svg'
import Campaing from '../images/paketa-campanha.svg'
import Cloud from '../images/paketa-nuvemsonho.svg'
import Quiz from '../images/paketa-educacaofinanceira.svg'
import Thumbnail from '../images/thumbnail.jpg'

import './como-funciona.css'

const HowItWorks = () => (
  <div className="hiw">
    <Helmet
      title="Paketá - Crédito online, simples e descomplicado."
      meta={[
        {
          name: "description",
          content: "Viabilize o sonhos dos funcionários da sua empresa de maneira eficiente. Torne o RH mais próximo do colaborador e tenha uma equipe ainda mais engajada."
        },
        {
          property: 'og:url',
          content: 'https://paketa.com.br/como-funciona',
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
      headline="Processo totalmente digital com um ambiente colaborativo que estimula o engajamento de toda equipe."
    />

    <section className="hiw__flux">
      <h3>Entenda o nosso fluxo de contratação</h3>

      <div className="hiw__connector">
        <img src={Connector}/>
      </div>

      <div className="hiw__steps">
        <Card 
          src={ContactRh}
          alt="Ícone de um chat de conversa"
          text="Contato entre Paketá e RH da Empresa"
        />

        <Card
          src={Convenio}
          alt="Ícone pessoa segurando uma bandeira"
          text="Empresa conveniada e divulgação interna para funcionários"
        />

        <Card
          src={Simulation}
          alt="Ícone do app"
          text="Simulação digital e Pedido de Crédito pelo funcionário"
        />

        <Card
          src={Order}
          alt="Ícone pedido de crédito"
          text="Aprovação do pedido pela Paketá e RH"
        />

        <Card 
          src={Credit}
          alt="Ícone mão recebendo dinheiro"
          text="Crédito liberado em até 24H"
        />
         
      </div>
    </section>
    
    <section className="hiw__features">
      <h3>Ambiente agradável e processos simplificados</h3>
      <p>
        Nossa plataforma facilita o trabalho para o RH.
        Simulação e liberação de crédito digital.
      </p>

      <div className="hiw-features__content">

        <div className="hiw-features__card">
          <img src={Check} alt="check"/>
          <div className="hiw-features__text">
            <h4>Processo e acompanhamento online</h4>
            <p>Facilidade para a sua equipe de RH.</p>
          </div>
        </div>

        <div className="hiw-features__card">
          <img src={Check} alt="check" />
          <div className="hiw-features__text">
            <h4>CHAT ONLINE COM A PAKETÁ</h4>
            <p>Simplicidade sem burocracia.</p>
          </div>
        </div>

        <div className="hiw-features__card">
          <img src={Check} alt="check" />
          <div className="hiw-features__text">
            <h4>Conheça os sonhos dos colaboradores</h4>
            <p>Faça da sua empresa um melhor lugar para trabalhar.</p>
          </div>
        </div>

        <div className="hiw-features__card">
          <img src={Check} alt="check" />
          <div className="hiw-features__text">
            <h4>Campanhas, desafios e feedbacks</h4>
            <p>Aumente o engajamento da sua equipe.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="hiw__dreams">
      <h3>Viabilize os sonhos da sua equipe e mantenha
        com você a equipe do seus sonhos
      </h3>

      <div className="hiw-dreams__content">

        <div className="hiw-dreams__card">
          <div className="hiw-dreams__header">
            <img src={Campaing} alt="Ícone megafone"/>
            <p>Campanhas</p>
          </div>

          <div className="hiw-dreams__text">
            <p>
              Campanhas ligadas a temas e conteúdos
              relevantes para a empresa:
            </p>
            <ul>
              <li>Workshops</li>
              <li>Artigos</li>
              <li>Projetos pessoais</li>
            </ul>
          </div>
        </div>

        <div className="hiw-dreams__card">
          <div className="hiw-dreams__header">
            <img src={Cloud} alt="Ícone nuvem" />
            <p>Nuvem de Sonhos</p>
          </div>

          <div className="hiw-dreams__text">
            <p>
              Mapeamento dos desejos e necessidades
              dos funcionários
            </p>
            <ul>
              <li>Viagem e Intercâmbio</li>
              <li>Eletrônicos e Eletrodomésticos</li>
              <li>Cursos e Estudos</li>
            </ul>
          </div>
        </div>

        <div className="hiw-dreams__card">
          <div className="hiw-dreams__header">
            <img src={Quiz} alt="Ícone questionário" />
            <p>Educação Financeira</p>
          </div>

          <div className="hiw-dreams__text">
            <p>
              Educação financeira e engajamento de
              funcionários
            </p>
            <ul>
              <li>Vídeos</li>
              <li>Dicas de crédito</li>
              <li>Como lidar com dinheiro</li>
            </ul>
          </div>
        </div>
        
      
      </div>
    </section>

    <Footer />
  </div>
)

export default HowItWorks 