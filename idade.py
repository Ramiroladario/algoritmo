# Define uma classe chamada IdadeCalculator - uma classe é como um modelo para criar objetos
class IdadeCalculator:

    # __init__ é o construtor da classe, é chamado quando criamos um novo objeto
    # self é uma referência ao próprio objeto que está sendo criado
    def __init__(self):
        # Inicializa duas variáveis do objeto com valor 0
        self.ano_atual = 0  # Cria uma variável para armazenar o ano atual
        self.ano_nasc = 0   # Cria uma variável para armazenar o ano de nascimento
    
    # Define um método (função dentro da classe) chamado obter_dados
    def obter_dados(self):
        # input() pede dados ao usuário
        # int() converte a resposta de texto para número inteiro
        # Armazena o resultado na variável ano_atual do objeto
        self.ano_atual = int(input("Em que ano estamos? "))
        
        # Mesma coisa para o ano de nascimento
        self.ano_nasc = int(input("Em que ano você nasceu? "))
    
    # Define um método para calcular a idade
    def calcular_idade(self):
        # Subtrai ano_nasc de ano_atual e retorna o resultado
        return self.ano_atual - self.ano_nasc
    
    # Define um método para mostrar a idade na tela
    def exibir_idade(self):
        # Chama o método calcular_idade() e guarda o resultado na variável idade
        idade = self.calcular_idade()
        # Mostra a idade na tela. f"..." permite inserir variáveis dentro da string usando {}
        print(f"Minha idade será {idade}")

# Verifica se este arquivo está sendo executado diretamente (não importado como módulo)
if __name__ == "__main__":
    # Cria um novo objeto da classe IdadeCalculator
    calculadora = IdadeCalculator()
    # Chama o método obter_dados() do objeto criado
    calculadora.obter_dados()
    # Chama o método exibir_idade() do objeto criado
    calculadora.exibir_idade()
