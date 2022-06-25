import './Advice.scss';
  
export type AdviceProps = {
	advice: string;
};

export const Advice = ({advice}) => {
	return (
		<div className="container">
			<div className='titre'>Le conseil du jour</div>
      <div className='advice'>{advice}</div>
		</div>
	);
};
