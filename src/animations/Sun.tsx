import Lottie from 'lottie-react';
import {useCurrentFrame} from 'remotion';
import animation from '../lottie/sun.json';

export const Sun = () => {
	const frame = useCurrentFrame();

	return (
		<Lottie
			className="absolute top-0 left-0 h-full"
			style={{
				position: 'absolute',
				top: '0px',
				left: '0px',
				height: 'full',
			}}
			autoplay={false}
			initialSegment={[frame, frame]}
			animationData={animation}
		/>
	);
};
