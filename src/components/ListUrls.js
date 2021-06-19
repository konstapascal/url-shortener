import GeneratedLinkRow from './GeneratedLinkRow';

function ListUrls() {
	return (
		<div className='bg-light-200 dark:bg-dark-200 text-font-black rounded-B-md dark:text-font-white sm:px-8 lg:px-16 w-full px-4 pb-12 text-center transition-colors duration-500'>
			<h3 className='lg:text-4xl mb-16 text-3xl font-semibold'>Generated Links</h3>

			{/* <p className='text-md text-center text-yellow-600'>You have no generated links!</p> */}
			<GeneratedLinkRow />
			<GeneratedLinkRow />
			<GeneratedLinkRow />
			<GeneratedLinkRow />
		</div>
	);
}
export default ListUrls;
