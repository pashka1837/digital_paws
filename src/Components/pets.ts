/* eslint-disable radix */
/* eslint-disable @typescript-eslint/naming-convention */
import grey_hood_dog from '../assets/images/pets/grey_hood_dog.webp';
import pnk_shds_cat from '../assets/images/pets/pnk_shds_cat.webp';
import prpl_sweat_cat from '../assets/images/pets/prpl_sweat_cat.webp';
import bl_hood_cat from '../assets/images/pets//bl_hood_cat.webp';
import blck_jack_dog from '../assets/images/pets/blck_jack_dog.webp';

import boneIMG from '../assets/images/attributes/bone.png';
import boxMG from '../assets/images/attributes/box.png';
import catCanIMG from '../assets/images/attributes/cat_can.png';
// Import catFoodIMG from '../assets/images/attributes/cat_food.png';
import dogCanIMG from '../assets/images/attributes/dog_can.png';

export type imgInfo = {
	name: string;
	petAge: string;
	humAge: string;
	desc: string;
};

type CardInfo = {
	title1: string;
	title2: string;
	title3: string;
	title4: string;
};

export type PetObj = {
	imgSrc: string;
	imgInfo: imgInfo;
	cardInfo: CardInfo;
};

function calc_human_age(dog_age: number) {
	return `${Math.floor(16 * (Math.log(dog_age)) + 31)}y`;
}

function calc_dog_age(dog_age: number) {
	if (dog_age >= 1) {
		const [whole, dec] = dog_age.toString().split('.');
		return `${whole}y ${dec ? `${Math.floor(parseInt(dec) / 10 * 12)} months` : ''}`;
	}

	return `${Math.floor(dog_age * 12)} months`;
}

const pets: PetObj[] = [
	{
		imgSrc: bl_hood_cat,
		cardInfo: {
			title1: 'Name',
		   title2: 'Cat Age',
		   title3: 'Human Age',
		   title4: 'Description:',
		},
		imgInfo: {
			name: 'Kale',
			petAge: calc_dog_age(0.51),
			humAge: calc_human_age(0.51),
			desc: 'Kale is cool. He loves to play PubG, dresses well but shy.',
		},
	},
	{
		imgSrc: catCanIMG,
		cardInfo: {
			title1: 'Name',
		   title2: 'Type',
		   title3: 'Attributes',
		   title4: '',
		},
		imgInfo: {
			name: '"Paw-Paw" cat food',
			petAge: 'Canned Tuna',
			humAge: 'Removes hunger for 6 hours, adds 1 life',
			desc: '',
		},
	},
	{
		imgSrc: pnk_shds_cat,
		cardInfo: {
			title1: 'Name',
		   title2: 'Cat Age',
		   title3: 'Human Age',
		   title4: 'Description:',
		},
		imgInfo: {
			name: 'Kate',
			petAge: calc_dog_age(0.45),
			humAge: calc_human_age(0.45),
			desc: 'Kate is barbie cat. She loves fashion and pink color. Very much.',
		},
	},
	{
		imgSrc: boxMG,
		cardInfo: {
			title1: 'Name',
		   title2: 'Type',
		   title3: 'Attributes',
		   title4: '',
		},
		imgInfo: {
			name: 'Box from your package',
			petAge: 'Nice chilling place',
			humAge: 'Gets your cat\' attention for 4 hours',
			desc: '',
		},
	},
	{
		imgSrc: blck_jack_dog,
		cardInfo: {
			title1: 'Name',
		   title2: 'Dog Age',
		   title3: 'Human Age',
		   title4: 'Description:',
		},
		imgInfo: {
			name: 'Boris',
			petAge: calc_dog_age(1.2),
			humAge: calc_human_age(1.2),
			desc: 'Boris used to be in a mob. Now he onws tattoo studio.',
		},
	},
	{
		imgSrc: dogCanIMG,
		cardInfo: {
			title1: 'Name',
		   title2: 'Type',
		   title3: 'Attributes',
		   title4: '',
		},
		imgInfo: {
			name: '"Paw-Paw" dog food',
			petAge: 'Canned Ribeye Steak',
			humAge: 'Removes hunger for 3 hours, adds sleepiness for 2 hours',
			desc: '',
		},
	},
	{
		imgSrc: prpl_sweat_cat,
		cardInfo: {
			title1: 'Name',
		   title2: 'Cat Age',
		   title3: 'Human Age',
		   title4: 'Description:',
		},
		imgInfo: {
			name: 'Clare',
			petAge: calc_dog_age(0.9),
			humAge: calc_human_age(0.9),
			desc: 'Clare is a teacher in middle school. She teaches English Literature but also boxing.',
		},
	},
	{
		imgSrc: grey_hood_dog,
		cardInfo: {
			title1: 'Name',
		   title2: 'Dog Age',
		   title3: 'Human Age',
		   title4: 'Description:',
		},
		imgInfo: {
			name: 'George',
			petAge: calc_dog_age(0.7),
			humAge: calc_human_age(0.7),
			desc: 'George barely finished high school. But he knows how to grow plants...',
		},
	},
	{
		imgSrc: boneIMG,
		cardInfo: {
			title1: 'Name',
		   title2: 'Type',
		   title3: 'Attributes',
		   title4: '',
		},
		imgInfo: {
			name: 'Bone from a garbage',
			petAge: 'Tasty treat',
			humAge: 'Gets your dog\'s attention for 4 hours',
			desc: '',
		},
	},
];

export default pets;
