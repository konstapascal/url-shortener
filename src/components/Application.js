import GenerateUrl from './GenerateUrl';
import ListUrls from './ListUrls';
import Footer from './Footer';

import { useEffect, useState } from 'react';
import urlExists from '../lib/urlExists';
import slugExists from '../lib/slugExists';
import isUrl from '../lib/isUrl';

const Application = () => {
	const [urls, setUrls] = useState([]);
	const [message, setMessage] = useState(null);

	useEffect(() => {
		if (!localStorage.getItem('urls')) localStorage.setItem('urls', JSON.stringify([]));

		const existingUrls = JSON.parse(localStorage.getItem('urls'));

		setUrls(existingUrls);
	}, []);

	function saveUrl() {
		const url = document.querySelector('#url').value;
		const slug = document.querySelector('#slug').value;

		// if fields are empty
		if (url === '' && slug === '')
			return setMessage({ msg: 'Both fields are required!', type: 'warning' });

		// check if url empty or exists
		if (!isUrl(url)) return setMessage({ msg: 'Not a valid URL!', type: 'warning' });
		if (urlExists(url)) return setMessage({ msg: 'This URL already exists!', type: 'warning' });

		// check if slug is empty or exists
		if (slug === '') return setMessage({ msg: 'The slug cannot be empty!', type: 'warning' });
		if (slugExists(slug))
			return setMessage({ msg: 'An URL with this slug already exists!', type: 'warning' });

		const previousLocalStorageUrls = JSON.parse(localStorage.getItem('urls'));

		localStorage.setItem('urls', JSON.stringify([...previousLocalStorageUrls, { url, slug }]));
		setUrls([...urls, { url, slug }]);

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
