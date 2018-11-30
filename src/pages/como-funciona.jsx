import React from 'react'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Card from '../components/card/card'

import ContactRh from '../images/paketa-contato-rh.svg'
import Convenio from '../images/paketa-convenio-divulgacao.svg'
import Simulation from '../images/paketa-simulacao-funcionario.svg'
import Order from '../images/paketa-aprovacao-pedido.svg'
import Credit from '../images/paketa-credito-liberado.svg'
import Connector from '../images/linha.svg'

import './como-funciona.css'

const HowItWorks = () => (
  <div className="hiw">
    <Header
        headline="Processo totalmente digital para simulação e disponibilização de Crédito Consignado, com ambiente colaborativo que estimula o engajamento de toda a equipe"
    />

    <div className="hiw__flux">
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
    </div>
      



    <Footer />
  </div>
)

export default HowItWorks 