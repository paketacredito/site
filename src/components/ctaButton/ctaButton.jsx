import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import './ctaButton.css'

const CtaButton = (props) => (
  <div className="cta-button">
    <Link to={props.to}>
      {props.text}
    </Link>
  </div>
)

CtaButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default CtaButton