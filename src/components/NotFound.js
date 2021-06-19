import React from 'react';

import Footer from './Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
	const slug = window.location.pathname;

	return (
		<>
			<div className=' container flex justify-center my-20'>
				<div className=' text-center'>
					<div className='mb-12'>
						<h3 className='text-4xl font-semibold'>404 - Page Not Found</h3>
						<p className='mt-2 mb-8 text-xl'>
							We are sorry but we could not find an URL with the provided slug (
							{slug.slice(1, slug.length)}).
						</p>
						<p className='text-xl'>Go ahead and create it below!</p>
					</div>
					<div className='bg-light-200 dark:bg-dark-200 dark:border-gray-400 text-font-black dark:text-font-white lg:px-16 sm:px-8 w-full px-4 py-16 text-center transition-colors duration-500 border-2 rounded-md'>
						<h3 className=' lg:text-4xl mb-10 text-3xl font-semibold'>Generate Link</h3>

						<label
							class='block text-gray-500 transition-colors duration-500 dark:text-gray-300 text-md font-semibold mb-2'
							for='url'>
							Full URL
						</label>
						<input
							class='bg-light-100 rounded-md transition-colors dark:bg-dark-100 max-w-md  border border-gray-300 dark:border-gray-500 duration-500  w-full py-2 px-3 text-font-black dark:text-font-white leading-tight 			'
							id='url'
							type='text'
						/>

						<label
							class='block mt-6 text-gray-500 transition-colors duration-500  dark:text-gray-300 text-md font-semibold mb-2'
							for='slug'>
							Slug
						</label>
						<input
							class='bg-light-100 rounded-md  dark:bg-dark-100  w-full max-w-xs py-2 border border-gray-300 dark:border-gray-500 px-3 transition-colors duration-500 text-font-black dark:text-font-white leading-tight '
							id='slug'
							type='text'
						/>

						<button
							className='text-font-white dark:bg-blue-600 block px-4 py-2 mx-auto mt-10 font-medium transition-colors duration-500 bg-blue-500 rounded-md'
							type='button'>
							Shorten URL
						</button>
					</div>
					{/* <button
						className='text-font-white dark:bg-blue-600 block px-4 py-2 mx-auto mt-10 font-medium transition-colors duration-500 bg-blue-500 rounded-md'
						type='button'>
						Go Back Home
					</button> */}

					<div className='text-font-white dark:bg-blue-600 inline-block px-4 py-2 mx-auto mt-10 font-medium transition-colors duration-500 bg-blue-500 rounded-md'>
						<Link to={'/'}>Go Back Home</Link>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default NotFound;
