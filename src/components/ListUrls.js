import GeneratedLinkRow from './GeneratedLinkRow';
import NoLinksWarning from './NoLinksWarning';

function ListUrls({ urls, setUrls, deleteUrl }) {
	function deleteAllUrls() {
		localStorage.setItem('urls', JSON.stringify([]));
		setUrls([]);
	}

	return (
		<div className='bg-light-200 dark:bg-dark-200 text-font-black rounded-b-md dark:text-font-white sm:px-8 lg:px-16 w-full px-4 pb-20 text-center transition-colors duration-500'>
			<h3 className='lg:text-4xl mb-16 text-3xl font-semibold'>Generated Links List</h3>

			{urls.length !== 0 ? (
				<>
					{urls.map(url => {
						return (
							<GeneratedLinkRow
								key={url.slug}
								url={url.url}
								slug={url.slug}
								deleteUrl={deleteUrl}
							/>
						);
					})}
					{urls.length > 1 && (
						<button
							onClick={() => deleteAllUrls()}
							className=' text-font-white dark:bg-red-700 px-4 py-2 font-medium transition-colors duration-500 bg-red-600 rounded-md'
							type='button'>
							Delete All
						</button>
					)}
				</>
			) : (
				<NoLinksWarning />
			)}
		</div>
	);
}
export default ListUrls;
