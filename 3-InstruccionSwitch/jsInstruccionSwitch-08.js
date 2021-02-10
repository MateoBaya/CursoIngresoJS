function mostrar()
{
	let destino
	destino = document.getElementById("txtIdDestino").value;
	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert("Te informo, hace frío");
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("Te informo, hace calor");
			break;
	}
}//FIN DE LA FUNCIÓN