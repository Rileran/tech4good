import {Dayjs} from 'dayjs';
import './Title.scss';
import {Img} from "remotion";
import AtomNormandiePartenair from './AtmoNormandiePartenair.png';
import Metropole from './Metropole.png';

export type TitleProps = {
	date: Dayjs;
	city: string;
};

export const Title = ({date, city}) => {
	return (
		<div className='container'>
			<div className='bilanAtmo'>Bilan ATMO</div>
			<div className='date'>{date.format('dddd D MMMM')}</div>
			<div className='city'>à {city}</div>
			<div className="images">
				<Img src={AtomNormandiePartenair} />
				<Img src={Metropole} />
			</div>
		</div>
	);
};
