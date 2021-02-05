function mostrar()
{
	let Edad;
	Edad = parseInt(document.getElementById("txtIdEdad").value);
	if (Edad >= 13 && Edad <= 17){
		alert("Sos un adolescente")
	}
	else {
		alert("No sos un adolescente")
	}
}//FIN DE LA FUNCIÓN