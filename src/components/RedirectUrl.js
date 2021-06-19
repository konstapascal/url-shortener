import { useEffect, useState } from 'react';
// import { RedirectLoading } from './RedirectLoading';

import NotFound from './NotFound';

function RedirectUrl() {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		const location = window.location;
		console.log(location.pathname);

		// location.assign('https://duckduckgo.com/');
		setIsLoading(false);
	}, []);

	return (
		<div>{isLoading ? <p>Redirecting</p> : <NotFound />}</div>
		// <RedirectLoading />
	);
}

export default RedirectUrl;
