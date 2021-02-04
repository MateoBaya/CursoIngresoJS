/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let valor1;
    valor1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    let valor2;
    valor2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    let valor3;
    valor3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    let resultado;
    resultado = valor1 + valor2 + valor3
    alert("Resultado: " + resultado)
}
function Promedio () 
{
    let valor1;
    valor1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    let valor2;
    valor2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    let valor3;
    valor3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    let resultado;
    resultado = (valor1 + valor2 + valor3) / 3;
    alert("Resultado: " + resultado);
}
function PrecioFinal () 
{
    let valor1;
    valor1 = parseInt(document.getElementById("txtIdPrecioUno").value);
    let valor2;
    valor2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    let valor3;
    valor3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    let resultado;
    resultado = (valor1 + valor2 + valor3) + ((valor1 + valor2 + valor3) * 0.21)
    alert("Resultado: " + resultado)	
}