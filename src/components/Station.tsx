import {CircleMarker, CircleMarkerProps} from 'react-leaflet';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export type StationProps = CircleMarkerProps & {
	radius: number;
};

export const Station: React.FC<StationProps> = ({radius, ...rest}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const currentRadius = spring({
		frame,
		from: 0,
		to: radius,
		fps: videoConfig.fps,
		config: {stiffness: 100},
	});

	return <CircleMarker radius={currentRadius} {...rest} />;
};
