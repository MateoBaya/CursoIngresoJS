/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let Importe;
	Importe = parseInt(document.getElementById("txtIdImporte").value);
	let Porcentaje;
	Porcentaje = Importe * 0.25;
	document.getElementById("txtIdResultado").value = Importe - Porcentaje;
}

