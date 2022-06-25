import {useCurrentFrame} from 'remotion';
import './Advice.scss';
import {Wind} from '../animations/Wind';

const adviceList = [
	'Favoriser les circuits alimentaires courts',
	'Limiter les déplacements professionnels',
	'Encourager les transports publics ou le covoiturage',
	"Diminuer votre consommation d'énergie",
	'Communiquer avec votre entreprise sur les enjeux écologique',
	'Favoriser le télétravail',
	'Réduire l’utilisation du papier',
	'Conserver son matériel plus longtemps, l’acheter d’occasion ou reconditionné',
	'Se passer de voiture ou rouler moins vite',
	'Limiter les trajets en avion',
	'Préférer le téléphone à l’email',
	"Revoir l'isolation de votre habitation",
	'Favoriser la douche au bain',
];

export const Advice: React.FC<any> = () => {
	const frame = useCurrentFrame();

	return (
		<div className="container">
			{frame < 27 && <Wind />}
			<div className="adviceTitle">Le conseil du jour</div>
			<div className="adviceAdvice">{adviceList[new Date().getDay() % 12]}</div>
		</div>
	);
};
