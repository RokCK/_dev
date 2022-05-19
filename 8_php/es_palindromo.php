<?php
function es_palindromo($palabra){
  if (strtolower($palabra) == strrev(strtolower($palabra))){
    return True;}
  else
  {return False;}
}

echo es_palindromo("mex");
echo es_palindromo("Lol");
?>
