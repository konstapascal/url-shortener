export const RedirectLoading = () => {
	return (
		<div className='mt-60 lg:mt-72 lg:flex-row flex flex-col items-center justify-center'>
			<div id='lds-dual-ring' />
			<p className='lg:text-4xl lg:mt-0 lg:ml-6 mt-8 text-3xl'>Redirecting...</p>
		</div>
	);
};
