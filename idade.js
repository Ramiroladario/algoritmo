class CalculadoraIdade {
    constructor(){
        this.anoAtual = 0;
        this.anoNascimento = 0;
    }

    pedirAnos() {
        this.anoAtual = parseInt(prompt("Em que ano estamos?"));
        this.anoNascimento = parseInt(prompt("Em que ano você nasceu?"));
    }

    calcularIdade() {
        return this.anoAtual - this.anoNascimento;
    }

    mostrarIdade() {
        const idade = this.calcularIdade();
        console.log('Minha idade será ${idade}');
    }
}

//Uso
const calculadora = new calcularIdade();
calculadora.pedirAnos();
calculadora.mostrarIdade();