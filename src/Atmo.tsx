import dayjs from 'dayjs';
import {Sequence} from 'remotion';
import { Advice } from './Advice/Advice';
import { Aurevoir } from './Aurevoir/Aurevoir';
import {Wind} from './animations/Wind';
import {CityMap} from './CityMap';
import { Details } from './Details/Details';
import {Score} from './Score/Score';
import {Title} from './Title/Title';

const score = 4;

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

const details = [
	{
		title: 'Monoxyde d\'azote',
		cause: 'Véhicules, centrales thermiques, chauffages',
		quantity: '1micrometre'
	},
	{
		title: 'Ozone',
		cause: 'Aérosols, dissolvants, climatisation, réfrégirateur',
		quantity: '2secres'
	},
	{
		title: 'Dioxyde de souffre',
		cause: 'Combustion de charbon, pétrole, gaz de souffre',
		quantity: '2 kilos par mcube'
	},
	{
		title: 'Particules fines 10μm (PM10)',
		cause: 'Poussière de chantier, engrais, usure de pneus',
		quantity: 'fion'
	},
	{
		title: 'Particules fines 2,5μm (PM2.5)',
		cause: 'Moteurs diesels, suies, transformation chimique des gaz polluants',
		quantity: 'bidule'
	}
]

export const Atmo = () => {
	return (
		<>
			<Sequence from={0} durationInFrames={50}>
				<Title date={dayjs()} city="Rouen" />
			</Sequence>
			<Sequence from={51} durationInFrames={100}>
				<Score score={score} date={dayjs()} />
			</Sequence>
			<Sequence from={151} durationInFrames={100}>
				<CityMap stations={fakeData} />
			</Sequence>
			<Sequence from={251} durationInFrames={100}>
				<Details details={details} score={score} />
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
