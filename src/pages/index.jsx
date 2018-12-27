import React from 'react'
import Helmet from 'react-helmet'
import Fade from 'react-reveal/Fade'
import ReactGA from 'react-ga'

import Header from '../components/headerHome/headerHome'
import Card from '../components/card/card'
import HowItWorks from '../containers/homeHiw/homeHiw'
import CtaButton from '../components/ctaButton/ctaButton'
import Footer from '../components/footer/footer'
import CtaSection from '../components/ctaSection/ctaSection'

import JurosBaixos from '../images/icon-paketa-jurosbaixos.svg'
import ParcelasFixas from '../images/icon-paketa-parcelasfixas.svg'
import Credito from '../images/icon-paketa-credito.svg'
import DescontoFolha from '../images/icon-paketa-descotonafolha.svg'
import Planejamento from '../images/icon-paketa-planejamento.svg'
import Personalizacao from '../images/icon-paketa-personalizacao.svg'
import Agilidade from '../images/icon-paketa-agilidade.svg'
import Thumbnail from '../images/thumbnail.jpg'

import '../components/layout.css'
import './index.css'

ReactGA.initialize('UA-130200057-1')
ReactGA.pageview('/')

const IndexPage = () => (
  <div className="home">
    <Helmet
      title="Paketá - Crédito online, simples e descomplicado."
      meta={[
        {
          name: "description",
          content: "Crédito online para funcionários de empresas conveniadas.Desconto direto na folha de pagamento, com taxas de juros mais baixas que outras linhas de crédito.Comece agora. "
        },
        {
          property: 'og:url',
          content: 'https://paketa.com.br',
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
    <Header />

    <section id="credit" className="home__credit">
      <h3>
        Crédito Consignado para funcionários de
        empresas conveniadas
      </h3>

      <div className="credit__card">
        <Fade bottom>
          <Card
            src={JurosBaixos}
            alt="Juros Baixos"
            text="Taxas de juros mais baixas que outras linhas de crédito"
          />
        </Fade>

        <Fade bottom>
          <Card
            src={ParcelasFixas}
            alt="Parcelas Fixas"
            text="Parcelas fixas de até 30% do salário líquido"
          />
        </Fade>

        <Fade bottom>
          <Card
            src={Credito}
            alt="Crédito"
            text="Crédito pode ser usado para qualquer finalidade"
          />
        </Fade>

        <Fade bottom>
          <Card
            src={DescontoFolha}
            alt="Desconto na folha"
            text="Desconto das parcelas na folha de pagamento"
          />
        </Fade>
      </div>
    </section>

    <HowItWorks />

    <section className="home__cta">
      <div className="home__cta--content">
        <Fade left>
          <h3>Deixe a vida leve</h3>
          <p>
            Crédito com taxas diferenciadas, sem burocracia
          e até 48 meses para pagar.
          </p>

          <CtaButton to="/como-funciona" text="Saiba Mais" />
        </Fade>
      </div>
    </section>

    <section className="home__dreams">
      <h3>Facilite o dia a dia e viabilize os sonhos dos seus funcionários</h3>
      <div className="home__dreams--steps">

        <Fade bottom>
          <Card
            src={Planejamento}
            alt="Ícone gráfico de indicadores financeiros"
            title="Planejamento financeiro"
            text="Auxílio na definição e atingimento de objetivos e sonhos pessoais"
          />
        </Fade>

        <Fade bottom>
          <Card
            src={Personalizacao}
            alt="Ícone personalização"
            title="Personalização"
            text="Conteúdos e recomendações de acordo com o perfil de cada colaborador"
          />
        </Fade>

        <Fade bottom>
          <Card
            src={Agilidade}
            alt="Ícone cronometro"
            title="Agilidade e Simplicidade"
            text="Simulação e contratação em ambiente digital com crédito em até 24 horas"
          />
        </Fade>
        
      </div>
    </section>

    <CtaSection
      title="Comece agora a realizar os seus objetivos"
      text="Fale conosco que podemos ajudá-lo"
      cta="Entrar em contato"
      url="/contato"
    />

    <Footer />
    
  </div>
)

export default IndexPage
