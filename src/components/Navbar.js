import React from 'react';

import { Link } from 'react-router-dom';
import moveToggle from '../lib/moveToggle';

function handleClick() {
	moveToggle();
	document.documentElement.classList.toggle('dark');
	localStorage.theme === 'dark' ? (localStorage.theme = 'light') : (localStorage.theme = 'dark');
}

const Navbar = () => {
	return (
		<nav className='bg-light-200 dark:bg-dark-200 sticky transition-colors duration-500'>
			<ul className='sm:px-16 justify-evenly sm:justify-between flex items-center px-6 py-4'>
				<li className='sm:block dark:text-font-white text-font-black hidden text-3xl font-semibold transition-colors duration-500'>
					<Link to='/'>url-shortener</Link>
				</li>

				<ul className='sm:ml-auto sm:text-xl flex text-lg'>
					<li className='dark:bg-dark-100 dark:text-font-white text-font-black mr-2 transition-colors duration-500 bg-gray-200 rounded-sm'>
						<Link className=' block px-4 py-2' to='/'>
							Home
						</Link>
					</li>
					<li className='dark:bg-dark-100 dark:text-font-white text-font-black ml-2 transition-colors duration-500 bg-gray-200 rounded-sm'>
						<Link className=' block px-4 py-2' to='/urls'>
							Links
						</Link>
					</li>
				</ul>

				<li className='sm:ml-16 ml-1'>
					<div
						className=' dark:bg-gray-500 relative w-12 h-6 transition-colors duration-500 bg-gray-300 rounded-full cursor-pointer'
						onClick={handleClick}>
						<span
							id='toggle'
							className='inset-y-1 left-1 transform-gpu bg-light-100 absolute w-4 h-4 transition-transform rounded-full'
						/>
					</div>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
