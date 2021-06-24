import { useState } from 'react';
import isValidSlug from '../lib/isValidSlug';
import isValidUrl from '../lib/isValidUrl';
import { SuccessBox, ErrorBox } from './MessageBox';

export const GenerateUrlNotFoundPage = () => {
	const [message, setMessage] = useState(undefined);

	function saveUrl() {
		const url = document.querySelector('#url').value;
		const slug = document.querySelector('#slug').value;

		const isValidUrlReturnValue = isValidUrl(url);
		const isValidSlugReturnValue = isValidSlug(slug);

		// check if both inputs are empty
		if (url === '' && slug === '')
			return setMessage({ msg: 'Both fields are required!', type: 'warning' });

		// check for valid url and slug input
		if (isValidUrlReturnValue !== true) return setMessage(isValidUrlReturnValue);
		if (isValidSlugReturnValue !== true) return setMessage(isValidSlugReturnValue);

		const previousLocalStorageUrls = JSON.parse(localStorage.getItem('urls'));

		localStorage.setItem('urls', JSON.stringify([...previousLocalStorageUrls, { url, slug }]));

		setMessage({ msg: 'URL has been created successfully!', type: 'success' });
	}

	return (
		<div className='bg-light-200 dark:bg-dark-200 dark:border-gray-400 text-font-black dark:text-font-white lg:px-16 sm:px-8 w-full px-4 py-16 text-center transition-colors duration-500 border-2 rounded-md'>
			<h3 className=' lg:text-4xl mb-10 text-3xl font-semibold'>Generate Link</h3>

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
				className='text-font-white dark:bg-blue-600 block px-4 py-2 mx-auto mt-10 font-medium transition-colors duration-500 bg-blue-500 rounded-md'
				type='button'>
				Shorten URL
			</button>
			{message && message.type === 'success' ? (
				<SuccessBox message={message} />
			) : (
				<ErrorBox message={message} />
			)}
		</div>
	);
};
