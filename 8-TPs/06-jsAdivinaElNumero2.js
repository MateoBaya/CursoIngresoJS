/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

let numSecreto;
let contadorIntento;
contadorIntento = 0

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	let max;
	let min;
	max = 100;
	min = 1;  numSecreto = (Math.round(Math.random() * (max - min) + min))
	contadorIntento = 0
}

function verificar()
{
	let intento;
	let numIngresado;
	contadorIntento++;
	intento = document.getElementById("txtIdIntentos");
	intento.value = contadorIntento;
	numIngresado = parseInt(document.getElementById("txtIdNumero").value);
	if(numSecreto == numIngresado){
		switch (contadorIntento){
			case 1:
				alert("Usted es un psiquico");
				break;
			case 2:
				alert("Excelente percepción");
				break;
			case 3:
				alert("Esto es suerte");
				break;
			case 4:
				alert("Excelente técnica");
				break;
			case 5:
				alert("Usted está en la media");
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("Falta técnica");
				break;
			default:
				alert("Afortunado en el amor!!");
		}
	  }else if (numSecreto >= numIngresado){
	   alert(`Falta...`);
	  }else if (numSecreto <= numIngresado){
		alert(`Se pasó...`);
	  };

};