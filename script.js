console.log("teste");
function calcular()
{
  console.log("funcao calcula");
  var r = document.getElementById("resistor").value;
  var c = document.getElementById("capacitor").value;
  var tempo = 1.1*r*c*0.000001;
  console.log("resistor=" + resistor);
  console.log("capacitor=" + capacitor);
  console.log("tempo=" + tempo);
  document.getElementById("tempo").innerHTML = "tempo = " + tempo + "(S)";
}