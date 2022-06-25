import dayjs from 'dayjs';
import {Composition} from 'remotion';
import {CityMap} from './CityMap';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {Title} from './Title/Title';

// Each <Composition> is an entry in the sidebar!

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.tsx <id> out/video.mp4
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			{/* Mount any React component to make it show up in the sidebar and work on it individually! */}
			<Composition
				id="OnlyLogo"
				component={Logo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="CityMap"
				component={CityMap}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1200}
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1200}
				defaultProps={{
					date: dayjs(),
					city: 'Rouen',
				}}
			/>
		</>
	);
};
