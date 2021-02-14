/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let txtIdSexo;
	txtIdSexo = document.getElementById("txtIdSexo")
	sexoIngresado = prompt("ingrese f ó m .");
	while(!(sexoIngresado == "f" || sexoIngresado == "m")){
		alert(`Escriba su sexo, no su género (Asegurese de usar "f" ó "m").`);
		sexoIngresado = prompt("ingrese f ó m");
	};
	if(sexoIngresado == "f" || sexoIngresado == "m"){
		alert("Validado")
		txtIdSexo.value = sexoIngresado;
	}

}//FIN DE LA FUNCIÓN