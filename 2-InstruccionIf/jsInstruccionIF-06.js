function mostrar()
{
	let Edad;
	Edad = parseInt(document.getElementById("txtIdEdad").value);
	if (Edad >= 18){
		alert("Mayor de edad")
	}
	else{
		if (Edad > 13 && Edad <18) {
			alert("Adolescente")
		} 
		else {
			if (Edad <= 13)
			{
				alert("Niño")
			}	
		}
}
}
//FIN DE LA FUNCIÓN