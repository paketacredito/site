import React from 'react'
import { Link } from 'gatsby'

import './ctaButton.css'

const CtaButton = (props) => (
  <div className="cta-button">
    <Link to={props.to}>
      {props.text}
    </Link>
  </div>
)

export default CtaButton