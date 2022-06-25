import {Dayjs} from 'dayjs';
import './Score.scss';

export type ScoreProps = {
	date: Dayjs;
  score: number;
  label: string;
};

export const Score = ({date, score, label}) => {
	return (
		<div className="container">
			<div className='date'>{date.format('dddd D MMMM')}</div>
      <div className='score'>{score}</div>
      <div className='label'>{label}</div>
		</div>
	);
};
