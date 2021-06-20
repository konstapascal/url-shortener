export default function slugExists(slug) {
	return JSON.parse(localStorage.getItem('urls')).some(entry => {
		return entry.slug === slug;
	});
}
