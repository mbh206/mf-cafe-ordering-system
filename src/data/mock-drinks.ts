import { Drink } from '../types/types';
import latte from '../images/latte.jpg';
import chai from '../images/chai.jpg';
import cocoa from '../images/cocoa.jpg';
import coffee from '../images/coffee.jpg';
import espresso from '../images/espresso.jpg';
import matcha from '../images/matcha.jpg';
import matchalatte from '../images/matchalatte.jpg';
import mocha from '../images/mocha.jpg';
import tea from '../images/tea.jpg';

export const drinks: Drink[] = [
	{
		id: '1',
		name: 'Latte',
		description: 'Espresso shot with steamed milk',
		img: `${latte}`,
		price: 400,
	},
	{
		id: '2',
		name: 'Chai Latte',
		description: 'Chai tea with steamed milk',
		img: `${chai}`,
		price: 450,
	},
	{
		id: '3',
		name: 'Cocoa',
		description: 'Real Chocolate syrup, steamed milk, and marshmallows',
		img: `${cocoa}`,
		price: 300,
	},
	{
		id: '4',
		name: 'Coffee',
		description: 'Hand-drip medium roast coffee',
		img: `${coffee}`,
		price: 300,
	},
	{
		id: '5',
		name: 'espresso',
		description: 'Single shot of espresso',
		img: `${espresso}`,
		price: 300,
	},
	{
		id: '6',
		name: 'matcha',
		description: 'Powdered green tea whisked in hot water',
		img: `${matcha}`,
		price: 500,
	},
	{
		id: '7',
		name: 'matchalatte',
		description: 'Powdered green tea whisked with steamed milk',
		img: `${matchalatte}`,
		price: 550,
	},
	{
		id: '8',
		name: 'mocha',
		description: 'Espresso shot with steamed milk and chocolate syrup',
		img: `${mocha}`,
		price: 500,
	},
	{
		id: '9',
		name: 'tea',
		description: 'Loose leaf tea',
		img: `${tea}`,
		price: 350,
	},
];
