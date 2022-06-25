import Lottie from 'lottie-react';
import {useCurrentFrame} from 'remotion';
import animation from '../lottie/sun.json';
import './animations.scss';

export const Sun = () => {
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
