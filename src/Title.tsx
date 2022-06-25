import {Dayjs} from 'dayjs';

export type TitleProps = {
	date: Dayjs;
	city: string;
};

export const Title = ({date, city}) => {
	return (
		<div
			style={{
				height: '1200px',
				width: '1920px',
				backgroundColor: 'red',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h1>Bilan ATMO</h1>
			<p>{date.format('dddd D MMMM')}</p>
			<p>à {city}</p>
		</div>
	);
};
