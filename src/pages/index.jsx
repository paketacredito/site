import React from 'react'

import Header from '../components/headerHome/headerHome'
import Card from '../components/card/card'
import HowItWorks from '../containers/homeHiw/homeHiw'
import CtaButton from '../components/ctaButton/ctaButton'

import JurosBaixos from '../images/icon-paketa-jurosbaixos.svg'
import ParcelasFixas from '../images/icon-paketa-parcelasfixas.svg'
import Credito from '../images/icon-paketa-credito.svg'
import DescontoFolha from '../images/icon-paketa-descotonafolha.svg'


import '../components/layout.css'
import './index.css'

const IndexPage = () => (
  <div className="home">
    <Header />

    <section id="credit" className="home__credit">
      <h3>
        Crédito Consignado para funcionários de
        empresas conveniadas
      </h3>

      <div className="credit__card">
        <Card
          src={JurosBaixos}
          alt="Juros Baixos"
          text="Taxas de juros mais baixas que outras linhas de crédito"
        />

        <Card
          src={ParcelasFixas}
          alt="Parcelas Fixas"
          text="Parcelas fixas de até 30% do salário líquido"
        />

        <Card
          src={Credito}
          alt="Crédito"
          text="Crédito pode ser usado para qualquer finalidade"
        />

        <Card
          src={DescontoFolha}
          alt="Desconto na folha"
          text="Desconto das parcelas na folha de pagamento"
        />

      </div>
    </section>

    <HowItWorks />

    <section className="home__cta">
      <div className="home__cta--content">
      
        <h3>Deixe a vida leve</h3>
        <p>
          Crédito com taxas diferenciadas, sem burocracia
        e até 48 meses para pagar.
        </p>

        <CtaButton to="/contato" text="Saiba Mais" />

      </div>
    </section>
  </div>
)

export default IndexPage
