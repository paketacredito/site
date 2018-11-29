import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../navbar/navbar'


import './header.css'

const Header = (props) => (
  <div className="header">
    <Navbar />
    <p>
      {props.headline}
    </p>
  </div>
)

Header.propTypes = {
  headline: PropTypes.string.isRequired
}

export default Header