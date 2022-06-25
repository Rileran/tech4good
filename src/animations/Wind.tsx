import Lottie from 'lottie-react';
import {useCurrentFrame} from 'remotion';
import animation from '../lottie/wind.json';

export const Wind = () => {
	const frame = useCurrentFrame();

	return (
		<div style={{height: 'full', width: 'full', zIndex: 1000}}>
			<Lottie
				style={{
					position: 'absolute',
					top: '20%',
					left: '0px',
					height: '800px',
				}}
				autoplay={false}
				initialSegment={[frame, frame]}
				animationData={animation}
			/>
		</div>
	);
};
