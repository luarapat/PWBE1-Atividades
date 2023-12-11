var numContas = 0;
var valTotal = 0;
var resposta = "";

// Recuperando os dados do localStorage, se existirem
if (localStorage.getItem("numContas") !== null) {
    numContas = parseInt(localStorage.getItem("numContas"));
     // Se "numContas" existe no localStorage, recupera o valor e converte para número inteiro
}

if (localStorage.getItem("valTotal") !== null) {
    valTotal = parseFloat(localStorage.getItem("valTotal"));
     // Se "valTotal" existe no localStorage, recupera o valor e converte para número decimal
}

if (localStorage.getItem("resposta") !== null) {
    resposta = localStorage.getItem("resposta");
     // Se "resposta" existe no localStorage, recupera o valor
}

function atualizarDados() {
    var inDescricao = document.getElementById("inDescricao");
    var inValor = document.getElementById("inValor");
    var outListaContas = document.getElementById("outListaContas");
    var outTotal = document.getElementById("outTotal");
    var descricao = inDescricao.value;
    var valor = Number(inValor.value);

    valTotal = valTotal + valor;
    numContas++;
    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";
    outListaContas.textContent = resposta;
    outTotal.textContent = numContas + " Contas - Total R$: " + valTotal.toFixed(2);

    // Salvando os dados no localStorage
    localStorage.setItem("numContas", numContas.toString());
    localStorage.setItem("valTotal", valTotal.toString());
    localStorage.setItem("resposta", resposta);
    inDescricao.value = "";
    inValor.value = "";
    inDescricao.focus();
}
//aqui entra a funçao atualizar dados ao clicar no botão
var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click", atualizarDados);

// Exibindo os dados iniciais
outListaContas.textContent = resposta;
outTotal.textContent = numContas + " Contas - Total R$: " + valTotal;