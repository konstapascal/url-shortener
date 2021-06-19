import GeneratedLinkRow from './GeneratedLinkRow';
// import NoLinksWarning from './NoLinksWarning';

function ListUrls() {
	return (
		<div className='bg-light-200 dark:bg-dark-200 text-font-black rounded-b-md dark:text-font-white sm:px-8 lg:px-16 w-full px-4 pb-20 text-center transition-colors duration-500'>
			<h3 className='lg:text-4xl mb-16 text-3xl font-semibold'>Generated Links</h3>

			{/* <NoLinksWarning /> */}

			<GeneratedLinkRow />
			<GeneratedLinkRow />
			<GeneratedLinkRow />
			<GeneratedLinkRow />
		</div>
	);
}
export default ListUrls;
