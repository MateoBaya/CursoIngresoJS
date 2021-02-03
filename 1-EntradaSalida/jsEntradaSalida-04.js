/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{	let promptNombre 
	promptNombre = prompt("¿Cuál es tu nombre?")
	let Input;
	Input = document.getElementById("txtIdNombre")
	Input.value = promptNombre
}

