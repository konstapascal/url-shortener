import { SuccessBox, ErrorBox } from './MessageBox';

function GenerateUrl({ saveUrl, importUrls, message, importMessage }) {
	return (
		<div className='bg-light-200 dark:bg-dark-200 text-font-black dark:text-font-white lg:px-16 sm:px-8 rounded-t-md w-full px-4 pt-16 text-center transition-colors duration-500'>
			<h3 className=' lg:text-4xl text-3xl font-semibold'>Generate URLs</h3>
			<div className=' mt-10 mb-6'>
				<p className=''>
					Provide an <span className='font-bold'>URL</span> and a{' '}
					<span className='font-bold'>slug</span> to create a shortened version with the
					following form:
				</p>
				<p className='my-4 text-xl font-semibold'>https://sh.konstapascal.dev/[slug]</p>
			</div>

			<div className='my-10'>
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
				<button
					onClick={saveUrl}
					className='text-font-white dark:bg-blue-600 transform-gpu block px-4 py-2 mx-auto mt-8 font-medium transition-colors duration-500 bg-blue-500 rounded-md shadow-md'
					type='button'>
					Shorten URL
				</button>
			</div>

			{message && message.type === 'success' ? (
				<SuccessBox message={message} />
			) : (
				<ErrorBox message={message} />
			)}

			<div className='my-12'>
				<p className='mb-8'>
					You may also <span className='font-bold'>import URLs</span> generated and exported
					from before:
				</p>
				<button
					onClick={() => importUrls()}
					className='text-font-white dark:bg-blue-600 px-4 py-2 font-medium transition-colors duration-500 bg-blue-500 rounded-md shadow-md'
					type='button'>
					Import URLs
				</button>
			</div>

			{importMessage && importMessage.type === 'success' ? (
				<SuccessBox message={importMessage} />
			) : (
				<ErrorBox message={importMessage} />
			)}
		</div>
	);
}
export default GenerateUrl;
