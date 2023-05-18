// Declarando Variable de LUXON

const DateTime = luxon.DateTime;
const now = DateTime.now();

//    LIGAS
// Creación del Constructor del Objeto DIVISA

class Equipos {
    constructor(escudo, nombre, puntos, goleador) {
        this.escudo = escudo;
        this.nombre = nombre;
        this.puntos = puntos;
        this.goleador = goleador;
    }
    toString() {

        return this.nombre;

    }
}

// Declaración del Vector de las diferentes Divisas

let listaEquipos = [];

// Creación de Objetos con el Constructor DIVISA dentro del Vector listaEquipos []

listaEquipos.push(new Equipos("./img/escudo-barcelona.jpg","Barcelona", 77, "Robert Lewandowski"));
listaEquipos.push(new Equipos("./img/escudo-arsenal.jpg","Arsenal", 75, "Gabriel Martinelli"));
listaEquipos.push(new Equipos("./img/escudo-psg.png","PSG", 75, "Kylian Mbappé"));
listaEquipos.push(new Equipos("./img/escudo-river.png","River", 33, "Beltrán"));
listaEquipos.push(new Equipos("./img/escudo-flumienense.png","Fluminense", 6, "German Cano"));
listaEquipos.push(new Equipos("./img/escudo-napoli.png","Napoli", 78, "Victor Osimhen"));
listaEquipos.push(new Equipos("./img/escudo-borussia.png","Borussia Dortmund", 60, "Jude Bellingham"));

//Creación de variables para los nodos del DOM

let primerDivisa = document.querySelectorAll(".primerDivisa");
let segundaDivisa = document.querySelectorAll(".segundaDivisa");
let tercerDivisa = document.querySelectorAll(".tercerDivisa");
let cuartaDivisa = document.querySelectorAll(".cuartaDivisa");
let quintaDivisa = document.querySelectorAll(".quintaDivisa");
let sextaDivisa = document.querySelectorAll(".sextaDivisa");
let septimaDivisa = document.querySelectorAll(".septimaDivisa");

// Asignación de elementos del Objeto 

primerDivisa[0].innerText = listaEquipos[0].escudo;
primerDivisa[1].innerText = listaEquipos[0].nombre;
primerDivisa[2].innerText = listaEquipos[0].puntos;
primerDivisa[3].innerText = listaEquipos[0].goleador;

segundaDivisa[0].innerText = listaEquipos[1].escudo;
segundaDivisa[1].innerText = listaEquipos[1].nombre;
segundaDivisa[2].innerText = listaEquipos[1].puntos;
segundaDivisa[3].innerText = listaEquipos[1].goleador;

tercerDivisa[0].innerText = listaEquipos[2].escudo;
tercerDivisa[1].innerText = listaEquipos[2].nombre;
tercerDivisa[2].innerText = listaEquipos[2].puntos;
tercerDivisa[3].innerText = listaEquipos[2].goleador;

cuartaDivisa[0].innerText = listaEquipos[3].escudo;
cuartaDivisa[1].innerText = listaEquipos[3].nombre;
cuartaDivisa[2].innerText = listaEquipos[3].puntos;
cuartaDivisa[3].innerText = listaEquipos[3].goleador;

quintaDivisa[0].innerText = listaEquipos[4].escudo;
quintaDivisa[1].innerText = listaEquipos[4].nombre;
quintaDivisa[2].innerText = listaEquipos[4].puntos;
quintaDivisa[3].innerText = listaEquipos[4].goleador;

sextaDivisa[0].innerText = listaEquipos[5].escudo;
sextaDivisa[1].innerText = listaEquipos[5].nombre;
sextaDivisa[2].innerText = listaEquipos[5].puntos;
sextaDivisa[3].innerText = listaEquipos[5].goleador;

septimaDivisa[0].innerText = listaEquipos[6].escudo;
septimaDivisa[1].innerText = listaEquipos[6].nombre;
septimaDivisa[2].innerText = listaEquipos[6].puntos;
septimaDivisa[3].innerText = listaEquipos[6].goleador;

// MERCADO 

class producto {
    constructor(id, titulo, imagen, precio) {
      this.id = id;
      this.titulo = titulo;
      this.imagen = imagen;
      this.precio = precio;
      this.cantidad = 1;
    }
  }

const productosMercado = [];

productosMercado.push(new producto("g1","Red Milan","./img/ac-milan.jpg",10000));
productosMercado.push(new producto("g2","Arsenal","./img/arsenal.jpg",11500));
productosMercado.push(new producto("g3","Atletico Madrid","./img/atletico-madrid.jpg",11250));
productosMercado.push(new producto("g4","Barcelona","./img/barcelona.webp",10500));
productosMercado.push(new producto("g5","Bayern Leverkusen","./img/bayern-leverkusen.jpg",9200));
productosMercado.push(new producto("g6","Bayern Munich","./img/bayern-munich.avif",12000));
productosMercado.push(new producto("g7","Boca","./img/boca.webp",12400));
productosMercado.push(new producto("g8","Borussia Dortmund","./img/borussia-dortmund.jpg",9700));
productosMercado.push(new producto("g9","Huracan","./img/huracan.jpg",8800));
productosMercado.push(new producto("g10","Independiente","./img/independiente.jpg",9400));
productosMercado.push(new producto("g11","Inter","./img/inter.jpg",13000));
productosMercado.push(new producto("g12","Lanus","./img/lanus.png",7000));
productosMercado.push(new producto("g13","Lille","./img/lille.webp",7600));
productosMercado.push(new producto("g14","Liverpool","./img/liverpool.jpg",13300));
productosMercado.push(new producto("g15","Lyon","./img/lyon.jpg",9500));
productosMercado.push(new producto("g16","Manchester City","./img/man-city.webp",15000));
productosMercado.push(new producto("g17","Manchester United","./img/manunited.jpg",13700));
productosMercado.push(new producto("g18","Monaco","./img/monaco.jpg",8400));
productosMercado.push(new producto("g19","Paris Saint-Germain","./img/psg.jpg",11000));
productosMercado.push(new producto("g20","Racing","./img/racing.jpg",8900));
productosMercado.push(new producto("g21","Real Madrid","./img/realmadrid.jpg",14800));
productosMercado.push(new producto("g22","River","./img/river.webp",13000));
productosMercado.push(new producto("g23","San Lorenzo","./img/san-lorenzo.jpg",8800));
productosMercado.push(new producto("g24","Shalcke","./img/shalcke.webp",9900));
productosMercado.push(new producto("g25","Tottenham","./img/tottenham.jpg",12900));

let carrito = [];

const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {
    productosMercado.forEach((producto) => {
      const div = document.createElement("div");
      div.classList.add(
        "producto",
        "col-xl-4",
        "col-md-6",
        "col-sm-12",
        "p-2",
        "pb-1",
        "text-center"
      );
      div.innerHTML = `<img class="card-img-top img-fluid" src="${producto.imagen}" alt="${producto.titulo}">
                          <div class="card-body">
                              <h4 class="card-title">${producto.titulo}</h3>
                              <p class="card-text py-1">$${producto.precio}</p>
                              <button class="btn btn-info" id="boton${producto.id}">Agregar</button>
                          </div>`;
  
      contenedorProductos.appendChild(div);
  
      // agregar productos al Carrito
  
      const boton = document.getElementById(`boton${producto.id}`);
      boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id);
        Swal.fire({
          position: 'bottom-start',
          icon: 'success',
          text: `"${producto.titulo}" se agregó al carrito`,
          showConfirmButton: false,
          timer: 1500,
          width: `25%`,
          padding: `1rem`,
        })
      });
    });
  }

  /* const carritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
  if (carritoLS) {
    carrito = carritoLS;
  } else {
    carrito = [];
  }; */
  
  cargarProductos();
  
  const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find((producto) => producto.id === id);
    if (productoEnCarrito) {
      productoEnCarrito.cantidad++;
    } else {
      const producto = producto.find((producto) => producto.id === id);
      carrito.push(producto);
    }
  
    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
  };

// TRABAJO - INICIO

let fecha = new Date();

class Datos {

    constructor(nombre, apellido, correo, telefono) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.telefono = telefono;
    }

    toString() {

        return this.nombre;

    }

}

let formDatos = document.querySelector("#formDatos");
let nombreDatos = document.querySelector("#nombreDatos");
let apellidoDatos = document.querySelector("#apellidoDatos");
let correoDatos = document.querySelector("#correoDatos");
let telefonoDatos = document.querySelector("#telefonoDatos");
let resumenDatos = document.querySelector("#resumenDatos");

// Guardando datos de formulario en el LocalStorage

let postulante = JSON.parse(localStorage.getItem("Usuario")) ?? [];

if (postulante.length > 0) {

    resumenDatos.innerText = ("\nMuchas gracias por contactarnos. Si tu perfil encaja con nuestra búsqueda, te estaremos contactando." + "\n\n" + "Fecha: " + now.toLocaleString(DateTime.DATETIME_MED) + "\n" + "Nombre: " + (postulante.nombre).toUpperCase() + "\n" + "Apellido: " + (postulante.apellido).toUpperCase() + "\n" + "Correo Electrónico: " + (postulante.correo).toUpperCase() + "\n" + "Número de Teléfono: " + (postulante.telefono));
}

formDatos.addEventListener("submit", (event) => {

    event.preventDefault();

    if ((nombreDatos.value !== "") && (apellidoDatos.value !== "") && (correoDatos.value !== "") && (telefonoDatos.value !== "")) {

        resumenDatos.innerText = ("\nMuchas gracias por contactarnos. Si tu perfil encaja con nuestra búsqueda, te estaremos contactando." + "\n\n" + "Fecha: " + now.toLocaleString(DateTime.DATETIME_MED) + "\n" + "Nombre: " + (nombreDatos.value).toUpperCase() + "\n" + "Apellido: " + (apellidoDatos.value).toUpperCase() + "\n" + "Correo Electrónico: " + (correoDatos.value).toUpperCase() + "\n" + "Número de Teléfono: " + (telefonoDatos.value));

        let postulante = new Datos(nombreDatos.value, apellidoDatos.value, correoDatos.value, telefonoDatos.value);

        // Agregando Alerta de SweetAlert

        Swal.fire({

            position: 'top-end',
            icon: 'success',
            title: 'Datos enviados correctamente.',
            showConfirmButton: false,
            timer: 2500

        })

        // Guardando datos de formulario en el LocalStorage

        localStorage.setItem('Usuario', JSON.stringify(postulante));

        nombreDatos.focus();
        formDatos.reset();

    } else {

        resumenDatos.innerText = ("\nDebes introducir todos los datos correctamente.");

        // Agregando SetTimeOut

        setTimeout(() => {

            resumenDatos.innerText = "";

        }, 5000);

        // Agregando Alerta de SweetAlert

        Swal.fire({

            icon: 'error',
            title: 'Error!',
            text: 'Debes introducir todos los datos correctamente.',
            timer: 2500

        })

        nombreDatos.focus();
        formDatos.reset();

    }

})


// CONTÁCTANOS - INICIO

class Contacto {

    constructor(nombre, apellido, correo, mensaje) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.mensaje = mensaje;

    }
    toString() {

        return this.nombre;

    }
}

let formContacto = document.querySelector("#formContacto");
let nombreContacto = document.querySelector("#nombreContacto");
let apellidoContacto = document.querySelector("#apellidoContacto");
let correoContacto = document.querySelector("#correoContacto");
let exampleFormControlTextarea1 = document.querySelector("#exampleFormControlTextarea1");
let resumenContacto = document.querySelector("#resumenContacto");

// Guardando datos de formulario en el LocalStorage

let usuarioContacto = JSON.parse(localStorage.getItem("UsuarioContacto")) ?? [];

if (usuarioContacto.length > 0) {

    resumenContacto.innerText = ("\nMuchas gracias por contactarnos. Si tu perfil encaja con nuestra búsqueda, te estaremos contactando." + "\n\n" + "Fecha: " + now.toLocaleString(DateTime.DATETIME_MED) + "\n" + "Nombre: " + (usuarioContacto.nombre).toUpperCase() + "\n" + "Apellido: " + (usuarioContacto.apellido).toUpperCase() + "\n" + "Correo Electrónico: " + (usuarioContacto.correo).toUpperCase() + "\n" + "Número de Teléfono: " + (usuarioContacto.mensaje));

}

formContacto.addEventListener("submit", (event) => {

    event.preventDefault();

    if ((nombreContacto.value !== "") && (apellidoContacto.value !== "") && (correoContacto.value !== "") && (exampleFormControlTextarea1.value !== "")) {

        resumenContacto.innerText = ("\nMuchas gracias por escribirnos. Estaremos en contacto a la brevedad.");

        let usuarioContacto = new DatosCareers(nombreContacto.value, apellidoContacto.value, correoContacto.value, exampleFormControlTextarea1.value);

        setTimeout(() => {

            resumenContacto.innerText = "";

        }, 5000);

        // Agregando Alerta de SweetAlert

        Swal.fire({

            position: 'top-end',
            icon: 'success',
            title: 'Datos enviados correctamente.',
            showConfirmButton: false,
            timer: 2500

        })

        // Guardando datos de formulario en el LocalStorage

        localStorage.setItem('UsuarioContacto', JSON.stringify(usuarioContacto));

        nombreContacto.focus();
        formContacto.reset();

    } else {

        resumenContacto.innerText = ("\nDebes introducir todos los datos correctamente.");

        setTimeout(() => {

            resumenContacto.innerText = "";

        }, 5000);

        // Agregando Alerta de SweetAlert

        Swal.fire({

            icon: 'error',
            title: 'Error!',
            text: 'Debes introducir todos los datos correctamente.',
            timer: 2500

        })

        nombreContacto.focus();
        formContacto.reset();

    }

})

// INGRESAR - INICIO


class Miembro {

    constructor(nombre, correo, contrasenia) {

        this.nombre = nombre;
        this.correo = correo;
        this.contrasenia = contrasenia;

    }
    toString() {

        return this.nombre;

    }
}

let formLogIn = document.querySelector("#formLogIn");
let nombreLogIn = document.querySelector("#nombreLogIn");
let correoLogIn = document.querySelector("#correoLogIn");
let contraseniaLogIn = document.querySelector("#contraseniaLogIn");
let resumenLogIn = document.querySelector("#resumenLogIn");

// Guardando datos de formulario en el LocalStorage

let usuarioIngresar = JSON.parse(sessionStorage.getItem("UsuarioMiembro")) ?? [];

if (usuarioIngresar.length > 0) {

    resumenLogIn.innerText = ("\nBienvenido." + "\n\n" + "Fecha: " + now.toLocaleString(DateTime.DATETIME_MED) + "\n" + "Nombre: " + (usuarioIngresar.nombre).toUpperCase() + "\n" + "Apellido: " + (usuarioIngresar.correo).toUpperCase() + "\n" + "Correo Electrónico: ");

}

formLogIn.addEventListener("submit", (event) => {

    event.preventDefault();

    if ((nombreLogIn.value !== "") && (correoLogIn.value !== "") && (contraseniaLogIn.value !== "")) {


        resumenLogIn.innerText = ("\nBIENVENIDO");

        let usuarioIngresar = new Miembro(nombreLogIn.value, correoLogIn.value, contraseniaLogIn.value);

        setTimeout(() => {
            resumenLogIn.innerText = "";
        }, 5000);

        // Agregando Alerta de SweetAlert

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Datos enviados correctamente.',
            showConfirmButton: false,
            timer: 2500
        })

        // Guardando datos de formulario en el SessionStorage

        sessionStorage.setItem('UsuarioMiembro', JSON.stringify(usuarioIngresar));
        nombreLogIn.focus();
        formLogIn.reset();

    } else {

        resumenLogIn.innerText = ("\nDebes introducir todos los datos correctamente.");

        setTimeout(() => {
            resumenLogIn.innerText = "";
        }, 5000);

        // Agregando Alerta de SweetAlert

        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Debes introducir todos los datos correctamente.',
            timer: 2500
        })
        nombreLogIn.focus();
        formLogIn.reset();
    }

}) 
