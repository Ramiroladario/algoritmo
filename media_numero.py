class Comparador:
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c

    def comparar(self):
        return self.a == self.b == self.c
    
    def mostrar_resultado(self):
        print(self.comparar())


    # Uso
if __name__ == '__main__':
        comp = Comparador(1, 1, 1)
        comp.mostrar_resultado() # Imprime True