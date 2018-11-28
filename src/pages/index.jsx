import React from 'react'

import Header from '../components/headerHome/headerHome'
import Card from '../components/card/card'
import HowItWorks from '../containers/homeHiw/homeHiw'
import CtaButton from '../components/ctaButton/ctaButton'
import Footer from '../components/footer/footer'

import JurosBaixos from '../images/icon-paketa-jurosbaixos.svg'
import ParcelasFixas from '../images/icon-paketa-parcelasfixas.svg'
import Credito from '../images/icon-paketa-credito.svg'
import DescontoFolha from '../images/icon-paketa-descotonafolha.svg'
import Planejamento from '../images/icon-paketa-planejamento.svg'
import Personalizacao from '../images/icon-paketa-personalizacao.svg'
import Agilidade from '../images/icon-paketa-agilidade.svg'

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

    <section className="home__dreams">
      <h3>Facilite o dia a dia e viabilize os sonhos dos seus funcionários</h3>
      <div className="home__dreams--steps">
        <Card
          src={Planejamento}
          alt="Ícone gráfico de indicadores financeiros"
          title="Planejamento financeiro"
          text="Auxílio na definição e atingimento de objetivos e sonhos pessoais"
        />

        <Card
          src={Personalizacao}
          alt="Ícone personalização"
          title="Personalização"
          text="Conteúdos e recomendações de acordo com o perfil de cada colaborador"
        />

        <Card
          src={Agilidade}
          alt="Ícone cronometro"
          title="Agilidade e Simplicidade"
          text="Simulação e contratação em ambiente digital com crédito em até 24 horas"
        />
      </div>
    </section>

    <section className="home__contact">
      <div className="home__contact--text">
        <h3>Comece agora a realizar os seus objetivos</h3>
        <p>Fale conosco que podemos ajudá-lo</p>
      </div>

      <CtaButton
        to="/contato"
        text="Entrar em contato"
      />
    </section>

    <Footer />
    
  </div>
)

export default IndexPage
