import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import './ctaButton.css'

const CtaButton = (props) =>{
  if(props.to){
    return  (
      <div className="cta-button">
        <Link to={props.to}>
          {props.text}
        </Link>
      </div>
    )
  }else{
    return  (
      <div className="cta-button">
        <a onClick={() =>{props.click()}}>
          {props.text}
        </a>
      </div>
    )
  }
}

const requiredPropsCheck = (props, propName, componentName) => {
  if (!props.to && !props.click) {
    return new Error(`One of 'to' or 'click' is required by '${componentName}' component.`)
  }
}

CtaButton.propTypes = {
  to: requiredPropsCheck,
  text: PropTypes.string.isRequired,
  click: requiredPropsCheck,
}

export default CtaButton