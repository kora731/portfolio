import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./content-section.css"

const ContentSection = ({ title, children, isSubTitle }) => {

  return <div id={title} className="container bg-light pt-40 text-left content-section">
    <div className="row col-lg-8 col-lg-push-2">
      {title ?
        (isSubTitle ? <>
          <div className="row">
            <div className="col-lg-3">
              <div className="col-lg-2 contentSubtitle"/>
              <div className="col-lg-10">
                <h4 className="text-color">{title}</h4>
              </div>
            </div>
            <div className="col-lg-9">
              {children}
            </div>
          </div>
        </> : <>
      <div className="row">
        <div className="col-lg-3">
          <h4 className="text-color text-bold text-lg mb-0">{title}</h4>
          <hr className="hr-color hr-bold mt-0 mb-0"/>
        </div>
        <div className="col-lg-9"/>
      </div>

      <div className="row">
        <div className="col-lg-3"/>
        <div className="col-lg-9">
          {children}
        </div>
      </div>
      </>) : children
      }
    </div>
  </div>;
}

ContentSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  isSubTitle: PropTypes.bool,
}

export default ContentSection
