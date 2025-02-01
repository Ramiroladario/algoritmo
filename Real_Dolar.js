// Solicita a quantidade de reais ao usuário
let reais = parseFloat(prompt("Quantos Reais eu tenho? R$"));

// Converte reais para dólares (taxa de câmbio: 5.85)
let dolares = reais / 5.85;

// Exibe o resultado
console.log(`Posso ter U$$ ${dolares.toFixed(2)}?`);