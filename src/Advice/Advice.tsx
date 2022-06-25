import './Advice.scss';
  
export type AdviceProps = {
	advice: string;
};

export const Advice = ({advice}) => {
	return (
		<div className="container">
			<div className='adviceTitle'>Le conseil du jour</div>
      <div className='adviceAdvice'>{advice}</div>
		</div>
	);
};
