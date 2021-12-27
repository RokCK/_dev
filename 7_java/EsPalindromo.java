public class EsPalindromo {
  public static boolean esPalindromo(String palabra) {	
    StringBuilder invertida = new StringBuilder();
    for (int i = palabra.length() - 1; i >= 0; i--) {
      invertida.append(palabra.toLowerCase().charAt(i));
    }
    return palabra.toLowerCase().equals(invertida.toString());
  }

  public static void main(String[] args) {
    System.out.println(esPalindromo("mex"));
    System.out.println(esPalindromo("Lol"));
  }
}
