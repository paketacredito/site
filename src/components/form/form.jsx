import React, { Component } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
// import { Redirect } from 'react-router'

import './form.css'

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      NAME: '',
      PHONE: '',
      EMAIL: '',
      MESSAGE: '',
      TYPE: 'Funcionário',
      listFields: null,
      isDisabled: true,
      emailValid: false,
      showMessage: false
    }
    this._handleSubmit = this._handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
    this.handleButton = this.handleButton.bind(this)
  }

  onChange(e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({[name]: value},
      () => this.handleValidation()
    )
  }

  

  handleValidation() {
    const {NAME, PHONE, EMAIL, MESSAGE, TYPE, listFields } = this.state

    const newValue = (
      (NAME !== '') && (PHONE !== '') && (MESSAGE !== '')
    ) ? Object.assign({}, { NAME }, { PHONE }, { MESSAGE }, { TYPE }) : ''

    const emailValid = (
      EMAIL.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i)
    ) ? true : false

    if (newValue) {
      this.setState({ listFields: newValue }, () => {
        if (listFields && emailValid) {
          this.handleButton()
        }}
      )
    }
  }

  handleButton() {
    const {listFields} = this.state
    
    this.setState({ isDisabled: false }, () => console.log(listFields))
    
  }


  _handleSubmit = (e, email, listFields) => {
    e.preventDefault()
    addToMailchimp(email, listFields)
      .then(data => {
        window.location.replace('/contato/obrigado')
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
      })
  }

  render() {
    const { EMAIL, listFields, isDisabled } = this.state

    return (
      <div className="form">
        <form ref={ref => (this.formRef = ref)} onSubmit={(e) => this._handleSubmit(e, EMAIL, listFields)}>
          <div className="form__text-input">

            <input onChange={this.onChange} name="NAME" type="text" placeholder="Nome*" />

            <input onChange={this.onChange} name="PHONE" className="input__small" type="text" placeholder="Celular*" />

            <input onChange={this.onChange} name="EMAIL" className="input__small" type="email" placeholder="E-mail*" />

            <textarea onChange={this.onChange} name="MESSAGE" placeholder="Mensagem*" />

          </div>

          <div className="form__radio-input">
            <p>Você é*:</p>

            <label htmlFor="type-employer">
              <input checked onChange={this.onChange} value="Funcionário" name="TYPE" id="type-employer" type="radio" />Funcionário | Contratar crédito
            </label>

            <label htmlFor="type-company">
              <input onChange={this.onChange} value="Empresa" name="TYPE" id="type-company" type="radio" />Empresa | Estabelecer convênio
            </label>
          </div>

          <div className="form__button">
            <button disabled={isDisabled}>Enviar</button>
          </div>
        </form>
      </div>
    )
  }
}


export default Form