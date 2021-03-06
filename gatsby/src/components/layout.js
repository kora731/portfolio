/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"

const Layout = ({ pri, next, children }) => {

  return (
    <div>
      <Header pri={pri} next={next}/>
      <div className="pt-40 pb-80">
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  pri: PropTypes.object,
  next: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default Layout
