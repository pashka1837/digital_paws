/* eslint-disable radix */
/* eslint-disable @typescript-eslint/naming-convention */
import grey_hood_dog from '../assets/images/pets/grey_hood_dog.webp';
import pnk_shds_cat from '../assets/images/pets/pnk_shds_cat.webp';
import prpl_sweat_cat from '../assets/images/pets/prpl_sweat_cat.webp';
import bl_hood_cat from '../assets/images/pets//bl_hood_cat.webp';
import blck_jack_dog from '../assets/images/pets/blck_jack_dog.webp';

export type PetInfo = {
	name: string;
	dogAge: string;
	humAge: string;
	desc: string;
	petType: string;
};

export type PetObj = {
	imgSrc: string;
	info: PetInfo;
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
		info: {
			name: 'Kale',
			petType: 'Cat',
			dogAge: calc_dog_age(0.51),
			humAge: calc_human_age(0.51),
			desc: 'Kale is cool. He loves to play PubG, dresses well but shy.',
		},
	},
	{
		imgSrc: pnk_shds_cat,
		info: {
			name: 'Kate',
			petType: 'Cat',
			dogAge: calc_dog_age(0.45),
			humAge: calc_human_age(0.45),
			desc: 'Kate is barbie cat. She loves fashion and pink color. Very much.',
		},
	},
	{
		imgSrc: blck_jack_dog,
		info: {
			name: 'Boris',
			petType: 'Dog',
			dogAge: calc_dog_age(1.2),
			humAge: calc_human_age(1.2),
			desc: 'Boris used to be in a mob. Now he onws tattoo studio.',
		},
	},
	{
		imgSrc: prpl_sweat_cat,
		info: {
			name: 'Clare',
			petType: 'Cat',
			dogAge: calc_dog_age(0.9),
			humAge: calc_human_age(0.9),
			desc: 'Clare is a teacher in middle school. She teaches English Literature but also boxing.',
		},
	},
	{
		imgSrc: grey_hood_dog,
		info: {
			name: 'George',
			petType: 'Dog',
			dogAge: calc_dog_age(0.7),
			humAge: calc_human_age(0.7),
			desc: 'George barely finished high school. But he knows how to grow plants...',
		},
	},
];

export default pets;
