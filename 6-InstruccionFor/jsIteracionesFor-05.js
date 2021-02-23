function mostrar()
{
	let numIngresado;
	for(;;){
		numIngresado = parseInt(prompt("Ingrese números:"));
		if(numIngresado == 9){
			break
		};
		console.log(numIngresado)
	};
}//FIN DE LA FUNCIÓN