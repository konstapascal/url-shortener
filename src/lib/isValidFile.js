import isUrl from './isUrl';

export default function isValidFile(fileContent) {
	const isArray = Array.isArray(fileContent);
	if (!isArray) return false;

	const isArrayOfValidObjs = fileContent.every(elem => {
		const isObjValid = !!elem && elem.constructor === Object;
		const areObjKeysValid = 'url' in elem && 'slug' in elem;
		const isUrlValid = isUrl(elem.url);
		const isSlugString = typeof elem.slug === 'string';
		const isSlugValid = elem.slug !== '' && !elem.slug.includes(' ');

		return isObjValid && areObjKeysValid && isUrlValid && isSlugString && isSlugValid;
	});

	return isArrayOfValidObjs;
}
