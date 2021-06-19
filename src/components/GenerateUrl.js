function GenerateUrl() {
	return (
		<div className='bg-light-200 dark:bg-dark-200 text-font-black dark:text-font-white lg:px-16 sm:px-8 rounded-t-md w-full px-4 pt-12 pb-20 text-center transition-colors duration-500'>
			<h3 className=' lg:text-4xl mb-16 text-3xl font-semibold'>Generate Link</h3>

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
	);
}
export default GenerateUrl;
