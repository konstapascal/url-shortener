import isUrl from './isUrl';

export default function isValidFile(fileContent) {
	const isArray = Array.isArray(fileContent);
	if (!isArray) return false;

	const isArrayOfValidObjs = fileContent.every(obj => {
		const isObjValid = !!obj && obj.constructor === Object;
		const areObjKeysValid = 'url' in obj && 'slug' in obj;
		const isUrlValid = isUrl(obj.url);
		const isSlugValid = obj.slug !== '' && !obj.slug.includes(' ');

		return isObjValid && areObjKeysValid && isUrlValid && isSlugValid;
	});

	return isArray && isArrayOfValidObjs;
}
