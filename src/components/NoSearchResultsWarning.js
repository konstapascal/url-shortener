function NoSearchResultsWarning({ searchTerm }) {
	return (
		<p className='text-md dark:bg-dark-100 dark:text-gray-300 bg-light-100 dark:border-gray-400 p-4 mt-10 text-lg font-medium text-center text-gray-500 break-words transition-colors duration-500 border-2 rounded-md'>
			No search results for "{searchTerm}"
		</p>
	);
}
export default NoSearchResultsWarning;
