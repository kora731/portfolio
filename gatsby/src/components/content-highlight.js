import PropTypes from "prop-types"
import React from "react"

const ContentHighlight = ({ attributes }) => {

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

ContentHighlight.propTypes = {
  attributes: PropTypes.array
}

export default ContentHighlight
