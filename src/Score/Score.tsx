import {Dayjs} from 'dayjs';
import {Rain} from '../animations/Rain';
import {Sun} from '../animations/Sun';
import {colors} from '../colors';
import './Score.scss';

export type ScoreProps = {
	date: Dayjs;
	score: number;
	weather: string;
};

export const Score = ({date, score, weather}) => {
	const label = Object.keys(colors)[score - 1];
	const color = colors[label];

	let Animation = Sun;
	if (weather === 'Rain') {
		Animation = Rain;
	}

	return (
		<div className="container">
			<Animation />
			<div className="scoreDate">
				Indice Atmo au {date.format('dddd D MMMM')}
			</div>
			<div style={{color}} className="scoreScore">
				{score}
				<span className="scoreOutOf6">/ 6</span>
			</div>
			<div style={{color}} className="scoreLabel">
				{label}
			</div>
		</div>
	);
};
