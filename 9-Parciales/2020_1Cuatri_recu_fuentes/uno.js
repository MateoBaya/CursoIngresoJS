function mostrar()
{
    let tipoIngresado;
    let precio;//entre 100 y 300
    let cantidad;//no 0 ni más de 1000
    let marca;
    let fabricante;
    let maxJabón;
    let cantMaxJabón;
    let fabricanteJabón;
    let maxTipo;
    let promedio;
    let promedioOp;
    let promedioOp2;
    let cantBarbijos;
    let cantJabón;
    let cantAlcohol;
    let contadorMaxTipo;
    let flag = 1;
    let ultraFlag;
    let vecesJ = 0;
    let vecesA = 0;
    let vecesB = 0;
    cantBarbijos = 0;
    cantJabón = 0;
    cantAlcohol = 0;
    maxCant = 0;
    for(let contador = 5; contador > 0; contador--) {
        tipoIngresado = prompt("Compra barbijo/jabón/alcohol");
        precio = parseInt(prompt("¿Cuánto costó?"));
        while(precio < 100 || precio > 300) {
            precio = parseInt(prompt("ERROR. Valor fuera de parámetros"));
        }
        cantidad = parseInt(prompt("¿Cuántos fueron?"));
        while(cantidad <= 0  && cantidad > 1000) {
            cantidad = parseInt(prompt("ERROR. Valor fuera de parámetros"));
        }
        marca = prompt("¿Qué marca era?");
        fabricante = prompt("¿Qué fabricante era?");
        switch(tipoIngresado){
            case "jabón":
                if(flag){
                    maxJabón = precio;
                    cantMaxJabón = cantidad;
                    fabricanteJabón = fabricante;
                    flag = 0
                }else if(precio > maxJabón){
                    maxJabón = precio;
                    cantMaxJabón = cantidad;
                    fabricanteJabón = fabricante;
                }else if(precio == maxJabón){
                    cantMaxJabón = cantMaxJabón + cantidad;
                }
                cantJabón = cantJabón + cantidad;
                vecesJ++;
                break;
            case "barbijo":
                cantBarbijos = cantBarbijos + cantidad;
                vecesB++;
                break;
            case "alcohol":
                cantAlcohol = cantAlcohol + cantidad;
                vecesA++;
                break;
            }
        if(cantJabón==0 && cantAlcohol==0 && cantBarbijos == 0){
            ultraFlag = 0
        }
        else if (cantJabón > cantAlcohol && cantJabón > cantBarbijos) {
            maxTipo = "Jabón";
            promedio = cantJabón / vecesJ;
            ultraFlag = 1;
        }else if (cantAlcohol >= cantJabón && cantAlcohol > cantBarbijos){
            maxTipo = "Alcohól"
            promedio = cantAlcohol / vecesA;
            ultraFlag = 1;
            if (cantAlcohol == cantJabón) {
                contadorMaxTipo = "Jabón";
                promedioOp = cantJabón / vecesJ;
                ultraFlag = 2;
            }
        }else if(cantBarbijos >= cantAlcohol && cantBarbijos > cantJabón) {
            maxTipo = "Barbijos";
            promedio = cantBarbijos / vecesB;
            ultraFlag = 1
            if(cantBarbijos == cantAlcohol){
                contadorMaxTipo = "Alcohol";
                promedioOp = cantAlcohol / vecesA;
                ultraFlag = 2}
        }else if(cantBarbijos == cantAlcohol && cantBarbijos == cantJabón){
            maxTipo = "Todos"
            promedio = cantAlcohol / vecesA;
            promedioOp = cantJabón / vecesJ;
            promedioOp2 = cantBarbijos / vecesB;
            ultraFlag = 3;
        }
    }
    if(fabricanteJabón == undefined){
        fabricanteJabón = "ERROR, no se compró"
        cantMaxJabón = "ERROR, no se compró"
    }
    if(ultraFlag == 0) {
        ultraFlag = "ERROR"
    }else if(ultraFlag == 1){
        ultraFlag = `El tipo de producto con más unidades es ${maxTipo} y su promedio por compra es ${promedio}`
    }else if(ultraFlag == 2){
        ultraFlag = `Los tipos con más unidades son ${maxTipo} y ${contadorMaxTipo} y sus promedios son ${promedio} y ${promedioOp} respectivamente`
    }else if(ultraFlag == 3){
        ultraFlag = `${maxTipo} tienen las mismas unidades, entonces, Alcohol tiene un promedio de ${promedio}, Jabón tiene un promedio de ${promedioOp} y Barbijo tiene un promedio de ${promedioOp2}`
    }
    console.log(`La marca de Jabón más cara es ${fabricanteJabón} y la cantidad comprada fue ${cantMaxJabón}`);
    console.log(ultraFlag);
    console.log(`Se compraron ${cantBarbijos} barbijos`);

}