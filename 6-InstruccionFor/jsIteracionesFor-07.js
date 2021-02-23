function mostrar()
{
	//pedir número
	//mostrar números divisores del número ingesado
	//mostrar CANTIDAD de divisores (yo voy a agregar cuáles son)
	let numIngresado;
	let divisores;
	let contadorDivisor;
	contadorDivisor = 0
	numIngresado = parseInt(prompt("Escriba número a analizar:"));
	for(let contador = 0; contador <= numIngresado; contador++){
		divisores = numIngresado % contador;
		if(divisores == 0){
			console.log("Divisor: " +contador)
			contadorDivisor++
			console.log("Cantidad divisores: "+contadorDivisor)
		}

	}
}//FIN DE LA FUNCIÓN