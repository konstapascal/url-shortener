import React from 'react';

import Footer from './Footer';
import { Link } from 'react-router-dom';
import { GenerateUrlNotFoundPage } from './GenerateUrlNotFoundPage';

const NotFound = () => {
	const slug = window.location.pathname;

	return (
		<>
			<div className=' container flex justify-center my-20'>
				<div className=' text-center'>
					<div className='mb-12'>
						<h3 className='text-4xl font-semibold'>404 - Page Not Found</h3>
						<p className='mt-2 mb-8 text-xl'>
							We are sorry but we could not find an URL with the provided slug (
							{slug.slice(1, slug.length)}).
						</p>
					</div>

					<GenerateUrlNotFoundPage />

					<div className='text-font-white dark:bg-blue-600 inline-block px-4 py-2 mx-auto mt-10 font-medium transition-colors duration-500 bg-blue-500 rounded-md'>
						<Link to={'/'}>Go Back Home</Link>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default NotFound;
