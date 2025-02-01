<!DOCTYPE html>
<html>
<head>
    <title>Calculadora de Imposto</title>
</head>
<body>
    <script>
        try {
            // Solicita o preço do produto ao usuário
            let preco = parseFloat(prompt("Qual o preço do produto? US$"));

            // Verifica se é um número válido
            if (isNaN(preco)) {
                throw new Error("Por favor, digite um valor numérico válido!");
            }

            // Verifica se o preço é positivo
            if (preco < 0) {
                throw new Error("O preço não pode ser negativo!");
            }

            // Calcula o imposto (60% do preço)
            let imposto = (preco * 60) / 100;

            // Exibe o preço e o imposto formatados
            let mensagem = `Preço do produto: US$ ${preco.toFixed(2)}\n`;
            mensagem += `O imposto será de US$ ${imposto.toFixed(2)}`;
            alert(mensagem);
        } catch (error) {
            alert(error.message);
        }
    </script>
</body>
</html>