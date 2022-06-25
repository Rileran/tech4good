import dayjs from 'dayjs';
import {Composition} from 'remotion';
import { Advice } from './Advice/Advice';
import { Wind } from './animations/Wind';
import {Atmo} from './Atmo';
import {CityMap} from './CityMap';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import { Score } from './Score/Score';
import {Title} from './Title/Title';

// Each <Composition> is an entry in the sidebar!

const fakeData = [
	{
		center: {lat: 49.44191817384622, lng: 1.0922555780313823},
		color: 'red',
		radius: 20,
	},
	{
		center: {lat: 49.45291817384622, lng: 1.192255578031382},
		color: 'blue',
		radius: 40,
	},
	{
		center: {lat: 49.40291817384622, lng: 1.142255578031382},
		color: 'green',
		radius: 50,
	},
];

export const RemotionVideo: React.FC = () => {
	const date = dayjs();

	return (
		<>
			<Composition
				id="Atmo"
				component={Atmo}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1200}
			/>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.tsx <id> out/video.mp4
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1200}
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
				height={1200}
			/>
			<Composition
				id="CityMap"
				component={CityMap}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1200}
				defaultProps={{
					stations: fakeData,
				}}
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1200}
				defaultProps={{
					date,
					city: 'Rouen',
				}}
			/>
			<Composition
				id="Wind"
				component={Wind}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1200}
			/>
			<Composition
				id="Score"
				component={Score}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1200}
				defaultProps={{
					date,
					score: 6,
					label: 'C chaud'
				}}
			/>
			<Composition
				id="Advice"
				component={Advice}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1200}
				defaultProps={{
					advice: 'Arrêtez les bagnoles'
				}}
			/>
		</>
	);
};
