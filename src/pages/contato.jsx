import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Form from '../components/form/form'
import Thumbnail from '../images/thumbnail.jpg'

const Contact = () => (
  <div className="contact">
    <Helmet
      title="Paketá - Crédito online, simples e descomplicado."
      meta={[
        {
          name: "description",
          content: "Entre em contato!"
        },
        {
          property: 'og:url',
          content: 'https://paketa.com.br/contato',
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
      headline="Fale Conosco"
    />

    <Form />

    <Footer />
  </div>
)

export default Contact 