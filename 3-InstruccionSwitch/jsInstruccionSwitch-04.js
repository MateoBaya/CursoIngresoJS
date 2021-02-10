function mostrar()
{
	//tomo el mes
	let mes
	mes = document.getElementById("txtIdMes").value;
	switch(mes){
		case "Febrero":
			alert("Tiene 28 días");
			break;
		default:
		if (mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre") {
			alert("Tiene 30 días")
		}
		else{
			alert("Tiene 31 días")
		}
		};
	



}//FIN DE LA FUNCIÓN