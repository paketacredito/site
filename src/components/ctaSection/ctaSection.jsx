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
      click={props.click}
      text={props.cta}
    />
  </section>
)

const requiredPropsCheck = (props, propName, componentName) => {
  if (!props.to && !props.click) {
    return new Error(`One of 'to' or 'click' is required by '${componentName}' component.`)
  }
}

CtaSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  to:requiredPropsCheck,
  click: requiredPropsCheck,
  cta: PropTypes.string.isRequired
}

export default CtaSection