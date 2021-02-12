/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
  let Input;
  Input = parseInt(document.getElementById("txtIdTemperatura").value);
  let Resultado;
  Resultado = (Input - 32) * (5 / 9);
  alert(`${Input} grados Fahrenheit son ${Resultado} grados Celsius`);
}

function CentigradosFahrenheit() {
  let Input;
  Input = parseInt(document.getElementById("txtIdTemperatura").value);
  let Resultado;
  Resultado = Input * (9 / 5) + 32;
  alert(`${Input} grados Celcius son ${Resultado} grados Fahrenheit`);
}
