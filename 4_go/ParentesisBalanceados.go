package main
import "fmt"
var apertura = map[rune]bool{
  '(': true,
  '[': true,
  '{': true,
}
var cierre = map[rune]bool{
  ')': true,
  ']': true,
  '}': true,
}
var comparador = map[rune]rune{
  ')': '(',
  ']': '[',
  '}': '{',
}

func ParentesisBalanceados(cadena string) bool {
  pila := []rune{}
  for _, caracter := range cadena {
    if _, encontrado := apertura[caracter]; encontrado {
      pila = append(pila, caracter)
      continue
    }
    if _, encontrado := cierre[caracter]; encontrado {
      if len(pila) == 0 {
	return false
      }
      if pila[len(pila)-1] == comparador[caracter] {
	pila = pila[0 : len(pila)-1]
      } else {
	return false
      }
    }
  }
  return len(pila) == 0
}

func main() {
  fmt.Println(ParentesisBalanceados("{[()]}"))
  fmt.Println(ParentesisBalanceados("{[(]}"))
}
