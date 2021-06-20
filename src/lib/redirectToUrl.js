export default function redirectToUrl(url, delay = 0) {
	return setTimeout(() => window.location.replace(url), delay);
}
