function GenerateUrl({ saveUrl }) {
	return (
		<div className='bg-light-200 dark:bg-dark-200 text-font-black dark:text-font-white lg:px-16 sm:px-8 rounded-t-md w-full px-4 py-16 text-center transition-colors duration-500'>
			<h3 className=' lg:text-4xl text-3xl font-semibold'>Generate Link</h3>

			<div className='mt-10'>
				<p className='mb-2'>
					Provide an <span className='font-bold'>URL</span> and a{' '}
					<span className='font-bold'>slug</span> to create a shortened version with the
					following form:
				</p>
				<p className='text-lg font-semibold'>https://sh.konstapascal.dev/[slug]</p>
			</div>

			<div className='mt-10 mb-12'>
				<label
					className='dark:text-gray-300 text-md block mb-2 font-semibold text-gray-500 transition-colors duration-500'
					htmlFor='url'>
					Full URL
				</label>
				<input
					className='bg-light-100 dark:bg-dark-100 dark:border-gray-500 text-font-black dark:text-font-white w-full max-w-md px-3 py-2 leading-tight transition-colors duration-500 border border-gray-300 rounded-md'
					id='url'
					type='text'
				/>

				<label
					className='dark:text-gray-300 text-md block mt-4 mb-2 font-semibold text-gray-500 transition-colors duration-500'
					htmlFor='slug'>
					Slug
				</label>
				<input
					className='bg-light-100 dark:bg-dark-100 dark:border-gray-500 text-font-black dark:text-font-white w-full max-w-xs px-3 py-2 leading-tight transition-colors duration-500 border border-gray-300 rounded-md'
					id='slug'
					type='text'
				/>
			</div>

			<button
				onClick={saveUrl}
				className='text-font-white dark:bg-blue-600 block px-4 py-2 mx-auto font-medium transition-colors duration-500 bg-blue-500 rounded-md'
				type='button'>
				Shorten URL
			</button>
		</div>
	);
}
export default GenerateUrl;
