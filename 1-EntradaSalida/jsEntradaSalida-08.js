/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let NumeroDividendo;
	NumeroDividendo = document.getElementById("txtIdNumeroDividendo").value;
	let NumeroDivisor;
	NumeroDivisor = document.getElementById("txtIdNumeroDivisor").value
	let resultadoresto;
	resultadoresto = parseInt(NumeroDividendo) % parseInt(NumeroDivisor)
	alert("El resto es: " + resultadoresto);
}
