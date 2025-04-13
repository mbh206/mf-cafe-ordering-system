import React from 'react';
import logo from './logo.svg';
import latte from './images/latte.jpg';

function App() {
	return (
		<div className='grid grid-cols-4 font-serif'>
			<div className='col-span-3'>
				<h1 className='uppercase text-center text-2xl border-b shadow-md py-2 text-orange-900 sticky'>
					Cafe Ordering System
				</h1>
				<div className='m-4'>
					<div className='p-1 bg-gray-100/80 rounded-md shadow-md hover:shadow-lg w-64 h-88 text-gray-600'>
						<img
							className='w-full h-64 object-cover rounded-t-md'
							src={latte}
							alt=''
						/>
						<div className='relative py-2'>
							<p className='uppercase text-center'>Drink Name</p>
							<p className='absolute right-0 top-0 text-gray-400'>Price</p>
						</div>
						<p>Drink description</p>
						<button className='w-full uppercase bg-blue-500 text-white rounded-md hover:bg-blue-600 py-2 mt-5'>
							Add To Cart
						</button>
					</div>
				</div>
			</div>
			<div className='flex flex-col h-screen bg-gray-100/80 px-2 sticky'>
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
	);
}

export default App;
