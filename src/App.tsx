import React from 'react';
import logo from './logo.svg';
import DrinkItems from './drink-items/DrinkItems';
import { drinks } from './data/mock-drinks';

function App() {
	return (
		<div className='grid grid-cols-4 font-serif'>
			<div className='col-span-3 flex flex-col'>
				<h1 className='uppercase text-center text-2xl border-b shadow-md py-2 text-orange-900 sticky'>
					Cafe Ordering System
				</h1>
				<div className='flex flex-wrap gap-5 m-4 justify-center'>
					{drinks.map((drink) => {
						return (
							<DrinkItems
								id={drink.id}
								img={drink.img}
								name={drink.name}
								description={drink.description}
								price={drink.price}
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
							<tr className='grid grid-cols-6'>
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
								<td className='flex gap-4 col-span-1'>
									<button>-</button>
									<button>+</button>
								</td>
							</tr>
							<tr className='grid grid-cols-6'>
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
								<td className='flex gap-4 col-span-1'>
									<button>-</button>
									<button>+</button>
								</td>
							</tr>
						</table>
					</div>
					<button className='bg-blue-500 hover:bg-blue-600 text-white w-full rounded-md py-3 text-xl font-bold uppercase mb-6'>
						Checkout
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
