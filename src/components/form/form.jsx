import React, { Component } from 'react'

import './form.css'

class Form extends Component {
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


  _handleSubmit = async (e, email, listFields) => {
    e.preventDefault()

    const template_params = {
      "reply_to": email,
      "from_name": listFields.NAME,
      "phone": listFields.PHONE,
      "message": listFields.MESSAGE,
      "type":listFields.TYPE,
    }
    const response = await fetch("http://localhost:4000/email/SendContactEmail", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "omit", // include, *same-origin, omit
      headers: {
          "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *folslow, error
      referrer: "client", // no-referrer, *client
      body: JSON.stringify(template_params), // body data type must match "Content-Type" header
    });
    await response.json().then(
      window.location.replace('/contato/obrigado')
    );
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