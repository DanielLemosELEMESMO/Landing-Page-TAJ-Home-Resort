export const addCaracter = (e) => {
	let element = e;
	let arry = [element];
	if (element.length === 1) {
		arry.splice(0, 0, '(');
		element = arry.join('');
	}
	if (element.length === 3) {
		arry.splice(2, 0, ')');
		element = arry.join('');
	}
	if (element.length === 4) {
		arry.splice(3, 0, ' ');
		element = arry.join('');
	}
	if (element.length === 9) {
		arry.splice(8, 0, '-');
		element = arry.join('');
	}
	return element;
};
