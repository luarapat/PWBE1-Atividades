
function ver(){
    var numero = document.getElementById("num").value;
Number (numero);
  var redondo= Math.floor(numero);
  var resto = (redondo/2);
  if(resto = redondo % 2 > 0){
document.getElementById("mostrar").textContent=
"o numero é ímpar"
 } if(resto = (redondo % 2 == 0)){
document.getElementById("mostrar").textContent=
"o numero é par"
 }
}
    
    
