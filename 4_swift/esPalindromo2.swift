#!/usr/bin/swift

func esPalindromo2(palabra: String) -> Bool {
    var pIzquierda = 0
    var pDerecha = palabra.count - 1
    var izquierda = palabra.index(palabra.startIndex, offsetBy: pIzquierda)
    var derecha = palabra.index(palabra.startIndex, offsetBy: pDerecha)
    while izquierda < derecha {
        if palabra[izquierda].lowercased() != palabra[derecha].lowercased() {
            return false;
        }
        pIzquierda = pIzquierda + 1
        pDerecha = pDerecha - 1
        izquierda = palabra.index(palabra.startIndex, offsetBy: pIzquierda)
        derecha = palabra.index(palabra.startIndex, offsetBy: pDerecha)
    }
    return true
}

print(esPalindromo2(palabra: "mex"))
print(esPalindromo2(palabra: "Lol"))
