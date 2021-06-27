export default function isValidFile(fileContents) {
	const isArray = Array.isArray(fileContents);
	if (!isArray) return false;

	const isArrayOfValidObjs = fileContents.every(entry => {
		const isEntryObj = Object.getPrototypeOf(entry).constructor === Object;
		const isEntryObjValid = entry.url && entry.slug;

		return isEntryObj && isEntryObjValid;
	});

	return isArray && isArrayOfValidObjs;
}
