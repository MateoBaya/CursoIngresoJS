function mostrar()
{
	let destinoIngresado
	destinoIngresado = document.getElementById("txtIdDestino").value;
	switch(destinoIngresado){
		case "Bariloche":
			alert("Oeste");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Ushuaia":
			alert("Sur");
			break;
		case "Mar del plata":
			alert("Este");
			break;
	}
}//FIN DE LA FUNCIÓN