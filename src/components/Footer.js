function Footer() {
	return (
		<footer className=' bg-main-dark bg-light-200 dark:bg-dark-200 pt-16 pb-20 transition-colors duration-500'>
			<div className=' container text-center text-gray-100'>
				<p className='text-font-black dark:text-font-white text-xl transition-colors duration-500'>
					Find me on any of these platforms.{' '}
				</p>
				<div className=' text-font-black dark:text-font-white flex justify-center my-6 text-2xl font-semibold transition-colors duration-500'>
					<a
						className=' dark:hover:text-blue-500 hover:text-blue-400 hover:underline flex items-center mr-3'
						href='https://konstapascal.dev'
						target='_blank'
						rel='noopener noreferrer'>
						Website
					</a>
					<a
						className=' dark:hover:text-blue-500 hover:text-blue-400 hover:underline flex items-center mr-3'
						href='https://github.com/konstapascal'
						target='_blank'
						rel='noopener noreferrer'>
						GitHub
					</a>
					<a
						className=' dark:hover:text-blue-500 hover:text-blue-400 hover:underline flex items-center mr-3'
						href='https://twitter.com/konstapascal'
						target='_blank'
						rel='noopener noreferrer'>
						Twitter
					</a>
					<a
						className=' dark:hover:text-blue-500 hover:text-blue-400 hover:underline flex items-center'
						href='https://www.linkedin.com/in/konstapascal'
						target='_blank'
						rel='noopener noreferrer'>
						LinkedIn
					</a>
				</div>
				<p className='dark:text-gray-400 text-base font-semibold text-gray-400 transition-colors duration-500'>
					Made by Konstantinos Pascal - {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
}
export default Footer;
