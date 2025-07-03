import React from 'react';
import { Drink } from '../types/types';

interface CartProps {
	drink: Drink & { quantity: number };
	reduceCartDrink: (drink: Drink) => void;
	addToCart: (drink: Drink) => void;
}

const CartComponent: React.FC<CartProps> = ({ drink, reduceCartDrink, addToCart }) => {
	console.log(drink.name, ' is from the cart component');

	return (
		<>
			<td className='col-span-2 mt-2'>
				<p>{drink.name}</p>
			</td>
			<td className='mt-2 text-left'>
				<p>¥{drink.price}</p>
			</td>
			<td className='mt-2 text-left'>
				<p>{drink.quantity}</p>
			</td>
			<td className='mt-2 text-left'>
				<p>¥{drink.price * drink.quantity}</p>
			</td>
			<td className='flex gap-2 col-span-1'>
				<button
					onClick={() => reduceCartDrink(drink)}
					className='rounded-lg py-1 px-2 bg-white text-xl font-bold bg-orange-700/30 hover:bg-orange-900/30'>
					–
				</button>
				<button
					onClick={() => addToCart(drink)}
					className='rounded-lg py-1 px-2 bg-white text-xl font-bold bg-orange-700/30 hover:bg-orange-900/30'>
					+
				</button>
			</td>
		</>
	);
};

export default CartComponent;
