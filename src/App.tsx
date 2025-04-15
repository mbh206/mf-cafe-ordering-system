import React, { useState } from 'react';
import logo from './logo.svg';
import DrinkItems from './drink-items/DrinkItems';
import CartComponent from './cart/CartComponent';
import { drinks } from './data/mock-drinks';
import { Drink } from './types/types';
import { Cart } from './types/types';

const App: React.FC = () => {
	const [currentCart, setCurrentCart] = useState<Cart>({
		drinks: [],
		total: 0,
	});
	const reduceCartDrink = (drink: Drink) => {
		let updatedCart;
		const existingDrink = currentCart.drinks.find(
			(item) => item.id === drink.id
		);
		if (existingDrink?.quantity !== 1) {
			updatedCart = currentCart.drinks.map((drink) =>
				drink.id === existingDrink?.id
					? { ...drink, quantity: drink.quantity - 1 }
					: drink
			);
			console.log(`decreasing the ${existingDrink?.name} quantity in the cart`);
		} else {
			updatedCart = currentCart.drinks.filter(
				(drink) => drink.id !== existingDrink.id
			);
			console.log(`removed ${existingDrink.name} to cart`);
		}
		const updatedTotal = updatedCart.reduce(
			(sum, drink) => sum + drink.price * drink.quantity,
			0
		);

		setCurrentCart({ drinks: updatedCart, total: updatedTotal });
		console.log(`The new cart total is:`, updatedTotal);
	};

	const addToCart = (drink: Drink) => {
		let newCart;
		const existingDrink = currentCart.drinks.find(
			(item) => item.id === drink.id
		);
		if (existingDrink) {
			newCart = currentCart.drinks.map((drink) =>
				drink.id === existingDrink.id
					? { ...drink, quantity: drink.quantity + 1 }
					: drink
			);
			console.log(`Increasing the ${existingDrink.name} quantity in the cart`);
			console.log(newCart);
		} else {
			const addNewDrink = {
				...drink,
				quantity: 1,
			};
			newCart = [...currentCart.drinks, addNewDrink];
			console.log(`added ${addNewDrink.name} to cart`);
		}
		const updatedTotal = newCart.reduce(
			(sum, drink) => sum + drink.price * drink.quantity,
			0
		);

		setCurrentCart({ drinks: newCart, total: updatedTotal });
		console.log(`The new cart total is:`, updatedTotal);
	};

	const orderCheckout = () => {
		alert('Processing your order. Please wait...');
	};

	return (
		<div className='grid grid-cols-4 font-serif'>
			<div className='col-span-3 flex flex-col'>
				<h1 className='uppercase text-center text-2xl border-b shadow-md py-2 bg-white/50 backdrop-blur-md text-orange-900 fixed w-[75%]'>
					Cafe Ordering System
				</h1>
				<div className='flex flex-wrap gap-5 m-4 justify-center pt-12'>
					{drinks.map((drink) => {
						return (
							<DrinkItems
								key={drink.id}
								id={drink.id}
								img={drink.img}
								name={drink.name}
								description={drink.description}
								price={drink.price}
								addToCart={addToCart}
							/>
						);
					})}
				</div>
			</div>
			<div className='col-span-1'>
				<div className='flex flex-col h-screen bg-gray-100/80 px-2 fixed w-[25%] right-0'>
					<img
						src={logo}
						className='w-[180px] h-[120px] object-cover m-auto'
						alt='Cafe Ordering System'
					/>
					<hr className='my-4 border-xs border-orange-900/10' />
					<div className='h-full'>
						<h3 className='text-center pb-4'>Cart</h3>
						<table className='w-full border-t border-orange-900/10'>
							<thead>
								<tr className='grid grid-cols-7 border-b border-orange-900/10 text-orange-600/60 text-xs'>
									<td className='col-span-2'>
										<p>Name</p>
									</td>
									<td>
										<p>Price</p>
									</td>
									<td>
										<p>Qty</p>
									</td>
									<td>
										<p>Total</p>
									</td>
									<td className='flex gap-4 col-span-1'></td>
								</tr>
							</thead>
							<thead>
								<tr className='grid grid-cols-6 py-3 border-b border-orange-900/10 text-sm'>
									{currentCart.drinks.map((drink) => {
										return (
											<CartComponent
												key={drink.id}
												drink={drink}
												reduceCartDrink={reduceCartDrink}
											/>
										);
									})}
								</tr>
								<tr className='grid grid-cols-5 border-b border-orange-900/10 text-orange-800'>
									<td className='col-span-3 text-right mr-4'>Total:</td>
									<td className='col-span-2'>{currentCart.total}</td>
								</tr>
							</thead>
						</table>
					</div>
					{currentCart.drinks.length > 0 ? (
						<button
							onClick={orderCheckout}
							className='bg-blue-500 hover:bg-blue-600 text-white w-full rounded-md py-3 text-xl font-bold uppercase mb-6'>
							Checkout
						</button>
					) : (
						<button className='bg-blue-300 text-white w-full rounded-md py-3 text-xl font-bold uppercase mb-6'>
							Checkout
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default App;
