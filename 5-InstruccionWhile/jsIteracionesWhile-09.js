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
let flag;
TxtMax = document.getElementById("txtIdMaximo");
TxtMin = document.getElementById("txtIdMinimo");
flag = 0;
	do{
		numeroIngresado = parseInt(prompt("Escriba los números a analizar"));
		if (flag == 0){
			flag++;
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