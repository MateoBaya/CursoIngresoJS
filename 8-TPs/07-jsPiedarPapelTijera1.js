/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let Bot;
let Reintento;

function comenzar()
{
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
    do{
        let min;
        let max;
        min = 1;
        max = 3;
        Bot = Math.round(Math.random() * (max - min) + min);
        Reintento++;
    }while(Reintento == 1);
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
    do{
        let min;
        let max;
        min = 1;
        max = 3;
        Bot = Math.round(Math.random() * (max - min) + min);
        Reintento++;
    }while(Reintento == 1);
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
do{
    let min;
    let max;
    min = 1;
    max = 3;
    Bot = Math.round(Math.random() * (max - min) + min);
    Reintento++;
}while(Reintento == 1);
}//FIN DE LA FUNCIÓN