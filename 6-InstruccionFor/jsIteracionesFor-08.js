function mostrar()
{
	let numIngresado;
	let primo;
	let contadorPrimo;
	contadorPrimo=0
	numIngresado = parseInt(prompt("Ingrese número a analizar:"))
	for(let contador=0; contador <=numIngresado; contador++){
		primo = numIngresado % contador
		if(primo == 0){
			contadorPrimo++;
		}
	}
	if (contadorPrimo == 2){
		alert("Es un número primo")
	}
	else{
		alert("No es un número primo")
	}
}//FIN DE LA FUNCIÓN