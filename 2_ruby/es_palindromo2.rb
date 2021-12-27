def es_palindromo2?(palabra)
  izquierdo = 0
  derecho = palabra.length - 1
  while izquierdo < derecho
    if palabra[izquierdo].downcase != palabra[derecho].downcase
      return false
    end
    izquierdo += 1
    derecho -= 1
  end
  return true
end

puts es_palindromo2?("mex")
puts es_palindromo2?("Lol")
