var numContas = 0;
var valTotal = 0;
var resposta = "";

function registrarConta() {
    var inDescricao = document.getElementById("inDescricao");
    var inValor = document.getElementById("inValor");
    var outListaContas = document.getElementById("outListaContas");
    var outTotal = document.getElementById("outTotal");

// Obtém os valores do campo de descrição e valor do HTML
    var descricao = inDescricao.value;
    var valor = Number(inValor.value);

//Verifica se os campos estão preenchidos corretamente
    //if (descricao == "" || valor == 0 || isNaN(valor)) {
       // inDescricao.focus();
       // return;
   // }
//Atualiza o total das contas
    valTotal = valTotal + valor;
//Incrementa o número de contas e cria uma string de resposta
    numContas++;
    resposta = resposta + descricao + " - R$: " + valor + "\n";
//Exibe a lista de contas e o total nos elementos HTML
    outListaContas.textContent = resposta;
    outTotal.textContent = numContas + " Contas - Total R$: " + valTotal;
//Limpa os campos de entrada e redefine o foco no campo de descrição
    inDescricao.value = "";
    inValor.value = ""; 
    inDescricao.focus();
}




/*
numContas controla o número de contas registradas.
valTotal armazena o valor total das contas registradas.
resposta é uma string que acumula informações sobre todas as contas registradas.
A seguir, ele define a função registrarConta, que é acionada quando o botão "Registrar Conta" é clicado. A função realiza as seguintes ações:
Obtém referências a elementos HTML relevantes por meio de seus IDs, incluindo campos de entrada e áreas de exibição.
Recupera os valores inseridos pelo usuário nos campos de descrição e valor.
Valida os campos, assegurando que a descrição não esteja vazia, o valor não seja zero e seja um número válido; caso contrário, exibe um alerta e redireciona o foco ao campo de descrição para evitar o registro de contas inválidas.
Atualiza o valor total somando o valor da conta atual.
Incrementa o contador de contas.
Cria uma string de resposta que inclui a descrição da conta e o valor formatado em moeda.
Atualiza áreas de exibição HTML com a lista de contas e o total atualizado.
Limpa os campos de entrada e redefine o foco no campo de descrição para facilitar o próximo registro.
Finalmente, o código obtém o botão "Registrar Conta" por meio de seu ID e adiciona um ouvinte de evento de clique. Isso permite que a função registrarConta seja chamada quando o botão é clicado, registrando a conta.
*/