import './Aurevoir.scss';
import {Img} from 'remotion';
import Qualitair from '../assets/Qualitair.svg';

export const Aurevoir = () => {
	return (
		<div className="container">
			<div className="ceBulletin">Ce bulletin</div>
			<Img src={Qualitair} />
			<div className="vousA">vous est proposé par l&apos;équipe</div>
      <div className="equipe">Choux et Carottes</div>
		</div>
	);
};
