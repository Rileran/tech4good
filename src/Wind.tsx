import Lottie from 'lottie-react';
import {useCurrentFrame} from 'remotion';
import animation from './lottie/wind.json';

export const Wind = () => {
	const frame = useCurrentFrame();

	return (
		<Lottie
			autoplay={false}
			initialSegment={[frame, frame]}
			animationData={animation}
		/>
	);
};
