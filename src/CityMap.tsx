import {interpolate} from 'remotion';
import {useCurrentFrame} from 'remotion';
import 'leaflet/dist/leaflet.css';

import {MapContainer, TileLayer, Circle, Marker, Popup} from 'react-leaflet';
import {Station} from './components/Station';

export const CityMap = () => {
	const position = {lat: 49.44191817384622, lng: 1.0922555780313823};

	return (
		<MapContainer
			zoomControl={false}
			style={{height: 1200, width: 1920}}
			center={position}
			zoom={13}
			scrollWheelZoom={false}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Station center={position} minRadius={20} maxRadius={40} />
		</MapContainer>
	);
};
