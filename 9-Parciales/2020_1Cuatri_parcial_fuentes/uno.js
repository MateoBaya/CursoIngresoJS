/*
cargar 5 productos
informar si "barbijo" "jabon" o "alochol"
si precio "100" a "300"
no puede ser 0, negativo ni mayor a mil unidades
informar marca y fabricante
informar
alcohol más barato, cant unidades y el fabricante
tipo con mas unidades, promedio por compra
cant de jabones total
 */
function mostrar()
{
	let tipo;
	let precio;
	let unidades;
	let marca;
	let fabricante;
	for(let contador = 1; contador <= 5; contador++){
		console.log(`Producto ${contador}`);
		tipo = tolowercase(prompt("¿Que tipo de producto preventivo es? ¿Barbijo, Jabón o Alocohol?"));
		precio = parseInt(prompt("¿Cuánto costo?"));
		if(precio < 100 || precio > 300){
			alert("Ese precio está mal")
			break;
		}
		unidades = parseInt(prompt("¿Cuántas unidades eran?"));
		if(unidades <= 0 || unidades > 1000){
			alert("Inaceptable");
			break;
		}
		marca = prompt("¿Qué marca era?");
		fabricante = prompt("¿Qué fabricante era?");
		switch(tipo){
			case "barbijo":
				break;
			case "jabón":
				let cantidad;
				cantidad = cantidad + unidades;
				break;
			case "alcohol":
				let min;
				let flag;
				flag = 0
				if(flag = 0){
					min=unidades;
					flag = 1;
				}
				else if(flag = 1){
				}
				break;

		}
	}
}
