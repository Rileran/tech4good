import dayjs from 'dayjs';
import {Sequence} from 'remotion';
import {Advice} from './Advice/Advice';
import {Aurevoir} from './Aurevoir/Aurevoir';
import {CityMap} from './CityMap';
import {Details} from './Details/Details';
import {Score} from './Score/Score';
import {Title} from './Title/Title';

const score = 4;

const details = [
	{
		key: 'no2',
		title: "Monoxyde d'azote (NO2)",
		cause: 'Véhicules, centrales thermiques, chauffages',
		objectif: '25',
	},
	{
		key: 'so2',
		title: 'Ozone (O3)',
		cause: 'Aérosols, dissolvants, climatisation, réfrégirateur',
		objectif: '100',
	},
	{
		key: 'o3',
		title: 'Dioxyde de souffre (SO2)',
		cause: 'Combustion de charbon, pétrole, gaz de souffre',
		objectif: '40',
	},
	{
		key: 'pm10',
		title: 'Particules fines 10μm (PM10)',
		cause: 'Poussière de chantier, engrais, usure de pneus',
		objectif: '45',
	},
	{
		key: 'pm25',
		title: 'Particules fines 2,5μm (PM2.5)',
		cause: 'Moteurs diesels, suies, transformation chimique des gaz polluants',
		objectif: '15',
	},
];

export const Atmo = ({center, weather, stations}) => {
	const score = stations
		.map(({atmo}) => atmo)
		.reduce((acc, red) => Math.max(acc, red));

	return (
		<>
			<Sequence from={0} durationInFrames={50}>
				<Title date={dayjs()} city="Rouen" />
			</Sequence>
			<Sequence from={51} durationInFrames={100}>
				<Score weather={weather} score={score} date={dayjs()} />
			</Sequence>
			<Sequence from={151} durationInFrames={100}>
				<CityMap center={center} stations={stations} />
			</Sequence>
			<Sequence from={251} durationInFrames={100}>
				<Details details={details} score={score} stations={stations} />
			</Sequence>
			<Sequence from={351} durationInFrames={100}>
				<Advice advice="Arrêtez la clope et la bagnole" />
			</Sequence>
			<Sequence from={451} durationInFrames={50}>
				<Aurevoir />
			</Sequence>
		</>
	);
};
