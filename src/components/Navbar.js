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
		<nav className='sticky bg-gray-100 dark:bg-[#1E1F1C] transition-colors duration-500 '>
			<ul className='sm:px-16 justify-evenly sm:justify-between flex items-center px-6 py-4'>
				<li className='sm:block dark:text-gray-50 hidden text-3xl font-semibold text-gray-900 transition-colors duration-500'>
					<Link to='/'>url-shortener</Link>
				</li>

				<ul className='sm:ml-auto sm:text-xl flex text-lg'>
					<li className='mr-1  bg-gray-200 dark:bg-[#272822] transition-colors duration-500 dark:text-gray-50 text-gray-900 rounded-sm '>
						<Link className=' block px-4 py-2' to='/'>
							Home
						</Link>
					</li>
					<li className=' ml-1  bg-gray-200 dark:bg-[#272822] transition-colors duration-500 dark:text-gray-50 text-gray-900  rounded-sm'>
						<Link to='/urls' className='block px-4 py-2'>
							Links
						</Link>
					</li>
				</ul>

				<li className='sm:ml-16 ml-1'>
					<div
						className=' dark:bg-gray-500 relative w-12 h-6 transition-colors duration-500 bg-gray-400 rounded-full'
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
