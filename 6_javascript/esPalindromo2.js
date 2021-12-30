function esPalindromo2(palabra) {
  let izquierdo = 0;
  let derecho = palabra.length - 1;
  while (izquierdo < derecho) {
    if (palabra[izquierdo].toLowerCase() != palabra[derecho].toLowerCase())
      return false;
    izquierdo++;
    derecho--;
  }
  return true;
}

exports.esPalindromo2 = esPalindromo2;

console.log(esPalindromo2("mex"));
console.log(esPalindromo2("Lol"));
