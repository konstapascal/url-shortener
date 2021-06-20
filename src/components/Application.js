import GenerateUrl from './GenerateUrl';
import ListUrls from './ListUrls';
import Footer from './Footer';

import { useEffect, useState } from 'react';
import urlExists from '../lib/urlExists';
import slugExists from '../lib/slugExists';

const Application = () => {
	const [urls, setUrls] = useState([]);

	useEffect(() => {
		if (!localStorage.getItem('urls')) localStorage.setItem('urls', JSON.stringify([]));

		const existingUrls = JSON.parse(localStorage.getItem('urls'));

		setUrls(existingUrls);
	}, []);

	function saveUrl() {
		const url = document.querySelector('#url').value;
		const slug = document.querySelector('#slug').value;

		if (urlExists(url)) return console.log('url exists');
		if (slugExists(slug)) return console.log('slug exists');

		const previousLocalStorageUrls = JSON.parse(localStorage.getItem('urls'));

		localStorage.setItem('urls', JSON.stringify([...previousLocalStorageUrls, { url, slug }]));
		setUrls([...urls, { url, slug }]);
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
			<div className=' dark:border-gray-400 container flex flex-col max-w-4xl mx-auto my-16 transition-colors duration-500 border-2 rounded-md'>
				<GenerateUrl saveUrl={saveUrl} />
				<ListUrls urls={urls} setUrls={setUrls} deleteUrl={deleteUrl} />
			</div>
			<Footer />
		</>
	);
};

export default Application;
