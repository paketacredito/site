import React from 'react'

import Footer from '../../components/footer/footer'
import './obrigado.css'
import '../../components/layout.css'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-130200057-1')
ReactGA.pageview('/contato/obrigado')

const Success = () => (
  <div className="success">
    <div className="success__test">
      <h1>Obrigado!</h1>
      <h3>Em breve entraremos em contato com você.</h3>
    </div>
    
    <Footer/>
  </div>
  
)

export default Success