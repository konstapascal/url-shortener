function GeneratedLinkRow({ url, slug, deleteUrl }) {
	return (
		<div className=' md:flex-row last:mb-0 md:justify-between md:items-center md:mb-10 flex flex-col mb-8 text-left'>
			<div className=' break-all'>
				<div className='mb-3'>
					<h3 className=' text-xl font-semibold'>Full URL</h3>
					<p className='dark:text-blue-400 hover:underline text-blue-500'>
						{url.startsWith('http') ? (
							<a href={url}>{url}</a>
						) : (
							<a href={`//${url}`}>{url}</a>
						)}
					</p>
				</div>
				<div>
					<h3 className='text-xl font-semibold'>Shortened URL</h3>
					<p className='dark:text-blue-400 hover:underline text-blue-500'>
						<a href={`/${slug}`}>{`${window.location.hostname}/${slug}`}</a>
					</p>
				</div>
			</div>

			<div className='md:ml-12 md:mt-0 md:flex-col flex self-center mt-4'>
				<button
					onClick={() => deleteUrl(slug)}
					className=' text-font-white dark:bg-red-700 md:ml-0 md:mt-1 px-4 py-2 ml-1 font-medium transition-colors duration-500 bg-red-600 rounded-md shadow-md'
					type='button'>
					Delete
				</button>
			</div>
		</div>
	);
}
export default GeneratedLinkRow;
