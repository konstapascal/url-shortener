import GenerateUrl from './GenerateUrl';
import ListUrls from './ListUrls';
import Footer from './Footer';

import { useEffect, useState } from 'react';

const Application = () => {
	// const [urls, setUrls] = useState([]);

	// useEffect(() => {
	// 	const quotesIds = Object.keys(localStorage).filter(entry => {
	// 		return entry.startsWith('quote_');
	// 	});
	// 	const quotesArr = quotesIds.map(id => {
	// 		return JSON.parse(localStorage.getItem(id));
	// 	});

	// 	setUrls(quotesArr);
	// }, []);

	// function deleteUrl(id) {
	// 	const newQuotes = quotes.filter(quote => quote.id !== id);
	// 	setQuotes(newQuotes);

	// 	localStorage.removeItem(`quote_${id}`);
	// }

	// function saveUrl() {
	// 	localStorage.setItem(
	// 		`quote_${quote.id}`,
	// 		JSON.stringify({ id: quote.id, content: quote.content, author: quote.author })
	// 	);
	// }

	return (
		<>
			<div className=' dark:border-gray-400 container flex flex-col max-w-4xl mx-auto my-16 transition-colors duration-500 border-2 rounded-md'>
				<GenerateUrl />
				<ListUrls />
			</div>
			<Footer />
		</>
	);
};
export default Application;
