export function esPalindromo2(palabra: string) {
  let izquierda = 0;
  let derecha = palabra.length - 1;
  while (izquierda < derecha) {
    if (palabra[izquierda].toLowerCase() !== palabra[derecha].toLowerCase())
      return false;
    izquierda++;
    derecha--;
  }
  return true;
}

console.log(esPalindromo2("mex"));
console.log(esPalindromo2("Lol"));
