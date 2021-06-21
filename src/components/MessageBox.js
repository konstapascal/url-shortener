export const SuccessBox = ({ message }) => {
	if (message === null) return null;

	return (
		<div className='text-font-white dark:bg-green-500 inline-block px-12 py-4 mx-auto mt-8 text-lg font-semibold transition-colors duration-500 bg-green-400 rounded-md shadow-md'>
			{message.msg}
		</div>
	);
};

export const WarningBox = ({ message }) => {
	if (message === null) return null;

	return (
		<div className='dark:bg-yellow-400 dark:text-yellow-800 inline-block px-12 py-4 mx-auto mt-8 text-lg font-semibold text-yellow-700 transition-colors duration-500 bg-yellow-300 rounded-md shadow-md'>
			{message.msg}
		</div>
	);
};
