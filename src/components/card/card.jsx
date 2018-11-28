import React from 'react'
import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => (
  <div className="card">
   <div className="card__image">
    <img src={props.src} alt={props.alt} />
   </div>
   <div className="card__text">
    <h4>{props.title}</h4>
    <p>{props.text}</p>
   </div>
  </div>
)

Card.propTypes = {
 src: PropTypes.string.isRequired,
 alt: PropTypes.string.isRequired,
 title: PropTypes.string,
 text: PropTypes.string.isRequired
}

export default Card