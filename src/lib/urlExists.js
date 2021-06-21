export default function urlExists(url) {
	return JSON.parse(localStorage.getItem('urls')).some(entry => {
		return entry.url === url;
	});
}
