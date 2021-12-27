package main
import "fmt"
import "strings"
func EsPalindromo2(palabra string) bool {
  base := strings.ToLower(palabra)
  for i := 0; i < len(base); i++ {
    j := len(base) - i - 1
    if base[i] != base[j] {
      return false
    }
  }
  return true
}

func main() {
  fmt.Println(EsPalindromo2("mex"))
  fmt.Println(EsPalindromo2("Lol"))
}
