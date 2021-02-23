function mostrar()
{
	let cantIngreso;
	cantIngreso = parseInt(prompt("Cuantas veces quiere repetir el mensaje"));
	for(let contador = 1; contador <= cantIngreso; contador++){
		document.write("Hola UTN FRA" + "<br>")
	}
}//FIN DE LA FUNCIÓN