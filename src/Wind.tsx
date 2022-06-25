import Lottie from 'lottie-react';
import {useCurrentFrame} from 'remotion';
import animation from './lottie/wind.json';

import './style.css';

export const Wind = () => {
	const frame = useCurrentFrame();

	return (
		<div className="relative h-full justify-center align-middle">
			<Lottie
				className="absolute top-0 left-0 h-full"
				autoplay={false}
				initialSegment={[frame, frame]}
				animationData={animation}
			/>
		</div>
	);
};
