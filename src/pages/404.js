import React from 'react'
import { Link } from 'gatsby'

import './404.css'

import ReactGA from 'react-ga'

ReactGA.initialize('UA-130200057-1')
ReactGA.pageview('/404')

const NotFoundPage = () => (
  <div className='not-found'>
    <h1>000PS...</h1>
    <p>
      Essa página não existe, que tal voltar para
      nossa <Link to='/'>página inicial</Link>?
    </p>
  </div>
  )

export default NotFoundPage
