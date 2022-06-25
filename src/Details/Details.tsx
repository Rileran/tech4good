import './Details.scss';

export type DetailsProps = {
	details: Array<{
    title: string,
    cause: string,
    quantity: string
  }>,
  score: number
};

export const Details = ({details, score}) => {
	return (
		<div className="container">
			<div className='titre'>Le score de {score} s&apos;explique par...</div>
      {details.map((detail) => (
        <div className="detail">
          <div className='header'>
            <div className='title'>{detail.title}</div>
            <div>{detail.quantity}</div>
          </div>
          <div className='cause'>{detail.cause}</div>
        </div>
			))}
		</div>
	);
};
