import React from 'react';

const Home = () => (
	<section className=' container flex justify-center mt-24'>
		<div className='bg-light-200 dark:bg-dark-200 text-font-black dark:text-font-white px-16 py-8 text-center transition-colors duration-500 shadow-md'>
			<h3 className='mb-2 text-4xl font-semibold'>Generate Link</h3>
			<p className=' text-xl'>Generate your custom links below</p>

			<div className='mt-8 mb-12 text-left'>
				<div class='mb-4'>
					<label
						class='block text-gray-500 transition-colors duration-500 dark:text-gray-300 text-md font-semibold mb-2'
						for='url'>
						URL
					</label>
					<input
						class='bg-light-100 transition-colors dark:bg-dark-100  border border-gray-300 dark:border-gray-500 duration-500 rounded-sm w-full py-2 px-3 text-gray-700 leading-tight 			'
						id='url'
						type='text'
					/>
				</div>

				<div class='mb-4'>
					<label
						class='block text-gray-500 transition-colors duration-500  dark:text-gray-300 text-md font-semibold mb-2'
						for='slug'>
						Slug
					</label>
					<input
						class='bg-light-100 dark:bg-dark-100 rounded-sm w-full py-2 border border-gray-300 dark:border-gray-500 px-3 transition-colors duration-500 text-gray-700 leading-tight '
						id='slug'
						type='text'
					/>
				</div>
			</div>
			<button
				className='text-font-black dark:text-font-white dark:bg-dark-100 px-4 py-2 font-medium transition-colors duration-500 bg-gray-200 rounded-sm'
				type='button'>
				Shorten URL
			</button>
		</div>
	</section>
);

export default Home;
