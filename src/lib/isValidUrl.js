import isUrl from './isUrl';
import urlExists from './urlExists';

export default function isValidUrl(url) {
	if (url === '') return { msg: 'The URL field cannot be empty!', type: 'warning' };
	if (!isUrl(url)) return { msg: 'Not a valid URL!', type: 'warning' };
	if (urlExists(url)) return { msg: 'This URL already exists!', type: 'warning' };

	return true;
}
