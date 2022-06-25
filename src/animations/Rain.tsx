import Lottie from 'lottie-react';
import {useCurrentFrame} from 'remotion';
import animation from '../lottie/rain.json';

export const Rain = () => {
	const frame = useCurrentFrame();

	return (
		<Lottie
			style={{
				position: 'absolute',
				top: '0px',
				left: '0px',
				height: 'full',
			}}
			className="absolute top-0 left-0 h-full"
			autoplay={false}
			initialSegment={[frame, frame]}
			animationData={animation}
		/>
	);
};
