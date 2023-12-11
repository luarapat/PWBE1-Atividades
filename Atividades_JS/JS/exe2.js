/*
function clicar(){
  var nome=prompt("Digite seu nome:");
  var email=prompt("Digite seu email:");
  var novali = document.createElement("li");
  novali.innerHTML = "Nome: " + nome + "Email" + email;
  var element = document.getElementById("lista");
  element.appendChild(novali);
}
*/

function add(){
    const nome = prompt("Digite seu nome: ");
    const email = prompt("Digite seu email");

    const node = document.createElement("li");

    const textNode = document.createTextNode("Nome: " + nome + "email: " + email);

    node.appendChild(textNode);

    document.getElementById("lista").appendChild(node);
}