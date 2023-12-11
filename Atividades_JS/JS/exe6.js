function ref(){
var n = document.getElementById("nome").value;
var ultima = n.substring(n.lastIndexOf(" ")+1);
document.getElementById("citacao").innerHTML = 
"Citacão Bibliográfica: " + ultima.toUpperCase(); + ","

}