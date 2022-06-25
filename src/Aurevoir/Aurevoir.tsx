import {useCurrentFrame} from 'remotion'
import './Aurevoir.scss';
import {Img} from 'remotion';
import Qualitair from '../assets/Qualitair.svg';
import {Wind} from '../animations/Wind';

export const Aurevoir = () => {
	const frame = useCurrentFrame();

	return (
		<div className="container">
			{frame < 27 && <Wind />}
			<div className="ceBulletin">Ce bulletin</div>
			<Img src={Qualitair} />
			<div className="vousA">vous est proposé par l&apos;équipe</div>
      <div className="equipe">Choux et Carottes</div>
		</div>
	);
};
