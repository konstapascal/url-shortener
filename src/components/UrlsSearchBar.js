function UrlsSearchBar({ setSearchTerm, searchTerm }) {
	return (
		<input
			className='bg-light-100 dark:bg-dark-100 dark:border-gray-500 text-font-black dark:text-font-white w-full px-3 py-2 leading-tight transition-colors duration-500 border border-gray-300 rounded-md'
			type='text'
			placeholder='Search URL'
			id='search'
			value={searchTerm}
			onChange={e => setSearchTerm(e.target.value)}
		/>
	);
}
export default UrlsSearchBar;
