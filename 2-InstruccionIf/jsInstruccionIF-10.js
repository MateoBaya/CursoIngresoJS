function mostrar()
{
	let num;
	let min = 1;
	let max = 10;
	num = Math.round(Math.random() * (max - min) + min);
	if ( num == 9 || num == 10)
	{
		alert(`Excelente: ${num}`)	}
	else {
		if (num >= 4) {
			alert(`Aprobó: ${num}`)
		} else {
			if (num < 4) {
				alert(`Vamos, la próxima se puede: ${num}`)
			}
		}
	}
}