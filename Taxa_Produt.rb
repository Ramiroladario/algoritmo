begin
    # Solicita o preço do produto ao usuário
    print "Qual o preco do produto? US$ "
    preco = gets.chomp.to_f

    # Verifica se o preço é positivo
    if preco < 0
        puts "O preço não pode ser negativo!"
    else
        # Calcula o imposto (60% do preço)
        imposto = (preco * 60) / 100

        # Exibe o preço e o imposto formatados
        puts "Preço do produto: US$ %.2f" % preco
        puts "O imposto sera de US$ %.2f" % imposto
    end
rescue ArgumentError
    puts "Por favor, digite um valor numérico válido!"
end
