function mostrar()
{
  /* 
  Datos de compra hasta que el cliente quiera
  TIPO: arena, cal, cemento
  precio de bolsa (más de cero)
  if 10+ 15% descuento
  if 30+ 25%
  a) importe total, bruto
  b) importe con descuento (si corresponde)
  c) tipo con más cantidad de bolsas
  f) el tipo más caro
  */
 let datoImput;
 let cantidad;
 let precio;
 let pArena;
 let pCal;
 let pCemento;
 let cantArena;
 let cantCal;
 let cantCemento;
 let cantTotal;
 let importeB;
 let importeD;
 let maxPrecio;
 let maxCant;
 let seguir;
 let descuento;
 let flag = 1;
 cantArena = 0;
 cantCal = 0;
 cantCemento = 0;
 pCal = 0;
 pArena = 0;
 pCemento = 0;
 do{
 datoImput = prompt("Elija tipo de bolsa arena/cal/cemento");
 switch(datoImput){
   case "arena":
     precio = parseInt(prompt("Precio:"));
     if (precio == 0){
       precio = parseInt(prompt("No es posible, reintente"))
     }
     pArena = pArena + precio;
     cantidad = parseInt(prompt("¿Cuanto quiere?"));
      cantArena == cantidad;
      cantArena = cantArena + cantidad;
    
     break;
    case "cal":
      precio = parseInt(prompt("Precio:"))
      if (precio == 0){
        precio = parseInt(prompt("No es posible, reintente"))
      }
        pCal = pCal + precio;
      cantidad = parseInt(prompt("¿Cuanto quiere?"));
       cantCal = cantCal + cantidad;
      break;
      case "cemento":
        precio = parseInt(prompt("Precio:"))
        if (precio == 0){
          precio = parseInt(prompt("No es posible, reintente"))
        }
        pCemento = pCemento + precio;

      cantidad = parseInt(prompt("¿Cuanto quiere?"));    
       cantCemento = cantCemento + cantidad;
      break;
    default:
      alert("No es tipo valido");
      break;
 }
 seguir = prompt("¿Quiere continuar?")
 flag = 0
}while(flag || seguir == "si");
importeB = pCal + pCemento + pArena;
cantTotal = cantCemento + cantCal + cantArena;
if(cantTotal <= 10){
  descuento = 0
}else if(cantTotal <= 30){
  descuento = 0.15
}else if(cantTotal > 30){
  descuento = 0.25
}
importeD = importeB - importeB * descuento;
if (cantArena > cantCal && cantArena > cantCemento) {
  maxCant = "Arena";
}else if(cantCal > cantArena && cantCal > cantCemento){
  maxCant = "Cal";
}else if(cantCemento > cantArena && cantCemento > cantCal){
  maxCant = "Cemento"
}
if (pArena > pCal && pArena > pCemento) {
  maxPrecio = "Arena";
}else if(pCal > pArena && pCal > pCemento){
  maxPrecio = "Cal";
}else if(pCemento > pArena && pCemento > pCal){
  maxPrecio = "Cemento";
}
console.log(`Importe a pagar sin desuento: ${importeB}`);
if(descuento != 0);{
  console.log(`Importe con descuento: ${importeD}`);
}
console.log(`Tipo con más cantidad de bolsas: ${maxCant}`);
console.log(`Tipo más caro ${maxPrecio}`);
}
