function mostrar()
{
	let Edad
	Edad = parseInt(document.getElementById("txtIdEdad").value)//tomo la edad
	if(Edad >= 18){
		alert("Sos mayor de edad")
	}
	if (Edad < 18) {
		alert("Sos menor de edad")		
	}
}//FIN DE LA FUNCIÓN