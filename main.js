// Simulador de un comercio
alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0");
let seleccionarProductos = parseInt(prompt( "1-buzo $3000 \n 2-remera $1500 \n 3-jean $5000 \n 4-Zapatillas $6000 "));
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= parseInt(prompt("el producto seleccionado es buzo, indique la cantidad"));
            total += cantidad(seleccionarCantidad, 3000);
      break;
    case 2:
        seleccionarCantidad = parseInt(prompt("el producto seleccionado es remera, indique la cantidad"));
        total += cantidad(seleccionarCantidad, 1500);
      break;
    case 3:
      seleccionarCantidad = parseInt(prompt("el producto seleccionado es jean, indique la cantidad"));
      total += cantidad(seleccionarCantidad, 5000);
    break;
    case 4:
      seleccionarCantidad = parseInt(prompt("el producto seleccionado es Zapatillas, indique la cantidad"));
      total += cantidad(seleccionarCantidad, 6000);
    break;

    default:
      break;
  }
  seleccionarProductos = parseInt(prompt( "1-buzo $3000 \n 2-remera $1500 \n 3-jean $5000 \n 4-Zapatillas $6000 "));
}

alert("el total de la compra es de: " + total)


const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" )
  if (metodo == "tarjeta") {
    total *= 1.2
    alert("El total a abonar con tarjeta es" + " " + total);
  }else if ( metodo == "efectivo") {
    total -= 1000
    alert("tenes un descuento de 1000, el total es:" + " " + total);
  } else {
    alert("Opcion Invalida");
  }
}

metodoDePago()