import React, { Component } from 'react'
import { Link } from 'react-scroll'
import { Link as LinkGatsby } from 'gatsby'
import { HamburguerMenu } from 'react-hamburger-button'
import { HamburgerButton } from 'react-hamburger-button/dist/src/HamburgerButton';
import Fade from 'react-reveal/Fade'
import classNames from 'classnames'

import Logo from '../../images/logo-paketa-credito.png'

import './navbar.css'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: true,
      didScroll: false
    }
  }

  handleClick() {
    if (window.innerWidth < 576) {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

  }

  updateDimensions() {
    if (window.innerWidth < 576) {
      this.setState({
        isOpen: false
      })
    } else {
      this.setState({
        isOpen: true
      })
    }
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))

  }

  render() {
    const { isOpen, didScroll } = this.state
    let NavbarLinks

    if (isOpen) {
      NavbarLinks =
      <ul>
        <li>
          <Link 
          className="navbar__link" 
          to="about"
          spy={true}
          smooth={true}
          duration= {500}>Quem Somos</Link>
        </li>
        <li>
          <Link className="navbar__link" to="hiw"
          spy={true}
          smooth={true}
          duration= {500}>Como Funciona</Link>
        </li>
        {/* <li>
          <Link className="navbar__link" to="/acesso">Login</Link>
        </li> */}
        {/* <li>
          <Link className="navbar__link navbar__link--cta" to="/contato">Contato</Link>
        </li> */}
     </ul>
    }

    let navbarClass = classNames('navbar', {'navbar__scroll' : didScroll})

    return (
      <div className={navbarClass}>
        <div className="navbar__mobile">
          <LinkGatsby to="/">
            <img src={Logo} className="navbar__logo" alt="Paketá Crédito" />
          </LinkGatsby>
          <div className="navbar__toggle">
            <HamburgerButton
              open={isOpen}
              onClick={this.handleClick.bind(this)}
              width={28}
              height={25}
              strokeWidth={0}
              color='#fffdf0'
              animationDuration={0.5}
            />
          </div>
        </div>
        <Fade top>
          {NavbarLinks}
        </Fade>
      </div>
    )
  }
}

export default Navbar