/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./brief.css"

const Brief = ({ attributes }) => (
  <div className="brief">
    {attributes.map((attribute, index) => {
      return <div className="attribute" key={index}>
        <h5>{attribute.label}</h5>
        <span>{attribute.value}</span>
      </div>;})
    }
  </div>
)

Brief.propTypes = {
  attributes: PropTypes.array
}

export default Brief
