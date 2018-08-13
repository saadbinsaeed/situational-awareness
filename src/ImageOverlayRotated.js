import React, { Component } from 'react';
import { Map, TileLayer, ImageOverlay } from 'react-leaflet';
import Leaflet from 'leaflet';
import 'leaflet-imageoverlay-rotated';

class ImageOverlayRotated extends Map {
	createLeafletElement(props) {
		let LeafletMapElement = super.createLeafletElement(props);
		let topleft = new Leaflet.latLng(25.19369224545977, 55.27024269104004);
		let topright = new Leaflet.latLng(25.19413882386311, 55.271347761154175);
		let bottomleft = new Leaflet.latLng(25.192905875160584, 55.27065575122833);
		let overlay = new Leaflet.imageOverlay.rotated(
			'abc.png',
			topleft,
			topright,
			bottomleft,
			{
				opacity: 0.7,
				interactive: true,
			}
		).addTo(LeafletMapElement);
		return LeafletMapElement;
	}
}

export default class ImageOverlayExample extends Component {
	state = {
		play: true,
	};

	onTogglePlay = () => {
		this.setState({ play: !this.state.play });
	};

	render() {
		return (
			<div className="map">
				<ImageOverlayRotated
					onClick={this.onTogglePlay}
					bounds={[
						[25.192905875160584, 55.27024269104004, 0],
						[25.19413882386311, 55.27176082134247, 0],
					]}
					style={{ width: '100%', height: '100vh' }}
				>
					<TileLayer
						noWrap={true}
						attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				</ImageOverlayRotated>
			</div>
		);
	}
}
