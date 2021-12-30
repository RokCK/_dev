export function esPalindromo(palabra: string) {
	const invertida: string[] = [];
	for (let i = palabra.length - 1; i >= 0; i--) {
		invertida.push(palabra[i].toLowerCase());
	}
	return palabra.toLowerCase() === invertida.join("");
}

console.log(esPalindromo("mex"));
console.log(esPalindromo("Lol"));
