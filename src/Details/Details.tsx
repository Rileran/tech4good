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
			<div className='detailsScoreIsExplainedBy'>Ce score de {score} / 6 s&apos;explique par...</div>
      {details.map((detail) => (
        <div className="detailsDetails">
          <div className='detailsHeader'>
            <div className='detailsTitle'>{detail.title}</div>
            <div>{detail.quantity}</div>
          </div>
          <div className='detailsCause'>{detail.cause}</div>
        </div>
			))}
		</div>
	);
};
