"use strict";
exports.__esModule = true;
exports.esPalindromo = void 0;
function esPalindromo(palabra) {
    var invertida = [];
    for (var i = palabra.length - 1; i >= 0; i--) {
        invertida.push(palabra[i].toLowerCase());
    }
    return palabra.toLowerCase() === invertida.join("");
}
exports.esPalindromo = esPalindromo;
console.log(esPalindromo("mex"));
console.log(esPalindromo("Lol"));
