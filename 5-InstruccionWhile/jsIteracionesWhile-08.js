/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let respuesta;
	let acumulador;
	let cociente;
	let numeroIngresado;
	let resultadoAcumulado;
	let producto;
	let placeHolder;
	placeHolder = 0;
	acumulador = 0;
	cociente = 1;
	respuesta = "si";
	resultadoAcumulado = document.getElementById("txtIdSuma");
	producto = document.getElementById("txtIdProducto");
	//Se puede usar  DO{}while()
	while(!(respuesta == "no" || respuesta == "No")){
		numeroIngresado = parseInt(prompt("Escriba los números a calcular"));
		if(numeroIngresado >= 0){
			acumulador = acumulador + numeroIngresado;
		}
		else if (numeroIngresado < 0){
			placeHolder = 1
			cociente = cociente * numeroIngresado
		}
		respuesta = prompt("¿Quiere seguir calculando?");
	};
	if(placeHolder == 0){
		cociente = 0
	}
	resultadoAcumulado.value = acumulador;
	producto.value = cociente;
}//FIN DE LA FUNCIÓN