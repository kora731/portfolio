import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import bgImage from "../images/logo-sr.png"
import logo from "../images/logo-sr-rev.png"

const Header = ({ pri, next }) => {

  return <div className="main-nav navbar navbar-fixed-top">
    <div className="navbar-header">
      <a className="navbar-brand">

        <img className="site-logo" src={logo} alt="logo"/>

      </a>

    </div>
    <ul className="nav navbar-nav navbar-right">
      {pri &&
        <li>
          <a>Pre: {pri}</a>
        </li>
      }
      {next &&
      <li>
        <a>Pre: {next}</a>
      </li>
      }
    </ul>
  </div>;
}

Header.propTypes = {
  pri: PropTypes.string,
  next: PropTypes.string
}

export default Header
