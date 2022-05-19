public class EsPalindromo2 {
  public static boolean esPalindromo2(String palabra) {	
    int izquierda = 0;
    int derecha = palabra.length() - 1;
    while (izquierda < derecha) {
      if (palabra.toLowerCase().charAt(izquierda) != palabra.toLowerCase().charAt(derecha)) {
	return false;
      }
      izquierda++;
      derecha--;
    }
    return true;
  }

  public static void main(String[] args) {
    System.out.println(esPalindromo2("mex"));
    System.out.println(esPalindromo2("Lol"));
  }
}
