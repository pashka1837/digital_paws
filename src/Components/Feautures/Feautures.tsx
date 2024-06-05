import './Feautures.css';

import Card from '../Card/Card';
import pets from '../pets';

export default function Feautures() {
	return (
		<div id='collection' className='features container_gr'>
			<div className='subheadline'>
				<h3>
          Explore a diverse marketplace of virtual pet NFTs with unique traits,
          characteristics, and personalities!
				</h3>
			</div>
			<div className='cards_container'>
				{pets.map(pet => <Card key={pet.imgInfo.name} {...pet} />)}
			</div>
		</div>
	);
}
