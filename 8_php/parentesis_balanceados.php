<?php
function parentesis_balanceados($cadena){
  $apertura = "([{";
  $cierre = ")]}";
  $comparador = array(
    ")" => "(",
    "]" => "[",
    "}" => "{"
  );
  $pila = [];
  $cadena = str_split($cadena);
  foreach($cadena as $caracter){
    if (str_contains($apertura,$caracter)){
      array_push($pila,$caracter);
    }
    elseif(str_contains($cierre,$caracter)){
      if (count($pila) == 0){
	return False;
      }
      if ($pila[count($pila) - 1] == $comparador[$caracter]){
	array_pop($pila);
      } else {
	return False;
      }
    }  
  }
  return count($pila) == 0;
}

echo parentesis_balanceados("{[()]}");
echo parentesis_balanceados("{[(]}");
?>
