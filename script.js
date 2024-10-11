/*
Escreva um programa que solicite o valor do produto,
em seguida pergunte se deseja adicionar mais produtos,
se for SIM ou S ou 1 (escolha 1 deles), solicite novamente 
O produto 
Quando a resposta não, apresente a seus valores do produtos 
*/
  
var produtos = [];
var total = 0;
var continuar = true;

while (continuar) {
    var valorProduto = prompt("Digite o valor do produto:");

    valorProduto = parseFloat(valorProduto);

    if (!isNaN(valorProduto) && valorProduto >= 0) {
        produtos.push(valorProduto);
        total += valorProduto;
    } else {
        alert("Valor inválido. Tente novamente.");
        continue;
    }

    var resposta = prompt("Deseja adicionar mais produtos? (SIM/S/1 para sim, qualquer outra tecla para não)").toLowerCase();
    continuar = (resposta === "sim" || resposta === "s" || resposta === "1");
}

alert("Valores dos produtos: " + produtos.join(",") + "\nTotal: R$ " + total.toFixed(2));
