class CalculadoraIdade:
    def __init__(self):
        self.ano_atual = 0
        self.ano_nascimento = 0

    def pedir_anos(self):
        self.ano_atual = int(input('Digite o ano atual: '))
        self.ano_nascimento = int(input('Digite o ano de nascimento: '))

    def calcular_idade(self):
        return self.ano_atual - self.ano_nascimento
    
    def mostrar_idade(self):
        print(f'Você tem {self.calcular_idade()} anos.')

    # Uso
    if __name__ == '__main__':
        c = CalculadoraIdade()
        c.pedir_anos()
        c.mostrar_idade()
        