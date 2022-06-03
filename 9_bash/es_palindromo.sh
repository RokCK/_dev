#!/bin/bash
es_palindromo(){
  x=`echo "$1" | tr "[:upper:]" "[:lower:]"`
  y=`echo $x | rev`
  if [ "$x" = "$y" ]; then
      echo True
  else
      echo False
  fi
}

es_palindromo "mex";
es_palindromo "Lol";
