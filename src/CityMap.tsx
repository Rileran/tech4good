import 'leaflet/dist/leaflet.css';
import {MapContainer, MapContainerProps, TileLayer} from 'react-leaflet';
import {useCurrentFrame} from 'remotion';
import {Wind} from './animations/Wind';
import {colors} from './colors';
import {LegendBar} from './components/LegendBar';
import {Station, StationProps} from './components/Station';

export type CityMapProps = Pick<MapContainerProps, 'center'> & {
	stations: any;
};

export const CityMap: React.FC<CityMapProps> = ({stations, center}) => {
	const frame = useCurrentFrame();

	return (
		<>
			{frame < 27 && <Wind />}
			<div style={{position: 'relative'}} className="relative">
				<LegendBar />
				<MapContainer
					zoomControl={false}
					style={{height: 1200, width: 1920}}
					center={center}
					zoom={14}
					scrollWheelZoom={false}
				>
					<TileLayer url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png" />
					{stations.map(({center, radius, atmo}) => {
						return (
							<Station
								key={center.toString()}
								center={center}
								color={colors[Object.keys(colors)[Math.round(atmo) - 1]]}
								radius={radius}
							/>
						);
					})}
				</MapContainer>
			</div>
		</>
	);
};
