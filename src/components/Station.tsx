import {CircleMarker, CircleMarkerProps} from 'react-leaflet';
import {interpolate, useCurrentFrame} from 'remotion';

export type StationProps = CircleMarkerProps & {
	minRadius: number;
	maxRadius: number;
};

export const Station: React.FC<StationProps> = ({
	minRadius,
	maxRadius,
	...rest
}) => {
	const frame = useCurrentFrame();

	const radius = interpolate(frame, [0, 150], [minRadius, maxRadius]);

	return <CircleMarker radius={radius} {...rest} />;
};
