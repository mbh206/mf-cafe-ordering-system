export interface Drink {
	id: number;
	name: string;
	description: string;
	img: string;
	price: number;
}

export interface Cart {
	drinks: Array<Drink & { quantity: number }>;
	total: number;
}
