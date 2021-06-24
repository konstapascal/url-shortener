export const SuccessBox = ({ message }) => {
	if (message === undefined) return null;

	return (
		<div
			className={
				'dark:bg-green-300 px-12 py-4 mt-10 text-lg font-semibold text-green-900 transition-colors duration-500 bg-green-200 rounded-md shadow-md ' +
				(window.location.pathname === '/' ? ' mb-10' : '')
			}>
			{message.msg}
		</div>
	);
};

export const ErrorBox = ({ message }) => {
	if (message === undefined) return null;

	return (
		<div
			className={
				'dark:bg-red-300 px-12 py-4 mt-10 text-lg font-semibold text-red-900 transition-colors duration-500 bg-red-200 rounded-md shadow-md ' +
				(window.location.pathname === '/' ? ' mb-10' : '')
			}>
			{message.msg}
		</div>
	);
};
