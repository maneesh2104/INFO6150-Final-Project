import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class DocMap extends Component {
  static defaultProps = {
    center: {
      lat: 42.340853499083074,
      lng: -71.0891717 
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '97%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBDPeQaDFXb4gPOpnGZNaIO6pGd85Cpn9M"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={42.340853499083074}
            lng={-71.0891717}
            text="Doctor is here"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default DocMap;