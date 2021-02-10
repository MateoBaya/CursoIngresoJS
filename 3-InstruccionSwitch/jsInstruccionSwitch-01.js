function mostrar()
{
/*	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;
	if (mesDelAño == "Enero"){
		alert("Que comiences bien el año!!!")
	}
	else if (mesDelAño == "Marzo") {
		alert("A Clases!!!")
	} else if (mesDelAño == "Julio") {
		alert("Se vienen las vacaciones!!!")
	} else if (mesDelAño == "Diciembre") {
		alert("Felices Fiestas!!!")
	}
*/ //Es completamente válido, pero el de abajo es más efectivo, SOLO PARA SITUACIONES ESPECÍFICAS, NO SIRVE PARA UN RANGO DE CONDICIONES
	let mesDelAño;
	mesDelAño = document.getElementById("txtIdMes").value
	switch(mesDelAño){
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("A clases!!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices Fiestas !!!")
			break;
	};
}//FIN DE LA FUNCIÓN