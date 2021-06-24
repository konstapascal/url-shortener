export default function clearInputValues(...inputs) {
	inputs.forEach(input => {
		input.value = '';
	});
}
