function GeneratedLinkRow() {
	return (
		<div className=' md:flex-row last:mb-0 flex flex-col items-center mb-12 text-left'>
			<div className=' break-all'>
				<div className='mb-4'>
					<p className=' text-xl font-semibold'>Full URL</p>
					<a
						className='hover:text-blue-500 dark:hover:text-blue-400 hover:underline block'
						href='https://classic.wowhead.com/guides/wow-classic-fire-mage-leveling-talent-build-1-60'>
						https://classic.wowhead.com/guides/wow-classic-fire-mage-leveling-talent-build-1-60https://classic.wowhead.com/guides/wow-classic-fire-mage-leveling-talent-build-1-60https://classic.wowhead.com/guides/wow-classic-fire-mage-leveling-talent-build-1-60
					</a>
				</div>
				<div>
					<p className='text-xl font-semibold'>Shortened URL</p>
					<a
						className='hover:text-blue-500 dark:hover:text-blue-400 hover:underline block'
						href='https://classic.wowhead.com/guides/wow-classic-fire-mage-leveling-talent-build-1-60'>
						sh.konstapascal.dev/unique-word
					</a>
				</div>
			</div>
			<button
				className=' text-font-white dark:bg-red-700 md:ml-12 w-36 md:w-96 md:mt-0 px-4 py-2 mt-8 font-medium transition-colors duration-500 bg-red-600 rounded-md'
				type='button'>
				Delete URL
			</button>
		</div>
	);
}

export default GeneratedLinkRow;
