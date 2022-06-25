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
		<div
			style={{
				zIndex: 500,
				height,
				position: 'absolute',
				display: 'flex',
				flexDirection: 'column',
				width: '80px',
			}}
			className="absolute flex flex-col w-16"
		>
			{Object.entries(colors).map(([libelle, color]) => (
				<>
					<div
						style={{backgroundColor: color, width: 'full', flexGrow: '1'}}
						className=" w-full flex-grow">
						<div className='legendBarLibelles'>{libelle}</div>
					</div>
				</>
			))}
		</div>
	);
};
