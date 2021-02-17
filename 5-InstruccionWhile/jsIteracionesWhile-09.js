/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
let max;
let min;
let numeroIngresado;
let TxtMax;
let TxtMin;
let seguir;
let placeHolder;
TxtMax = document.getElementById("txtIdMaximo");
TxtMin = document.getElementById("txtIdMinimo");
placeHolder = 0;
	do{
		numeroIngresado = parseInt(prompt("Escriba los números a analizar"));
		if (placeHolder == 0){
			placeHolder++;
			max = numeroIngresado;
			min = numeroIngresado;
		};
		if(numeroIngresado > max){
			max = numeroIngresado;
		}
		else if (numeroIngresado < min){
			min = numeroIngresado;
		};
		seguir = prompt("¿Quiere continuar?");
	}while(!(seguir == "no" || seguir == "No"));
TxtMax.value = max;
TxtMin.value = min;
}//FIN DE LA FUNCIÓN