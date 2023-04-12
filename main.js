// Simulador de un comercio

class Producto{
  constructor(nombre, precio, stock){
      this.nombre = nombre;
      this.precio = parseInt(precio);
      this.stock = parseInt(stock);
  }

  vender(cant){
      if (cant <= this.stock){
          this.stock = this.stock - cant;
          return this.precio * cant;
      }else{
          return "Sin stock";
      }
  }

  mostrarInfo(){
      return (
          this.nombre + " $"+
          this.precio 
      );
  }
}

const producto1 = new Producto("Buzo", 3000, 10);
const producto2 = new Producto("Remera", 1500, 10);
const producto3 = new Producto("Jean", 5000, 10);
const producto4 = new Producto("Zapatillas", 6000, 10);
const producto5 = new Producto("Cinturon", 1100, 10);

alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0");
let seleccionarProductos = parseInt(prompt( "1- " + producto1.mostrarInfo() + "\n 2- " + producto2.mostrarInfo() + "\n 3- " + producto3.mostrarInfo() + "\n 4- " + producto4.mostrarInfo() + "\n 5- " + producto5.mostrarInfo()));
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= parseInt(prompt("Selecciono "+ producto1.nombre + ", indique la cantidad"));
            total += cantidad(seleccionarCantidad, producto1.precio);
      break;
    case 2:
        seleccionarCantidad = parseInt(prompt("Selecciono "+ producto2.nombre + ", indique la cantidad"));
        total += cantidad(seleccionarCantidad, producto2.precio);
      break;
    case 3:
      seleccionarCantidad = parseInt(prompt("Selecciono "+ producto3.nombre + ", indique la cantidad"));
      total += cantidad(seleccionarCantidad, producto3.precio);
    break;
    case 4:
      seleccionarCantidad = parseInt(prompt("Selecciono" + producto4.nombre + ", indique la cantidad"));
      total += cantidad(seleccionarCantidad, producto4.precio);
    break;
    case 5:
      seleccionarCantidad = parseInt(prompt("Selecciono " + producto5.nombre + ", indique la cantidad"));
      total += cantidad(seleccionarCantidad, producto5.precio);
    break;
    default:
      break;
  }
  seleccionarProductos = parseInt(prompt( "1- " + producto1.mostrarInfo() + "\n 2- " + producto2.mostrarInfo() + "\n 3- " + producto3.mostrarInfo() + "\n 4- " + producto4.mostrarInfo() + "\n 5- " + producto5.mostrarInfo()));
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