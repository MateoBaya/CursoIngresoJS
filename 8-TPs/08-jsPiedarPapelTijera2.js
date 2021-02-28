let Bot;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	let min;
    let max;
    min = 1;
    max = 3;
    Bot = Math.round(Math.random() * (max - min) + min)
}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(Bot){
        case 1:
            alert("Empataron, de vuelta!");
            Reintento = 1;
            break;
        case 2:
            Reintento = parseInt(prompt("Perdiste. Si quiere reintentar escriba 1"));
            break;
        case 3:
            Reintento = parseInt(prompt("Ganaste!!! ¿Quiere volver a jugar? Escriba 1"));
            break;
        default:
            alert("Esto no debería ocurrir");
    }

}//FIN DE LA FUNCIÓN
function papel()
{
	switch(Bot){
        case 1:
            Reintento = parseInt(prompt("Ganaste!!! ¿Quiere volver a jugar? Escriba 1"));
            break;
        case 2:
            alert("Empataron, de vuelta!");
            Reintento = 1;
            break;
        case 3:
            Reintento = parseInt(prompt("Perdiste. Si quiere reintentar escriba 1"));
            break;
        default:
            alert("Esto no debería ocurrir")
    }
}//FIN DE LA FUNCIÓN
function tijera()
{
    switch(Bot){
		case 1:
			Reintento = parseInt(prompt("Perdiste. Si quiere reintentar escriba 1"))
			break;
			break;
		case 2:
			Reintento = parseInt(prompt("Ganaste!!! ¿Quiere volver a jugar? Escriba 1"));
			break;
		case 3:
			alert("Empataron, de vuelta!")
			Reintento = 1
			break;
		default:
			alert("Esto no debería ocurrir")
	}	
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

}