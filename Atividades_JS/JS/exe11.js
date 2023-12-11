//funcao do botao
function ex(){
    //variaveis do valor que ira ntrar, o lugar onde ele será colocado e o que vai substituir
    var p =Number(document.getElementById("pre").value);
    var f = document.getElementById('for');
    var formas='';
    //conta de divisão das parcelas, to fixed 2 pra ficar só dois numeros depois do .
    for(var div=1; div<=10 ; div++)
     formas += div + "x de R$" + (p/div).toFixed(2) + "</br>";
    //substituição
    f.innerHTML = formas;
}