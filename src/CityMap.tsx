import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer} from 'react-leaflet';
import {LegendBar} from './components/LegendBar';
import {Station, StationProps} from './components/Station';

export type CityMapProps = {
	stations: Array<Pick<StationProps, 'radius' | 'color' | 'center'>>;
};

export const CityMap: React.FC<CityMapProps> = ({stations}) => {
	const position = {lat: 49.44191817384622, lng: 1.0922555780313823};

	return (
		<div className="relative">
			<LegendBar />
			<MapContainer
				zoomControl={false}
				style={{height: 1200, width: 1920}}
				center={position}
				zoom={13}
				scrollWheelZoom={false}
			>
				<TileLayer url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png" />
				{stations.map(({center, radius, color}) => (
					<Station
						key={center.toString()}
						center={center}
						color={color}
						radius={radius}
					/>
				))}
			</MapContainer>
		</div>
	);
};
