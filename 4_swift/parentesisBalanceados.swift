#!/usr/bin/swift

func parentesisBalanceados(cadena: String) -> Bool {
    let apertura = "([{"
    let cierre = ")]}"
    let comparador: [Character: Character] = [")": "(", "]": "[", "}": "{"]
    var pila = [Character]()
    for caracter in cadena {
        if apertura.contains(caracter) {
            pila.append(caracter)
        } else if cierre.contains(caracter) {
            if pila.count == 0 {
                return false
            } else {
                if let ultimo = pila.last, ultimo == comparador[caracter] {
                    _ = pila.popLast()
                } else {
                    return false
                }
            }
        }
    }
    return pila.count == 0
}

print(parentesisBalanceados(cadena: "{[()]}"))
print(parentesisBalanceados(cadena: "{[(]}"))
