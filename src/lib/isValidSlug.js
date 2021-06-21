import slugExists from './slugExists';

export default function isValidSlug(slug) {
	if (slug === '') return { msg: 'The slug field cannot be empty!', type: 'warning' };
	if (slug.includes(' '))
		return {
			msg: 'Cannot have spaces in the slug! Perphaps use dashes.',
			type: 'warning'
		};
	if (slugExists(slug)) return { msg: 'An URL with this slug already exists!', type: 'warning' };

	return true;
}
