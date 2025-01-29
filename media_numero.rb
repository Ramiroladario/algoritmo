class comparador
  def initialize(a, b, c)
    @a = a
    @b = b
    @c = c
    
  end

  def comparar_ab
    @a > @b
end

def mostrar_resultado
  puts comparar_ab
end
end

# Uso
comp = comparador.new(1, 2, 3)
comp.mostrar_resultado # Irá imprimir false
