#!/usr/bin/swift

func esPalindromo(palabra: String) -> Bool {
    let invertida = String(palabra.reversed()).lowercased()
    return palabra.lowercased() == invertida
}

print(esPalindromo(palabra: "mex"))
print(esPalindromo(palabra: "Lol"))
