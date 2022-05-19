<?php
function es_palindromo2($palabra){
  $izquierdo = 0;
  $derecho = strlen($palabra) - 1;
  while($izquierdo < $derecho){
    if (strtolower($palabra[$izquierdo]) != strtolower($palabra[$derecho])){
      return False;
      $izauierdo++;
      $derecho--;
    }
    return True;
  }
}

echo es_palindromo2("mex");
echo es_palindromo2("Lol");
?>
