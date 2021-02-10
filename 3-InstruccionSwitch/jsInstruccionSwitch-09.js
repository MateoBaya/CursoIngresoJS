function mostrar()
{
	let estacion;
	let destino;
	let preciofinal;
	const PRECIO = 15000;
	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;
	switch(estacion){
		case "Invierno":
			if (destino == "Bariloche"){
				preciofinal = PRECIO + PRECIO * 0.20;
				alert(`Tu precio final en ${destino} y en ${estacion} es: ${preciofinal}`);
			}
			else if (destino == "Mar del plata"){
				preciofinal = PRECIO - PRECIO * 0.20;
				alert(`Tu precio final en ${destino} y en ${estacion} es: ${preciofinal}`);
			}
			else {
				preciofinal = PRECIO - PRECIO * 0.10;
				alert(`Tu precio final en ${destino} y en ${estacion} es: ${preciofinal}`);
			}
			break;
		case "Verano":
			if (destino == "Bariloche"){
			preciofinal = PRECIO - PRECIO * 0.20;
			alert(`Tu precio final en ${destino} y en ${estacion} es: ${preciofinal}`);
		}
		else if (destino == "Mar del plata"){
			preciofinal = PRECIO + PRECIO * 0.20;
			alert(`Tu precio final en ${destino} y en ${estacion} es: ${preciofinal}`);
		}
		else {
			preciofinal = PRECIO + PRECIO * 0.10;
			alert(`Tu precio final en ${destino} y en ${estacion} es: ${preciofinal}`);
		}
			break;
		default: //acá me voy a tomar la libertad de usar otro método
			switch(destino){
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":
					preciofinal = PRECIO + PRECIO * 0.10;
					alert(`Tu precio final en ${destino} y en ${estacion} es: ${preciofinal}`);
					break;
				case "Cordoba":
					preciofinal = PRECIO
					alert(`Tu precio final en ${destino} y en ${estacion} es: ${preciofinal}`);
				break;
		}
	}
}//FIN DE LA FUNCIÓN