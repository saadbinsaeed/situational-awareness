import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

class SimpleExample extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://mi-c3.com">Mi-C3</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            Welcome to Mi-C3. <br/> Bhrikirkara, Malta
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default SimpleExample;
