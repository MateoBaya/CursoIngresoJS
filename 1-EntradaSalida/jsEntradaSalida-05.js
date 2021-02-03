/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let inputNombre;
	inputNombre = document.getElementById("txtIdNombre");
	let inputEdad;
	inputEdad = document.getElementById("txtIdEdad");
	alert("Usted se llama " + inputNombre.value + " y tiene " + inputEdad.value + " años");
}

