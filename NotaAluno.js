<!DOCTYPE html>
<html>
<head>
    <title>Calculadora de Notas</title>
</head>
<body>
    <h1>Calculadora de Notas</h1>
    <form id="notaForm">
        <label for="nota1">Primeira Nota:</label>
        <input type="number" id="nota1" name="nota1" step="0.01" min="0" max="10" required><br><br>
        <label for="nota2">Segunda Nota:</label>
        <input type="number" id="nota2" name="nota2" step="0.01" min="0" max="10" required><br><br>
        <button type="button" onclick="calcular()">Calcular Média</button>
    </form>
    <div id="resultado"></div>

    <script>
        class CalculadoraNotas {
            constructor(nota1, nota2) {
                this.nota1 = nota1;
                this.nota2 = nota2;
                this.media = 0;
            }

            calcularMedia() {
                this.media = (this.nota1 + this.nota2) / 2;
                return this.media;
            }

            getSituacao() {
                if (this.media >= 7) {
                    return "Aluno APROVADO";
                } else if (this.media >= 5) {
                    return "Aluno RECUPERACAO";
                } else {
                    return "Aluno REPROVADO";
                }
            }
        }

        function calcular() {
            const nota1 = parseFloat(document.getElementById('nota1').value);
            const nota2 = parseFloat(document.getElementById('nota2').value);

            // Validação das notas
            if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
                alert("Por favor, insira notas válidas entre 0 e 10.");
                return;
            }

            const calculadora = new CalculadoraNotas(nota1, nota2);
            calculadora.calcularMedia();
            const situacao = calculadora.getSituacao();

            document.getElementById('resultado').innerText = `A média do aluno foi ${calculadora.media.toFixed(2)}\n${situacao}`;
        }
    </script>
</body>
</html>