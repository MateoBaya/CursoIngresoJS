function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let flag = 1;
	let seguir;
	let maxTempratura;
	let contadorViudos;
	let contadorHombresVoS;
	let contadorMayoresTemperaturaAlta;
	let personaMaxTemperatura;
	let contadorPromedio;
	let sumaEdad;
	let promedio;
	contadorHombresVoS = 0;
	contadorViudos = 0;
	contadorMayoresTemperaturaAlta = 0;
	contadorPromedio = 0;
	sumaEdad = 0;

	do{
		nombre = prompt("¿Cuál es tu nombre?");
		edad = parseInt(prompt("¿Cuál es tu edad?"));
		sexo = prompt("¿Cuál es tu sexo? f/m ");
		estadoCivil = prompt("¿Cuál es tu estado civil0? soltero/casado/viudo");
		temperatura = parseInt(prompt("¿Cuál es tu temperatura corporal?"));
		if(flag){
			maxTempratura = temperatura;
			personaMaxTemperatura = nombre;
		}else if (temperatura > maxTempratura){
			maxTempratura = temperatura;
			personaMaxTemperatura = nombre;
		}
		if (edad >= 18 && estadoCivil == "viudo") {
			contadorViudos++;
		}
		switch(estadoCivil){
			case "soltero":
				if(sexo == "m"){
					contadorPromedio++;
					sumaEdad = sumaEdad + edad;
				}
				
			case "viudo":
				if(sexo == "m"){
					contadorHombresVoS++;
				}
				break;
		}
		if (edad > 60 && temperatura > 38){
			contadorMayoresTemperaturaAlta++;
		}

		seguir = prompt("¿Quiere continuar? si/no");
		flag = 0
	}while(flag || seguir == "si")
	promedio = sumaEdad / contadorPromedio;
	console.log(`La persona con más temperatura es: ${personaMaxTemperatura}`);
	console.log(`Hay ${contadorViudos} mayores de edad viudos`);
	console.log(`Hay ${contadorHombresVoS} hombes viudos o solteros`);
	console.log(`Hay ${contadorMayoresTemperaturaAlta} personas de la tercera edad con más de 38 de temperatura`);
	console.log(`El promedio de edad entre hombres solteros es ${promedio}`);

}
