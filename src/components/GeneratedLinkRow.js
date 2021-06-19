function GeneratedLinkRow() {
	return (
		<div className=' md:flex-row last:mb-0 flex flex-col items-center mb-12 text-left'>
			<div className=' break-all'>
				<div className='mb-4'>
					<h3 className=' text-xl font-semibold'>Full URL</h3>
					<p className='dark:text-blue-400 hover:underline text-blue-500'>
						https://classic.wowhead.com/guides/wow-classic-fire-mage-leveling-talent-build-1-60
					</p>
				</div>
				<div>
					<h3 className='text-xl font-semibold'>Shortened URL</h3>
					<p className='dark:text-blue-400 hover:underline text-blue-500'>
						sh.konstapascal.dev/fire
					</p>
				</div>
			</div>
			<div className='md:ml-12 md:mt-0 md:flex-col flex mt-8'>
				<a
					className='text-font-white dark:bg-blue-600 md:mr-0 md:mb-1 px-4 py-2 mr-1 font-medium text-center transition-colors duration-500 bg-blue-500 rounded-md'
					href='https://classic.wowhead.com/guides/wow-classic-fire-mage-leveling-talent-build-1-60'>
					Open
				</a>
				<button
					className=' text-font-white dark:bg-red-700 md:ml-0 md:mt-1 px-4 py-2 ml-1 font-medium transition-colors duration-500 bg-red-600 rounded-md'
					type='button'>
					Delete
				</button>
			</div>
		</div>
	);
}
export default GeneratedLinkRow;
