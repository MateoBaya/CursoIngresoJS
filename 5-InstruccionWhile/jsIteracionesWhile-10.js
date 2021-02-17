/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar(){
//Suma y cantidad de positivos y negativos
//Cantidad de 0
//Cantidad de pares
//Promedio
//Positivos - Negativos
let positivos;
let negativos;
let contadorN;
let contadorP;
let contadorC;
let parificador;
let contadorPar;
let promedioPositivo;
let promedioNegativo;
let diferencia;
let numIngresado;
let seguir;
seguir = ""
positivos = 0;
negativos = 0;
contadorN = 0;
contadorP = 0;
contadorC = 0;
contadorPar = 0;
promedioNegativo = 0;
promedioPositivo = 0;
do{
	numIngresado = parseInt(prompt("Ingrese los números a analizar"));
	if (numIngresado > 0){
		positivos = positivos + numIngresado;
		contadorP++;
	}
	else if(numIngresado < 0){
		negativos = negativos + numIngresado;
		contadorN++;
	};
	if (numIngresado == 0) {
		contadorC++;
	};
	parificador = numIngresado % 2;
	if (parificador == 0){
		contadorPar++;
	};
	seguir = prompt("¿Quiere parar?");
}while(seguir == "no" || seguir == "No");
if(contadorP > 0){
promedioPositivo = positivos / contadorP;}
if(contadorN > 0){
promedioNegativo = negativos / contadorN;}
diferencia = positivos + negativos;
document.write("La suma de positivos es: "+positivos +"<br>",
"La suma de negativos es: " +negativos + "<br>",
"La cantidad de positivos es: "+contadorP +"<br>",
"La cantidad de negativos es: "+contadorN + "<br>",
"La cantidad de ceros es: "+contadorC +"<br>",
"La cantidad de pares es: "+contadorPar +"<br>",
"El promedio de positivos es: "+promedioPositivo +"<br>",
"El promedio de negativos es: "+promedioNegativo +"<br>",
"La diferencia entre positivos y negativos es: "+diferencia)
}
//FIN DE LA FUNCIÓN