export default function redirectToUrl(url, delay = 0) {
	return setTimeout(() => {
		url.startsWith('http')
			? window.location.replace(url)
			: window.location.replace(`http://${url}`);
	}, delay);
}
