import React, { Component, StrictMode } from 'react';
import DrawShapes from './DrawShapes';
import PopupExample from './PopupExample';
import VectorLayersExample from './VectorLayersExample';
import CustomComponent from './CustomComponent';
import Pane from './Pane';
import DragableMarker from './DragableMarker';
import ImageOverlayRotated from './ImageOverlayRotated';
import LayersControl from './LayersControl';

class App extends Component {
	render() {
		return <div style={{height: '100vh'}}><DrawShapes /></div>;
	}
}

export default App;
