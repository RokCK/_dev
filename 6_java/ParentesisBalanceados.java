import java.util.*;
public class ParentesisBalanceados {
  public static boolean parentesisBalanceados(String cadena) {	
    String apertura = "([{";
    String cierre = ")]}";
    Map<Character, Character> comparador = new HashMap<Character, Character>();
    comparador.put(')', '(');
    comparador.put(']', '[');
    comparador.put('}', '{');
    List<Character> pila = new ArrayList<Character>();
    for (int i = 0; i < cadena.length(); i++) {
      char caracter = cadena.charAt(i);
      if (apertura.indexOf(caracter) != -1) {
	pila.add(caracter);
      } else if (cierre.indexOf(caracter) != -1) {
	if (pila.size() == 0) {
	  return false;
	}
	if (pila.get(pila.size() -1) == comparador.get(caracter)) {
	  pila.remove(pila.size() -1);
	} else {
	  return false;
	}
      }
    }
    return pila.size() == 0;
  }

  public static void main(String[] args) {
    System.out.println(parentesisBalanceados("{[()]}"));
    System.out.println(parentesisBalanceados("{[(]}"));
  }
}
