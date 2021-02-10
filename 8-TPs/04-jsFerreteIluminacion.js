/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() 
{
    const PRECIO = 35;
    let cantidad;
    let precioDescuento;
    let empresa;
    let impuesto;
    let precioFinal;
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    precioDescuento = document.getElementById("txtIdprecioDescuento");
    empresa = document.getElementById("Marca").value
    if (cantidad >= 6) {
        precioDescuento.value = PRECIO * cantidad - (PRECIO * cantidad) * 0.5
    }
    switch (cantidad){
        case 5:
            switch(empresa){
                case "ArgentinaLuz":
                    precioDescuento.value = PRECIO * cantidad - (PRECIO * cantidad) * 0.4
                    break;
                default:
                    precioDescuento.value = PRECIO * cantidad - (PRECIO * cantidad) * 0.3
            }
            break;
        case 4:
            switch(empresa){
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    precioDescuento.value = PRECIO * cantidad - (PRECIO * cantidad) * 0.25
                    break;
                default:
                    precioDescuento.value = PRECIO * cantidad - (PRECIO * cantidad) * 0.2
            }
            break;
        case 3:
            switch(empresa){
                case "ArgentinaLuz":
                    precioDescuento.value = PRECIO * cantidad - (PRECIO * cantidad) * 0.15
                    break;
                case "FelipeLamparas":
                    precioDescuento.value = PRECIO * cantidad - (PRECIO * cantidad) * 0.1
                    break;
                default:
                    precioDescuento.value = PRECIO * cantidad - (PRECIO * cantidad) * 0.05
            }
            break;
        case 2:
        case 1:
            precioDescuento.value = PRECIO * cantidad
            alert("No tiene descuento")
            break;
    };
    if (precioDescuento.value > 120){
        impuesto = (PRECIO * cantidad)*0.10;
        precioFinal = parseInt(precioDescuento.value) + impuesto;
        alert(`Usted pago ${impuesto} de II.BB. Por ende pagó un total de ${precioFinal}`);
    }    
}
                