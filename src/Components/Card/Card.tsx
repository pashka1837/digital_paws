import './Card.css';
import {type PetObj} from '../pets';

type CardProps = PetObj;

export default function Card({imgSrc, imgInfo, cardInfo}: CardProps) {
	const {name, petAge, humAge, desc} = imgInfo;
	const {title1, title2, title3, title4} = cardInfo;

	return (
		<div className='card'>
			<div className='pet_img_container'>
				<img src={imgSrc} alt='pet image' />
			</div>
			<div className='pet_desc_container'>
				<h3>
					<span>{title1}:</span> {name}
				</h3>
				<h3>
					<span>{title2}:</span> {petAge}
				</h3>
				<h3>
					<span>{title3}:</span> {humAge}
				</h3>
				<h3>
					<span>{title4}</span> {desc}
				</h3>
			</div>
		</div>
	);
}
