import GeneratedLinkRow from './GeneratedLinkRow';
import NoLinksWarning from './NoLinksWarning';

function ListUrls({ urls, setUrls, deleteUrl }) {
	function deleteAllUrls() {
		localStorage.setItem('urls', JSON.stringify([]));
		setUrls([]);
	}

	function exportUrls() {
		const data = localStorage.getItem('urls');
		console.log(data);
	}

	return (
		<div className='bg-light-200 dark:bg-dark-200 text-font-black rounded-b-md dark:text-font-white sm:px-8 lg:px-16 w-full px-4 pb-16 text-center transition-colors duration-500'>
			<h3 className='lg:text-4xl mb-14 mt-12 text-3xl font-semibold'>Generated URLs List</h3>

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

					<div className='flex justify-between'>
						<button
							onClick={exportUrls}
							className='text-font-white dark:bg-blue-600 px-4 py-2 font-medium transition-colors duration-500 bg-blue-500 rounded-md shadow-md'
							type='button'>
							Export All
						</button>
						<button
							onClick={() => deleteAllUrls()}
							className=' text-font-white dark:bg-red-700 px-4 py-2 font-medium transition-colors duration-500 bg-red-600 rounded-md shadow-md'
							type='button'>
							Delete All
						</button>
					</div>
				</>
			) : (
				<NoLinksWarning />
			)}
		</div>
	);
}
export default ListUrls;
