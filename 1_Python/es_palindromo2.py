def es_palindromo(palabra): # Complejidad Tiempo O(n) | Espacio O(1)
    izquierdo = 0
    derecho = len(palabra) -1
    while izquierdo < derecho:
        if palabra[izquierdo].lower() != palabra[derecho].lower():
            return False
        izquierdo += 1
        derecho -= 1
    return True

print(es_palindromo("mex"))
print(es_palindromo("Lol"))
