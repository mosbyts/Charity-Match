import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';
 
class CharityMap extends Component {
  static defaultProps = {
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '200px', width: '65%', marginBottom: "40px", marginTop: "15px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCoO4KzYfhWYPTfsYul-2w1CK8T6B6BsWQ" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <Icon 
            name='map pin' 
            size='large'
            lat={this.props.lat}   
            lng={this.props.long}
        />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default CharityMap;