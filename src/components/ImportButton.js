function ImportButton({ importUrls }) {
	return (
		<button
			onClick={() => document.querySelector('#fileInput').click()}
			className='text-font-white dark:bg-blue-600 px-4 py-2 font-medium transition-colors duration-500 bg-blue-500 rounded-md shadow-md'
			type='button'>
			Import URLs
			{/* hidden elements, only functionality needed */}
			<label className='sr-only' htmlFor='fileInput'>
				Import URLs button
			</label>
			<input
				id='fileInput'
				className='sr-only'
				onClick={e => (e.target.value = '')}
				onChange={e => importUrls(e)}
				type='file'
				accept={'text/plain'}
			/>
		</button>
	);
}

export default ImportButton;
