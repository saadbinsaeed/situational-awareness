import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import { addressPoints } from './addressPoints';

class MapExample extends React.Component {
	render() {
		return (
			<div>
				<Map center={[0, 0]} zoom={13}>
					<HeatmapLayer
						fitBoundsOnLoad
						fitBoundsOnUpdate
						points={addressPoints}
						longitudeExtractor={m => m[1]}
						latitudeExtractor={m => m[0]}
						intensityExtractor={m => parseFloat(m[2])}
					/>
					<TileLayer
						url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
						attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
					/>
				</Map>
			</div>
		);
	}
}

export default MapExample;
