import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ContentHeighlight = ({ attributes }) => {

  const count = Math.min(4, attributes.length);
  return <div className="row">
    {attributes.map((attribute, index) => {
      return <div className={'col-lg-' + 12 / count} key={index}>
        <h4 className="contentHeighlight">
          {attribute}
        </h4>
      </div>
    })
    }
  </div>;
}

ContentHeighlight.propTypes = {
  attributes: PropTypes.array
}

export default ContentHeighlight
