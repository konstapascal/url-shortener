import { useEffect } from 'react';
import toggleModal from '../lib/toggleModal';
import GeneratedLinkRow from './GeneratedLinkRow';
import Modal from './Modal';
import NoLinksWarning from './NoLinksWarning';
import UrlsSearchBar from './UrlsSearchBar';

function ListUrls({ urls, deleteUrl, deleteAllUrls, exportUrls }) {
	useEffect(() => {
		window.addEventListener('click', handleCloseModal);

		function handleCloseModal(e) {
			if (e.target.classList.contains('modal-bg')) return toggleModal();
		}

		return () => window.removeEventListener('click', handleCloseModal);
	});

	return (
		<div className='bg-light-200 dark:bg-dark-200 text-font-black rounded-b-md dark:text-font-white sm:px-8 lg:px-16 lg:pb-16 w-full px-4 pt-4 pb-12 text-center transition-colors duration-500'>
			<h3 className='lg:text-4xl mb-16 text-3xl font-semibold'>Generated URLs List</h3>

			{urls.length !== 0 ? (
				<>
					<UrlsSearchBar />

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

					<div className='md:justify-between flex justify-around'>
						<button
							onClick={() => exportUrls()}
							className='text-font-white dark:bg-blue-600 px-4 py-2 font-medium transition-colors duration-500 bg-blue-500 rounded-md shadow-md'
							type='button'>
							Export All
						</button>
						<button
							onClick={() => toggleModal()}
							className=' text-font-white dark:bg-red-700 px-4 py-2 font-medium transition-colors duration-500 bg-red-600 rounded-md shadow-md'
							type='button'>
							Delete All
						</button>
					</div>
				</>
			) : (
				<NoLinksWarning />
			)}
			<Modal deleteAllUrls={deleteAllUrls} />
		</div>
	);
}
export default ListUrls;
