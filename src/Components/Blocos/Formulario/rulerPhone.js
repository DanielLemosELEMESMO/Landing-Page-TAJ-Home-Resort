export const numericRuler = (e) => {
	let result = e.match(
		/([A-Z]|[a-z])|[!@#$%^&*_+\=[\]{};´`':"\|,.<>/?~¿Øø£¥☻®♥♦¼♣«♠»•α◘ß○π♂Σ♀Φ♪±♫≥☼≤►■◄†↑‡↓↔™¨]/g
	)
		? e.length--
		: e;
	return result;
};
