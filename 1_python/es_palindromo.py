def es_palindromo(palabra):
    return palabra.lower() == palabra[::-1].lower()

print(es_palindromo("mex"))
print(es_palindromo("Lol"))

