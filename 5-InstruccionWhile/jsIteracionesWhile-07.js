/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let respuesta;
	let acumulador;
	let numeroIngresado;
	let resultadoAcumulado;
	let promedio;
	let contador;
	contador = 0;
	acumulador = 0;
	respuesta = "si";
	resultadoAcumulado = document.getElementById("txtIdSuma");
	promedio = document.getElementById("txtIdPromedio");
	while(!(respuesta == "no" || respuesta == "No")){
		contador = contador + 1;
		numeroIngresado = parseInt(prompt("Escriba los números a sumar"));
		acumulador = acumulador + numeroIngresado;
		respuesta = prompt("¿Quiere seguir calculando?");
	};
	resultadoAcumulado.value = acumulador;
	promedio.value = acumulador / contador
}//FIN DE LA FUNCIÓN