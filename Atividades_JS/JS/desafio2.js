function verificarPalindromo() {
    const inputString = document.getElementById("palavra").value.toLowerCase().replace(/[\W_]/g, '');
    //inverte a entrada
    const reversedString = inputString.split('').reverse().join('');
    //verifica se a entrada original é igual à entrada invertida
    if (inputString === reversedString) {
        document.getElementById("resultado").innerHTML ="É um palíndromo!";
    } else {
        document.getElementById("resultado").innerHTML = "Não é um palíndromo.";
    }
}
/*
.toLowerCase(): Isso converte todos os caracteres da 
string em letras minúsculas*/
/*
split(''):divide a string em um array de caracteres,
separando cada caractere em um elemento do array.
.reverse():inverte a ordem dos elementos no array,
 de modo que o primeiro caractere se torna o último e vice-versa.
.join(''):junta os elementos do array novamente em uma única string, 
resultando na string original invertida.
*/
/*
.replace(/[\W_]/g, ''): corresponde a todos os caracteres que não sejam alfabéticos,ou seja,
irá tirar todos os simbolos, acentos e etc...
*/