function mostrar()
{
	let Edad
	Edad = parseInt(document.getElementById("txtIdEdad").value)
	if(Edad >= 18){
		alert("Sos mayor de edad")
	}
	else {
		alert("Sos menor de edad")
	};
}