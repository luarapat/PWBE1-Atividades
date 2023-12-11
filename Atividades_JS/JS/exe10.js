//funcao do botao
function mos(){
    //variavel que pega o valor do que a pessoa escreveu
    var n = parseInt(document.getElementById("num").value);
    //variavel que vai substituir o lugar qu esta o tabu, mostrando os resultados
    var t = document.getElementById('tabu');
    //a que irá aparecer no t, iniciamente nao tendo nada
    var resultados='';
    //como o numero que vai multiplicar o n varia, usamos o for
    //mult=numeros que vao variar, de 1 ate 10  aumentando de um em um
    for(var mult=1; mult<=10 ; mult++)
     resultados += n + " x " + mult + " = "+
                 n * mult+"</br>";
    //substituição do lugar do t com os resultados (as contas)
    t.innerHTML = resultados;
}