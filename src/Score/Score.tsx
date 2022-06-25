import {Dayjs} from 'dayjs';
import {colors} from '../colors';
import './Score.scss';

export type ScoreProps = {
	date: Dayjs;
	score: number;
};

export const Score = ({date, score}) => {
	const label = Object.keys(colors)[score - 1];
	const color = colors[label];

	return (
		<div className="container">
			<div className="date">{date.format('dddd D MMMM')}</div>
			<div style={{color}} className="score">
				{score}
			</div>
			<div className="label">{label}</div>
		</div>
	);
};
