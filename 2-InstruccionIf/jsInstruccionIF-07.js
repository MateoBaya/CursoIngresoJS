function mostrar()
{
	let Edad;
	let Estadocivil;
	Edad = parseInt(document.getElementById("txtIdEdad").value)
	Estadocivil = document.getElementById("estadoCivil").value
	if(
		Edad < 18 && Estadocivil != "Soltero"
	)
	{
		alert("Sos muy joven para NO estar soltero")
	}
}//FIN DE LA FUNCIÓN