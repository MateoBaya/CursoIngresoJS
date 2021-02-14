/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");
	while(claveIngresada != "utn750"){
		alert("Error, intenta otra vez")
		claveIngresada = prompt("ingrese el número clave.");
	}
	if(claveIngresada == "utn750")
	alert("Iniciando sesión")
	
}//FIN DE LA FUNCIÓN
