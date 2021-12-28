"use strict";
exports.__esModule = true;
exports.esPalindromo2 = void 0;
function esPalindromo2(palabra) {
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
exports.esPalindromo2 = esPalindromo2;
console.log(esPalindromo2("mex"));
console.log(esPalindromo2("Lol"));
