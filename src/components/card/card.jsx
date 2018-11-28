import React from 'react'

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

export default Card