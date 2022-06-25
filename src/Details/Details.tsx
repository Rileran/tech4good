import {useCurrentFrame} from 'remotion'
import './Details.scss';
import {Wind} from '../animations/Wind';

export type DetailsProps = {
	details: Array<{
    title: string,
    cause: string,
    quantity: number,
    objectif: number
  }>,
  score: number
};

export const Details = ({details, score}) => {
  const frame = useCurrentFrame();

	return (
		<div className="container">
      {frame < 27 && <Wind />}
			<div className='detailsScoreIsExplainedBy'>Ce score de {score} / 6 s&apos;explique par...</div>
      <div className='detailsLegends'>
        <div className='detailsSeuil detailsGray detailsSmall'>μg/m3</div>
        <div className='detailsSeuil'>Valeur</div>
        <div className='detailsSeuil detailsGray'>Seuil</div>
      </div>
      {details.map((detail) => (
        <div className="detailsDetails">
          <div className='detailsHeader'>
            <div className='detailsTitle'>{detail.title}</div>
            <div style={detail.quantity > detail.objectif ? {color: 'red', fontWeight: 'bold'} : {}}>{detail.quantity}</div>
            <div className='detailsObjectif'>{detail.objectif}</div>
          </div>
          <div className='detailsCause'>{detail.cause}</div>
        </div>
			))}
		</div>
	);
};
