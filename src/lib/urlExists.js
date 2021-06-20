export default function isUrlUnique(url) {
	return JSON.parse(localStorage.getItem('urls')).some(entry => {
		return entry.url === url;
	});
}
