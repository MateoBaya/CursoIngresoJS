function mostrar() {
  let contador;
  let acumulador;
  let numeroIngresado;
  let inputAcumulado;
  let promedio;
  acumulador = 0
  contador = 0
  inputAcumulado = document.getElementById("txtIdSuma")
  promedio = document.getElementById("txtIdPromedio")
  while(contador != 5){
	  contador++;
	  numeroIngresado = parseInt(prompt("Escriba los números a sumar"));
    acumulador = acumulador + numeroIngresado;
  }
  inputAcumulado.value = acumulador
  promedio.value = acumulador/5

} //FIN DE LA FUNCIÓN
