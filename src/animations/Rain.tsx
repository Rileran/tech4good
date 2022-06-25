import Lottie from 'lottie-react';
import {useCurrentFrame} from 'remotion';
import animation from '../lottie/rain.json';
import './animations.scss';

export const Rain = () => {
	const frame = useCurrentFrame();

	return (
		<Lottie
			className="animations"
			autoplay={false}
			initialSegment={[frame, frame]}
			animationData={animation}
		/>
	);
};
