import React from "react"
import Lightbox from 'react-image-lightbox';

class LightboxImage extends React.Component {
  constructor(props){

    super(props);
    this.state = {
      isOpen: false
    }
  }

  render() {
    const { isOpen } = this.state;
    return <div>
      <img alt="" className="img-responsive" src={this.props.src} onClick={() => this.setState({ isOpen: true })}/>

      {isOpen && (
        <Lightbox
          mainSrc={this.props.src}
          onCloseRequest={() => this.setState({ isOpen: false })}
        />
      )}
    </div>;
  }
}
export default LightboxImage;