import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import bgImage from "../images/logo-sr.png"
import logo from "../images/logo-sr-rev.png"

const Header = ({ pri, next }) => {

  return <div className="main-nav navbar">
    <div className="navbar-header">
      <a className="navbar-brand">

        <img className="site-logo" src={logo} alt="logo"/>

      </a>

    </div>
    <ul className="nav navbar-nav navbar-right">
      {pri &&
        <li>
          <a>Pre: {pri.label}</a>
        </li>
      }
      {next &&
      <li>
        <a>Pre: {next.label}</a>
      </li>
      }
    </ul>
  </div>;
}

Header.propTypes = {
  pri: PropTypes.object,
  next: PropTypes.object
}

export default Header
