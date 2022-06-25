import {useVideoConfig} from 'remotion';
import {spring, useCurrentFrame} from 'remotion';
import {colors} from '../colors';

export const LegendBar = () => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const height = spring({
		frame,
		from: 0,
		to: videoConfig.height,
		fps: videoConfig.fps,
		config: {stiffness: 100},
	});

	return (
		<div style={{zIndex: 500, height}} className="absolute flex flex-col w-16">
			{Object.entries(colors).map(([_, color]) => (
				<div style={{backgroundColor: color}} className=" w-full flex-grow" />
			))}
		</div>
	);
};
