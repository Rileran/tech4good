import {useVideoConfig} from 'remotion';
import {spring, useCurrentFrame} from 'remotion';

const colors = {
	Bon: '#50f0e6',
	Moyen: '#50ccaa',
	Dégradé: '#f0e641',
	Mauvais: '#f84e4f',
	'Très mauvais': '#972732',
	'Extremement mauvais': '#894281',
};

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
