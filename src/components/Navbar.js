import React from 'react';

import { Link } from 'react-router-dom';
import moveToggle from '../lib/moveToggle';

function handleClick() {
	moveToggle();

	const html = document.querySelector('html');
	html.classList.toggle('dark');

	localStorage.theme === 'dark' ? (localStorage.theme = 'light') : (localStorage.theme = 'dark');
}

const Navbar = () => {
	return (
		<nav className='sticky bg-gray-100 dark:bg-[#1E1F1C]'>
			<ul className='sm:px-16 flex items-center justify-between px-6 py-4'>
				<li className='sm:block hidden text-3xl font-semibold'>
					<Link to='/'>url-shortener</Link>
				</li>

				<ul className='sm:ml-auto flex text-lg'>
					<li className='hover:bg-gray-300 mr-1  bg-gray-200 dark:bg-[#272822] rounded-sm'>
						<Link className=' block px-4 py-2' to='/'>
							Home
						</Link>
					</li>
					<li className='hover:bg-gray-300 ml-1  bg-gray-200 dark:bg-[#272822] rounded-sm'>
						<Link to='/urls' className='block px-4 py-2'>
							Links
						</Link>
					</li>
				</ul>

				<li className='sm:ml-16 ml-1'>
					<div
						className=' dark:bg-gray-500 relative w-12 h-6 bg-gray-400 rounded-full'
						onClick={handleClick}>
						<span
							id='toggle'
							className='inset-y-1 left-1 absolute w-4 h-4 bg-white rounded-full'
						/>
					</div>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
