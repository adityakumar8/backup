import React, { Component } from 'react';
// import { Map } from 'react-leaflet';
import { MapContainer, GeoJSON } from 'react-leaflet';
import mapData from './../data/states_india.json';
// import mapData from './../data/countries.json';
import 'leaflet/dist/leaflet.css';
import './MyMap.css';

class MyMap extends Component {
	state = {};

	componentDidMount() {
		console.log(mapData);
	}

	countryStyle = {
		fillColor: 'red',
		fillOpacity: 0.1,
		color: 'black',
	}

	onEachCountry = (country, layer) => {
		const countryName = country.properties.state_code;
		console.log(countryName);
		layer.bindPopup(countryName + " 227 State" );

		layer.on({
			click: (event) => {
				event.target.setStyle({
					color: "green",
					fillColor: "yellow",
				});
			}
		});
	};


	render() {
		return (
			<div>
				<h1 style={{textAlign: "center"}}>My Map</h1>
				<MapContainer
					className="markercluster-map"
					style={{ height: "70vh" }}
					center={[20, 80]}
					zoom={4}
					>
						<GeoJSON style={this.countryStyle} data={mapData.features} onEachFeature={this.onEachCountry} />
				</MapContainer>
			</div>
		)
	}
}

export default MyMap
