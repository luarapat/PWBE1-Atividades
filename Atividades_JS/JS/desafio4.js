// Função para verificar se a entrada é um palíndromo
function verificarPalindromo() {
    var inputString = document.getElementById("palavra").value.toLowerCase().replace(/[\W_]/g, '');
    var reversedString = inputString.split('').reverse().join('');
    if (inputString === reversedString) {
        document.getElementById("resultado").innerHTML = "É um palíndromo!";
    } else {
        document.getElementById("resultado").innerHTML = "Não é um palíndromo.";
    }
    // Armazena o resultado no localStorage
    localStorage.setItem("palindromoResultado", document.getElementById("resultado").innerHTML);
}
// Recupera o resultado anterior do localStorage, se tiver
var resultadoAnterior = localStorage.getItem("palindromoResultado");
if (resultadoAnterior !== null) {
    document.getElementById("resultado").innerHTML = resultadoAnterior;
}