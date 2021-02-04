/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let Largo;
    Largo = parseInt(document.getElementById("txtIdLargo").value);
    let Ancho;
    Ancho = parseInt(document.getElementById("txtIdAncho").value);
    let Resultado;
    Resultado = ((Largo + Ancho) * 2) * 3;
    alert(`Necesita un alambre de ${Resultado} metros`);
}
function Circulo () 
{
    let Radio;
    Radio = parseInt(document.getElementById("txtIdRadio").value);
    let Resultado;
    Resultado = (2 * Math.PI * Radio) * 3;
    alert(`Necesita un alambre de ${Resultado} metros`);
}
function Materiales () 
{
    let Cemento;
    Cemento = 2 //Para 1*1 metros
    let Cal;
    Cal = 3//Para 1*1 metros
    let Largo;
    Largo = parseInt(document.getElementById("txtIdLargo").value);
    let Ancho;
    Ancho = parseInt(document.getElementById("txtIdAncho").value);
    let ResultadoCal;
    ResultadoCal = Cal * Largo * Ancho;
    let ResultadoCemento;
    ResultadoCemento = Cemento * Largo * Ancho;
    alert(`Vas a necesitar ${ResultadoCal} bolsas de cal y ${ResultadoCemento} bolsas de cemento`);
}