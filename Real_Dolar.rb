# Solicita a quantidade de reais ao usuário
print "Quantos Reais eu tenho? R$ "
reais = gets.chomp.to_f

# Converte reais para dólares (taxa de câmbio: 5.85)
dolares = reais / 5.85

# Exibe o resultado
puts "Logo, eu tenho U$$ #{dolares.round(2)}."