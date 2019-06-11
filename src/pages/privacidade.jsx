import React from 'react'
import Helmet from 'react-helmet'
import Fade from 'react-reveal/Fade'
import ReactGA from 'react-ga'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import Thumbnail from '../images/thumbnail.jpg'

import './privacidade.css'
import '../components/layout.css'
import hastToHyperscript from "hast-to-hyperscript";

ReactGA.initialize('UA-130200057-1')
ReactGA.pageview('/privacidade')

export const query = graphql`
  query PrivacyPolicyQuery {
    allPrivacyPolicy {
      edges{
        node{
          text
        }
      }
    }
  }
`;

const PrivacyPolicy = (props) => {
  const text = props.data.allPrivacyPolicy.edges[0].node.text;
  return (
  <div>
    <Helmet
      title="Paketá - Crédito online, simples e descomplicado."
      meta={[
        {
          name: "description",
          content: "ontratação de crédito consignado totalmente digital. Processo simplificado com acordo direto com o RH da sua empresa. Viabilize os sonhos da sua equipe de funcionários."
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
      headline="Política de Privacidade" 
    />

    <section className="privacy">
      <div dangerouslySetInnerHTML={{ __html: document.createElement('div').innerHTML=text }} />
    </section>
    <Footer />
  </div>
  )
}

export default PrivacyPolicy