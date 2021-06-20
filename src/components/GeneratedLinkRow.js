function GeneratedLinkRow({ url, slug, deleteUrl }) {
	return (
		<div className=' md:flex-row last:mb-0 md:justify-between flex flex-col items-center mb-12 text-left'>
			<div className=' break-all'>
				<div className='mb-4'>
					<h3 className=' text-xl font-semibold'>Full URL</h3>
					<p className='dark:text-blue-400 hover:underline text-blue-500'>
						<a href={url}>{url}</a>
					</p>
				</div>
				<div>
					<h3 className='text-xl font-semibold'>Shortened URL</h3>
					<p className='dark:text-blue-400 hover:underline text-blue-500'>
						<a href={`/${slug}`}>{`sh.konstapascal.dev/${slug}`}</a>
					</p>
				</div>
			</div>
			<div className='md:ml-12 md:mt-0 md:flex-col flex mt-8'>
				<a
					className='text-font-white dark:bg-blue-600 md:mr-0 md:mb-1 px-4 py-2 mr-1 font-medium text-center transition-colors duration-500 bg-blue-500 rounded-md'
					href={url}>
					Open
				</a>
				<button
					onClick={() => deleteUrl(slug)}
					className=' text-font-white dark:bg-red-700 md:ml-0 md:mt-1 px-4 py-2 ml-1 font-medium transition-colors duration-500 bg-red-600 rounded-md'
					type='button'>
					Delete
				</button>
			</div>
		</div>
	);
}
export default GeneratedLinkRow;
