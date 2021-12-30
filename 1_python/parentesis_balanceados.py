def parentesis_balanceados(cadena):
    apertura = "([{"
    cierre = ")]}"
    comparador = {")": "(", "]": "[", "}": "{"}
    pila = []
    for caracter in cadena:
        if caracter in apertura:
            pila.append(caracter)
        elif caracter in cierre:
            if len(pila) == 0:
                return False
            if pila[-1] == comparador[caracter]:
                pila.pop()
            else:
                return False
    return len(pila) == 0

print(parentesis_balanceados("{[()]}"))
print(parentesis_balanceados("{[(]}"))

