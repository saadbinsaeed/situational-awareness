import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export default class DraggableExample extends Component {
	state = {
		center: {
			lat: 51.505,
			lng: -0.09,
		},
		marker: {
			lat: 51.505,
			lng: -0.09,
		},
		zoom: 13,
		draggable: true,
	};
	refmarker = React.createRef();

	toggleDraggable = () => {
		this.setState({ draggable: !this.state.draggable });
	};

	updatePosition = () => {
		const { lat, lng } = this.refmarker.current.leafletElement.getLatLng();
		this.setState({
			marker: { lat, lng },
		});
	};

	render() {
		const position = [this.state.center.lat, this.state.center.lng];
		const markerPosition = [this.state.marker.lat, this.state.marker.lng];

		return (
			<Map center={position} zoom={this.state.zoom}>
				<TileLayer
					attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker
					draggable={this.state.draggable}
					onDragend={this.updatePosition}
					position={markerPosition}
					ref={this.refmarker}
				>
					<Popup minWidth={90}>
						<span onClick={this.toggleDraggable}>
							{this.state.draggable ? 'DRAG MARKER' : 'MARKER FIXED'}
						</span>
					</Popup>
				</Marker>
			</Map>
		);
	}
}
