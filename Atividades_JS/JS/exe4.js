
function teste(){
var preco = document.getElementById("preco").value;
Number(preco);
preco = parseFloat(preco);
console.log(preco);
let nota1 = (Math.floor(preco/100));
document.getElementById("notas100").textContent=
"Notas de R$ 100: " + nota1;
 var resto = preco % 100;
 if (resto>=50){
let nota2 = (Math.floor(resto/50));
document.getElementById("notas50").textContent=
"Notas de R$ 50: " + nota2;
 }
 var outroResto = resto % 50;
 if(outroResto >=10){
let nota3 = (Math.floor(outroResto/10));
document.getElementById("notas10").textContent=
"Notas de R$ 10: " + nota3;
 }
}


//document.getElementById("ex").addEventListener("click", function(){

//});

