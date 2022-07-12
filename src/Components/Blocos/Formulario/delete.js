export const deleteCaracter = (e) => {
	let element = e;
	let arry = [element];
	if (element.length <= 1 && element === '(') {
		arry.pop();
		element = arry.join();
	}
	if (element.length <= 3 && element === ')') {
		arry.pop();
		element = arry.join();
	}
	if (element.length <= 4 && element === ' ') {
		arry.pop();
		element = arry.join();
	}
	if (element.length <= 9 && element === '-') {
		arry.pop();
		element = arry.join();
	}
	console.log(element.split(''));
	return element;
};
