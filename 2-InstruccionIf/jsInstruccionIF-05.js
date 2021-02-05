function mostrar()
{
	let Edad;
	Edad = parseInt(document.getElementById("txtIdEdad").value);
	if (Edad > 17 || Edad < 13){
		alert("No sos un adolescente")
	};
};
//FIN DE LA FUNCIÓN