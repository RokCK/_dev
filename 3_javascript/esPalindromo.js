function esPalindromo(palabra) {
  let invertida = "";
  for (let i = palabra.length - 1; i >= 0; i--) {
    invertida += palabra[i];
  }
  return palabra.toLowerCase() === invertida.toLowerCase();
}

exports.esPalindromo = esPalindromo;

console.log(esPalindromo("mex"));
console.log(esPalindromo("Lol"));
