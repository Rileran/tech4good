import {Dayjs} from 'dayjs';
import {Rain} from '../animations/Rain';
import {Sun} from '../animations/Sun';
import {Wind} from '../animations/Wind';
import {colors} from '../colors';
import './Score.scss';

export type ScoreProps = {
	date: Dayjs;
	score: number;
};

export const Score = ({date, score}) => {
	const label = Object.keys(colors)[score - 1];
	const color = colors[label];

	let Animation = Sun;
	if (score > 3) {
		Animation = Rain;
	}

	return (
		<div className="container">
			<Animation />
			<div className="date">{date.format('dddd D MMMM')}</div>
			<div style={{color}} className="score">
				{score}
			</div>
			<div className="label">{label}</div>
		</div>
	);
};
