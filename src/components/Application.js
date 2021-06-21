import GenerateUrl from './GenerateUrl';
import ListUrls from './ListUrls';
import Footer from './Footer';

import { useEffect, useState } from 'react';
import isValidUrl from '../lib/isValidUrl';
import isValidSlug from '../lib/isValidSlug';

const Application = () => {
	const [urls, setUrls] = useState([]);
	const [message, setMessage] = useState(undefined);

	useEffect(() => {
		if (!localStorage.getItem('urls')) localStorage.setItem('urls', JSON.stringify([]));

		const existingUrls = JSON.parse(localStorage.getItem('urls'));

		setUrls(existingUrls);
	}, []);

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
		setUrls([...urls, { url, slug }]);

		// set success message if everything passes
		setMessage({ msg: 'URL has been created successfully!', type: 'success' });
	}

	function deleteUrl(slug) {
		const previousLocalStorageUrls = JSON.parse(localStorage.getItem('urls'));
		const filteredUrls = previousLocalStorageUrls.filter(entry => {
			return entry.slug !== slug;
		});

		localStorage.setItem('urls', JSON.stringify(filteredUrls));
		setUrls(filteredUrls);
	}

	return (
		<>
			<div className=' dark:border-gray-400 container flex flex-col max-w-4xl mx-auto my-16 transition-colors duration-500 border-2 rounded-md shadow-lg'>
				<GenerateUrl saveUrl={saveUrl} message={message} />
				<ListUrls urls={urls} setUrls={setUrls} deleteUrl={deleteUrl} />
			</div>
			<Footer />
		</>
	);
};

export default Application;
