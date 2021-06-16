import React from 'react';

import { Link } from 'react-router-dom';

function handleClick() {
	const html = document.querySelector('html');
	const toggle = document.querySelector('#toggle');

	toggle.classList.toggle('left-1');
	toggle.classList.toggle('left-7');

	html.classList.toggle('dark');
}

const Navbar = () => {
	return (
		<nav className='sticky bg-gray-100'>
			<ul className='flex items-center px-16 py-4'>
				<li className='text-3xl font-semibold'>
					<Link to='/'>url-shortener</Link>
				</li>

				<ul className='flex ml-auto text-lg'>
					<li className='hover:bg-gray-300 mr-2 transition-all bg-gray-200 rounded-sm'>
						<Link className=' block px-4 py-2' to='/'>
							Home
						</Link>
					</li>
					<li className='hover:bg-gray-300 ml-2 transition-all bg-gray-200 rounded-sm'>
						<Link to='/urls' className='block px-4 py-2'>
							Links
						</Link>
					</li>
				</ul>

				<li className='ml-16'>
					<div className=' relative w-12 h-6 bg-gray-400 rounded-full' onClick={handleClick}>
						<span
							id='toggle'
							className='inset-y-1 left-1 absolute w-4 h-4 transition-all bg-white rounded-full'
						/>
					</div>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
