def parentesis_balanceados?(cadena)
  apertura = "([{"
  cierre = ")]}"
  comparador = {")" => "(", "]" => "[", "}" => "{"}
  pila = []
  cadena.chars.each do |caracter|
    if apertura.include? caracter
      pila.append(caracter)
    elsif cierre.include? caracter
      if pila.length == 0
        return false
      end
      if pila[-1] == comparador[caracter]
        pila.pop
      else
        return false
      end
    end
  end
  return pila.length == 0
end

p parentesis_balanceados?("{[()]}")
p parentesis_balanceados?("{[(]}")
