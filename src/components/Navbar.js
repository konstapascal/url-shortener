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
		<nav className='bg-light-200 dark:bg-dark-200 dark:border-gray-400 sticky transition-colors duration-500 border-b-2'>
			<ul className='sm:px-16 flex items-center justify-between px-6 py-4'>
				<li className=' dark:text-font-white text-font-black lg:text-3xl text-2xl font-semibold transition-colors duration-500'>
					<Link to='/'>url-shortener</Link>
				</li>

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
