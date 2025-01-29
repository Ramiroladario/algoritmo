class CalculadoraIdade
    def initializa
        @ano_atual = 0
        @ano_nascimento = 0
    end

    def pedir_anos
        print "Em que ano estamos? "
        @ano_atual = gets.chomp.to_i
        print "Em que ano você nasceu? "
        @ano_nascimento = gets.chomp.to_i
    end

    def calcular_idade
        @ano_atual - @ano_nascimento
    end

    def mostrar_idade
        idade = calcular_idade
        puts "Minha idade será #{idade}"
    end
end