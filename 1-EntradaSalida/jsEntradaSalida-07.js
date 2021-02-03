/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	let NumeroUno;
	NumeroUno = document.getElementById("txtIdNumeroUno").value;
	let NumeroDos;
	NumeroDos = document.getElementById("txtIdNumeroDos").value
	let resultadosuma;
	resultadosuma = parseInt(NumeroUno) + parseInt(NumeroDos)
	alert("La suma es: " + resultadosuma);
}

function restar()
{
	let NumeroUno;
	NumeroUno = document.getElementById("txtIdNumeroUno").value;
	let NumeroDos;
	NumeroDos = document.getElementById("txtIdNumeroDos").value
	let resultadoresta;
	resultadoresta = parseInt(NumeroUno) - parseInt(NumeroDos)
	alert("La suma es: " + resultadoresta);	
}

function multiplicar()
{ 
	let NumeroUno;
	NumeroUno = document.getElementById("txtIdNumeroUno").value;
	let NumeroDos;
	NumeroDos = document.getElementById("txtIdNumeroDos").value
	let resultadomultiplicar;
	resultadomultiplicar = parseInt(NumeroUno) * parseInt(NumeroDos)
	alert("La suma es: " + resultadomultiplicar);
}

function dividir()
{
	let NumeroUno;
	NumeroUno = document.getElementById("txtIdNumeroUno").value;
	let NumeroDos;
	NumeroDos = document.getElementById("txtIdNumeroDos").value
	let resultadodividir;
	resultadodividir = parseInt(NumeroUno) / parseInt(NumeroDos)
	alert("La suma es: " + resultadodividir);
}

