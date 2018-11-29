import React from 'react'
import PropTypes from 'prop-types'
import CtaButton from '../ctaButton/ctaButton'

import './ctaSection.css'

const CtaSection = (props) => (
  <section className="cta-section">
    <div className="cta-section__text">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>

    <CtaButton
      to={props.url}
      text={props.cta}
    />
  </section>
)

export default CtaSection