function mostrar()
{
let numIngresado;
let parificador;
let contador;
numIngresado = parseInt(prompt("Eliga un número:"));
for(contador = 1; contador <= numIngresado; contador++){
	parificador = contador % 2;
	if(parificador == 0){
		console.log(contador)
	}	
};

}//FIN DE LA FUNCIÓN