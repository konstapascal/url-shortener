import GenerateUrl from './GenerateUrl';
import ListUrls from './ListUrls';
import Footer from './Footer';

import { useEffect, useState } from 'react';
import isValidUrl from '../lib/isValidUrl';
import isValidSlug from '../lib/isValidSlug';
import clearInputValues from '../lib/clearInputValues';

import { saveAs } from 'file-saver';
import isValidFile from '../lib/isValidFile';

const Application = () => {
	const [urls, setUrls] = useState([]);
	const [message, setMessage] = useState(undefined);
	const [importMessage, setImportMessage] = useState(undefined);

	useEffect(() => {
		if (!localStorage.getItem('urls')) localStorage.setItem('urls', JSON.stringify([]));

		const existingUrls = JSON.parse(localStorage.getItem('urls'));

		setUrls(existingUrls);
	}, []);

	function saveUrl() {
		const urlField = document.querySelector('#url');
		const slugField = document.querySelector('#slug');

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

		// set success message, clear fields, if all passes
		setMessage({ msg: 'URL has been created successfully!', type: 'success' });
		clearInputValues(urlField, slugField);
	}

	function deleteUrl(slug) {
		const previousLocalStorageUrls = JSON.parse(localStorage.getItem('urls'));
		const filteredUrls = previousLocalStorageUrls.filter(entry => {
			return entry.slug !== slug;
		});

		localStorage.setItem('urls', JSON.stringify(filteredUrls));
		setUrls(filteredUrls);
	}

	function deleteAllUrls() {
		localStorage.setItem('urls', JSON.stringify([]));
		setUrls([]);
	}

	function exportUrls() {
		const data = localStorage.getItem('urls');

		const blob = new Blob([data], { type: 'text/plain;charset=utf-8' });
		saveAs(blob, 'url-shortener-export.txt');
	}

	async function importUrls(e) {
		const file = e.target.files[0];

		const content = await file.text();
		const parsedContent = JSON.parse(content);

		if (!isValidFile(parsedContent))
			return setImportMessage({
				msg: 'Contents of the import file are not valid!',
				type: 'Error'
			});

		localStorage.setItem('urls', content);
		setUrls(parsedContent);

		setImportMessage({ msg: 'URLs have been imported successfully!', type: 'success' });
	}

	return (
		<>
			<div className=' dark:border-gray-400 container flex flex-col max-w-4xl mx-auto my-16 transition-colors duration-500 border-2 rounded-md shadow-lg'>
				<GenerateUrl
					saveUrl={saveUrl}
					importUrls={importUrls}
					message={message}
					importMessage={importMessage}
				/>
				<ListUrls
					urls={urls}
					deleteUrl={deleteUrl}
					deleteAllUrls={deleteAllUrls}
					exportUrls={exportUrls}
				/>
			</div>
			<Footer />
		</>
	);
};

export default Application;
