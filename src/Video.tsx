import dayjs from 'dayjs';
import {Composition} from 'remotion';
import {Advice} from './Advice/Advice';
import {Wind} from './animations/Wind';
import {Atmo} from './Atmo';
import {Aurevoir} from './Aurevoir/Aurevoir';
import {CityMap} from './CityMap';
import {Details} from './Details/Details';
import {Score} from './Score/Score';
import {Title} from './Title/Title';
import data from '../data.json';

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
				durationInFrames={501}
				defaultProps={data}
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
					date,
					city: 'Rouen',
				}}
			/>
			<Composition
				id="Score"
				component={Score}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1200}
				defaultProps={{
					weather: 'Rain',
					date,
					score: 6,
				}}
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
				id="Details"
				component={Details}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1200}
				defaultProps={{
					details: [
						{
							title: 'Dioxyde de carbone',
							cause: '(voitures, agriculture, ...)',
							quantity: '23 mg/l',
						},
						{
							title: 'Dioxyde de carbone',
							cause: '(voitures, agriculture, ...)',
							quantity: '23 mg/l',
						},
						{
							title: 'Dioxyde de carbone',
							cause: '(voitures, agriculture, ...)',
							quantity: '23 mg/l',
						},
						{
							title: 'Dioxyde de carbone',
							cause: '(voitures, agriculture, ...)',
							quantity: '23 mg/l',
						},
						{
							title: 'Dioxyde de carbone',
							cause: '(voitures, agriculture, ...)',
							quantity: '23 mg/l',
						},
					],
					score: 1,
					stations: null,
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
					advice: 'Arrêtez les bagnoles',
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
				id="Aurevoir"
				component={Aurevoir}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1200}
			/>
		</>
	);
};
