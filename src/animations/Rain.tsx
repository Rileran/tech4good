import Lottie from 'lottie-react';
import {useCurrentFrame} from 'remotion';
import animation from '../lottie/rain.json';

export const Wind = () => {
	const frame = useCurrentFrame();

	return (
		<Lottie
			className="absolute top-0 left-0 h-full"
			autoplay={false}
			initialSegment={[frame, frame]}
			animationData={animation}
		/>
	);
};
