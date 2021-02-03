/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let NumeroUno;
	NumeroUno = document.getElementById("txtIdNumeroUno").value;
	let NumeroDos;
	NumeroDos = document.getElementById("txtIdNumeroDos").value
	let resultado;
	resultado = parseInt(NumeroUno) + parseInt(NumeroDos)
	alert("La suma es: " + resultado);
}

