import React, { Component } from 'react'
import MaskedInput from 'react-text-mask'

import './form.css'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      phone: '',
      email: '',
      message: '',
      type: ''
    }
  }

  render() {
    return (
      <div className="form">
        <form>
          <div className="form__text-input">
            <input type="text" placeholder="Nome*" />

            <input className="input__small" type="text" placeholder="Celular*" />

            <input className="input__small" type="text" placeholder="E-mail*" />

            <textarea placeholder="Mensagem*" />

          </div>

          <div className="form__radio-input">
            <p>Você é*:</p>

            <label htmlFor="type-employer">
              <input name="input-type" id="type-employer" type="radio" />Funcionário | Contratar crédito
            </label>

            <label htmlFor="type-company">
              <input name="input-type" id="type-company" type="radio" />Empresa | Estabelecer convênio
            </label>
          </div>

          <div className="form__button">
            <button>Enviar</button>
          </div>
        </form>
      </div>
    )
  }
}


export default Form