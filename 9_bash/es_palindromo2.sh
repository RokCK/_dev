#!/bin/bash
es_palindromo2(){
  palabra=`echo "$1" | tr "[:upper:]" "[:lower:]"`
  izquierdo=0
  x=`echo ${#1}`
  derecho=`expr $x - 1`
  while [ $izquierdo -lt $derecho ]; do
    if [ ${palabra:$izquierdo:1} != ${palabra:$derecho:1} ]; then
      echo False
      break
    fi
    izquierdo=`expr $izquierdo + 1`
    derecho=`expr $derecho - 1`
  echo True
  done
}

es_palindromo2 "mex";
es_palindromo2 "Lol";
