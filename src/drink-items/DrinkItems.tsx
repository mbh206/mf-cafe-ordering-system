import React from 'react';
import { Drink } from '../types/types';

const DrinkItems: React.FC<Drink> = ({ img, name, description, price }) => {
	return (
		<>
			<div className='flex flex-col p-1 bg-gray-100/80 rounded-md shadow-md hover:shadow-lg w-64 h-88 text-gray-600'>
				<img
					className='w-full h-64 object-cover rounded-t-md'
					src={img}
					alt={name}
				/>
				<div className='relative py-2'>
					<p className='uppercase text-center'>{name}</p>
					<p className='absolute right-0 top-0 text-gray-400'>{price}</p>
				</div>
				<p className='flex-grow'>{description}</p>
				<button className='w-full uppercase bg-blue-500 text-white rounded-md hover:bg-blue-600 py-2 mt-5'>
					Add To Cart
				</button>
			</div>
		</>
	);
};

export default DrinkItems;
