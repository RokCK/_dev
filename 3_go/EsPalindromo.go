package main
import "fmt"
import "strings"
func EsPalindromo(palabra string) bool {
  base := strings.ToLower(palabra)
  resultado := []byte{}
  for i := len(base) - 1; i >= 0; i-- {
    resultado = append(resultado, base[i])
  }
  return base == string(resultado)
}

func main() {
  fmt.Println(EsPalindromo("mex"))
  fmt.Println(EsPalindromo("Lol"))
}
