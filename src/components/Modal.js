import toggleModal from '../lib/toggleModal';

function Modal({ deleteAllUrls }) {
	return (
		<div className='modal fixed inset-0 hidden'>
			<div className='modal-bg text-font-black dark:text-font-white flex items-center justify-center h-full transition-colors duration-500'>
				<div className='modal-content bg-light-200 dark:bg-dark-200 -mt-52 sm:w-auto sm:py-8 sm:px-12 lg:px-24 w-11/12 px-4 py-6 border rounded-md'>
					<div className='modal-text mb-6'>
						<h3 className='lg:text-4xl mb-2 text-3xl font-semibold'>Delete All URLs</h3>
						<p>Are you sure you want to delete all URLs?</p>
					</div>
					<div className='modal-buttons flex justify-center'>
						<button
							onClick={() => deleteAllUrls()}
							className='text-font-white dark:bg-red-700 px-4 py-2 mr-1 font-medium transition-colors duration-500 bg-red-600 rounded-md shadow-md'
							type='button'>
							Delete All
						</button>
						<button
							onClick={() => toggleModal()}
							className=' text-font-white dark:bg-blue-600 px-4 py-2 ml-1 font-medium transition-colors duration-500 bg-blue-500 rounded-md shadow-md'
							type='button'>
							Go Back
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Modal;
