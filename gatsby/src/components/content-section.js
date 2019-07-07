import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./content-section.css"

const ContentSection = ({ title, children }) => {

  return <div className="container bg-light pt-40 text-left content-section">
    <div className="row col-lg-8 col-lg-push-2">
      <div className="col-lg-3">
        {title &&
          <>
            <h4 className="text-color text-bold text-lg mb-0">{title}</h4>
            <hr className="hr-color hr-bold mt-0 mr-0"/>
          </>
        }
      </div>
      <div className="col-lg-9">
        {children}
      </div>
    </div>
  </div>;
}

ContentSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default ContentSection
