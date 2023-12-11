function cat(){
    //variavel que pega o valor que a pessoa colocou no nome
    var n = document.getElementById("nome").value;
    //variavel que pega o valor da idade
    var i = document.getElementById("idade").value;
    //variavel que pega o espaço que será substituido
    var res = document.getElementById("ca");
    //variavel que vai substituir o res, começando vazia
    var categorias = '';
    //a quantidade de tracos é feita pelo nome.replace substituida pelos -
    var tracos = n.replace(/[A-Za-z]/g,"-");
    //o if que determina a categoria de acordo com a idade
    if(i<=12){
         categorias = "Infantil";
    } else if (i>=13, i<=18){
        categorias = "Juvenil";
    }else if(i>18){
        categorias = "Adulto";
    }
    //como sera exibido na pagina
    categorias = n + "</br>" + tracos + "</br>"+
    "Categoria: " + categorias;
    //substituição feita
    res.innerHTML = categorias;
}
