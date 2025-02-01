class CalculadoraNotas
    attr_accessor :nota1, :nota2
  
    def initialize(nota1, nota2)
      @nota1 = nota1
      @nota2 = nota2
      @media = 0.0
    end
  
    def calcular_media
      @media = (@nota1 + @nota2) / 2.0
      @media
    end
  
    def situacao
      if @media >= 7
        "Aluno APROVADO"
      elsif @media >= 5
        "Aluno RECUPERACAO"
      else
        "Aluno REPROVADO"
      end
    end
  end
  
  def validar_nota(nota)
    nota >= 0 && nota <= 10
  end
  
  def obter_nota(numero)
    print "Digite a #{numero}ª nota (0 a 10): "
    nota = gets.chomp.to_f
    until validar_nota(nota)
      puts "Nota inválida! Digite um valor entre 0 e 10."
      print "Digite a #{numero}ª nota (0 a 10): "
      nota = gets.chomp.to_f
    end
    nota
  end
  
  # Captura das notas
  nota1 = obter_nota(1)
  nota2 = obter_nota(2)
  
  # Cálculo da média e situação
  calculadora = CalculadoraNotas.new(nota1, nota2)
  media = calculadora.calcular_media
  situacao = calculadora.situacao
  
  # Exibição do resultado
  puts "\nResultado:"
  puts "A média do aluno foi #{media.round(2)}"
  puts situacao