import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ContentHeader = ({ title, subTitle }) => {

  return <div className="container bg-light pt-40 text-center">
    <h1 className="mb-10 text-bold">{title}</h1>
    <h3 className="text-color mb-60">{subTitle}</h3>
  </div>;
}

ContentHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}


export default ContentHeader
