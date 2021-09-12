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
		<nav className='bg-light-200 dark:bg-dark-200  sticky flex items-center h-24 transition-colors duration-500'>
			<ul className=' container flex items-center justify-between w-11/12 max-w-4xl'>
				<li className=' dark:text-font-white text-font-black lg:text-3xl text-2xl font-semibold transition-colors duration-500'>
					<Link to='/' className=' flex items-center'>
						<svg
							aria-hidden='true'
							focusable='false'
							data-prefix='fas'
							data-icon='cut'
							className='svg-inline--fa fa-cut fa-w-14 mr-3'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 448 512'
							width='40px'
							height='40px'>
							<path
								fill='currentColor'
								d='M278.06 256L444.48 89.57c4.69-4.69 4.69-12.29 0-16.97-32.8-32.8-85.99-32.8-118.79 0L210.18 188.12l-24.86-24.86c4.31-10.92 6.68-22.81 6.68-35.26 0-53.02-42.98-96-96-96S0 74.98 0 128s42.98 96 96 96c4.54 0 8.99-.32 13.36-.93L142.29 256l-32.93 32.93c-4.37-.61-8.83-.93-13.36-.93-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-12.45-2.37-24.34-6.68-35.26l24.86-24.86L325.69 439.4c32.8 32.8 85.99 32.8 118.79 0 4.69-4.68 4.69-12.28 0-16.97L278.06 256zM96 160c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32zm0 256c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32z'></path>
						</svg>
						url-shortener
					</Link>
				</li>

				<li className=''>
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
