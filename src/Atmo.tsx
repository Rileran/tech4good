import dayjs from 'dayjs';
import {Sequence} from 'remotion';
import {CityMap} from './CityMap';
import {Title} from './Title/Title';

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

export const Atmo = () => {
	return (
		<>
			<Sequence from={0} durationInFrames={20}>
				<Title date={dayjs()} city="Rouen" />
			</Sequence>
			<Sequence from={19} durationInFrames={40}>
				<CityMap stations={fakeData} />
			</Sequence>
		</>
	);
};
