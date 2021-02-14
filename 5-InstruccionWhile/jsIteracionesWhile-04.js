/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	let InputValue;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	InputValue = document.getElementById("txtIdNumero");
	while (! (numeroIngresado >= 0 && numeroIngresado < 10)){
		alert("Escribí un número válido");
		numeroIngresado = prompt("ingrese un número entre 0 y 9.")
	};
	if(numeroIngresado >= 0 && numeroIngresado < 10){
		InputValue.value = numeroIngresado;
		alert("Número válido");
		
	};
}//FIN DE LA FUNCIÓN