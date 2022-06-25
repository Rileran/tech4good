import {Dayjs} from 'dayjs';
import {Rain} from '../animations/Rain';
import {Sun} from '../animations/Sun';
import {colors} from '../colors';
import './Score.scss';
import {useCurrentFrame} from 'remotion';
import {Wind} from '../animations/Wind';

export type ScoreProps = {
	date: Dayjs;
	score: number;
};

export const Score = ({date, score}) => {
	const label = Object.keys(colors)[score - 1];
	const color = colors[label];
	const frame = useCurrentFrame();

	let Animation = Sun;
	if (score > 3) {
		Animation = Rain;
	}

	return (
		<div className="container">
			{frame < 27 && <Wind />}
			<Animation/>
			<div className="scoreDate">Indice Atmo au <span>{date.format('dddd D MMMM')}</span></div>
			<div style={{color}} className="scoreScore">
				{score}<span className='scoreOutOf6'>/ 6</span>
			</div>
			<div style={{color}} className="scoreLabel">{label}</div>
		</div>
	);
};
