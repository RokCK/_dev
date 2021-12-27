"use strict";
exports.__esModule = true;
exports.esPalindromo = void 0;
function esPalindromo(palabra) {
    var izquierda = 0;
    var derecha = palabra.length - 1;
    while (izquierda < derecha) {
        if (palabra[izquierda].toLowerCase() !== palabra[derecha].toLowerCase())
            return false;
        izquierda++;
        derecha--;
    }
    return true;
}
exports.esPalindromo = esPalindromo;
console.log(esPalindromo("mex"));
console.log(esPalindromo("Lol"));
