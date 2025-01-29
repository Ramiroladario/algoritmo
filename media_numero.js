class Comparador {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    compararAB() {
        if (this.a > this.b) {
            return this.a;
        } else {
            return this.b;
        }
    }

    mostrarResultado() {
        console.log(this.compararAB());
    }
}

// Uso
const comparador = new Comparador(5, 10, 15);
comparador.mostrarResultado(); // irá imprimir: false