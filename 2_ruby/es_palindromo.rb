def es_palindromo?(palabra)
  if palabra.downcase == palabra.reverse.downcase
    return true
  else
    return false
  end
end

puts es_palindromo?("mex")
puts es_palindromo?("Lol")
