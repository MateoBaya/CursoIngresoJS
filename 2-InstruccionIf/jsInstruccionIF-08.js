function mostrar()
{
 let Edad;
 let Estadocivil;
 Edad = parseInt(document.getElementById("txtIdEdad").value)
 Estadocivil = document.getElementById("estadoCivil").value
 if (Estadocivil == "Soltero" && Edad >= 18){
	 alert("Sos soltero y no sos menor de edad")
 }
}

//FIN DE LA FUNCIÓN