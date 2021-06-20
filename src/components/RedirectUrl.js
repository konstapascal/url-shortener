import { useEffect, useState } from 'react';
import { RedirectLoading } from './RedirectLoading';

import NotFound from './NotFound';
import slugExists from '../lib/slugExists';
import redirectToUrl from '../lib/redirectToUrl';

function RedirectUrl() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const pathname = window.location.pathname;
		const slug = pathname.slice(1, pathname.length);

		if (slugExists(slug)) {
			const localUrls = JSON.parse(localStorage.getItem('urls'));
			const url = localUrls.filter(entry => {
				return entry.slug === slug;
			});

			return setTimeout(() => redirectToUrl(url[0].url), 36000000);
		}

		setIsLoading(false);
	}, []);

	return (
		<>
			<div>{isLoading ? <RedirectLoading /> : <NotFound />}</div>
		</>
	);
}

export default RedirectUrl;
